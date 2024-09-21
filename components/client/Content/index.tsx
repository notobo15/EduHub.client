"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./Content.module.scss";
import clsx from "clsx";
import { useGetByIdQuery, useUploadImageMutation } from "@/services/postApi";
import TextEditor from "../TextEditor";

export default function Index(): React.ReactNode {
  const [activeSection, setActiveSection] = useState<string>("");
  const markerRef = useRef<HTMLDivElement | null>(null);
  const scrollListenerRef = useRef<any>(null);
  const sections = [
    { id: "Introduction", title: "Introduction" },
    { id: "Introduction2", title: "Introduction2" },
  ];
  // const { data, isError, isLoading,isSuccess,status,  } = useGetByIdQuery({ id: 3 });
  // console.log("data", data?.data);
  const [uploadImage] = useUploadImageMutation();
  const handleImageUpload = async (
    blobInfo: any, // Đối tượng Blob chứa thông tin về hình ảnh
    success: (url: string) => void, // Hàm callback khi upload thành công
    failure: (message: string) => void // Hàm callback khi upload thất bại
  ) => {
    try {
      const imageFile = blobInfo.blob();
      console.log("imageFile", imageFile);
      // const response = await uploadImage(imageFile).unwrap();

      // console.log("response", response); // Kiểm tra xem API trả về gì

      // if (response.fileName) {
      //   success(response.fileName); // Truyền URL hình ảnh cho TinyMCE
      // } else {
      //   failure("No image URL returned from the server");
      // }
      success("http://moxiecode.cachefly.net/tinymce/v9/images/logo.png");
    } catch (error) {
      console.error("Upload error:", error);
      failure("Upload failed");
    }
  };
  const handleImageUpload2 = (blobInfo: any, progress: any, failure: any) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:5273/api/posts/upload", true);

      const formData = new FormData();
      formData.append("image", blobInfo.blob(), blobInfo.filename());
      //console.log(blobInfo.filename())

      xhr.upload.onprogress = (e) => {
        progress((e.loaded / e.total) * 100);
        if (progress && typeof progress === "function") {
          const percent = 0;
          progress(percent);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 403) {
          reject({ message: "HTTP Error: " + xhr.status, remove: true });
          return;
        }

        if (xhr.status < 200 || xhr.status >= 300) {
          reject("HTTP Error: " + xhr.status);
          return;
        }

        const json = JSON.parse(xhr.responseText);

        if (!json || typeof json.location != "string") {
          reject("Invalid JSON: " + xhr.responseText);
          return;
        }

        resolve(json.location);
      };

      xhr.onerror = () => {
        reject({ message: "Image upload failed", remove: true });
        if (failure && typeof failure === "function") {
          failure("Image upload failed");
        }
      };

      xhr.send(formData);
    });
  };
  const offset = 150; // Khoảng cách bù trừ để tránh bị che bởi header cố định

  // Function to handle scroll and determine the active section
  const handleScroll = () => {
    let foundSection = activeSection;

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const scrollPosition = window.scrollY;

        // Kiểm tra nếu phần tử đã xuất hiện trong vùng offset
        if (scrollPosition >= elementPosition + scrollPosition - offset) {
          foundSection = section.id;
        }
      }
    });

    if (foundSection !== activeSection) {
      setActiveSection(foundSection);
    }
  };

  // Update marker position based on active section
  useEffect(() => {
    const activeIndex = sections.findIndex(
      (section) => section.id === activeSection
    );
    if (markerRef.current && activeIndex !== -1) {
      const top = 33 + activeIndex * 28;
      markerRef.current.style.top = `${top}px`; // +28px for each item
    }
  }, [activeSection]);

  // Attach scroll event listener
  useEffect(() => {
    scrollListenerRef.current = handleScroll;
    window.addEventListener("scroll", scrollListenerRef.current);
    return () =>
      window.removeEventListener("scroll", scrollListenerRef.current);
  }, []);

  // Function to handle clicking on the outline items
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      // Tạm thời vô hiệu hóa sự kiện scroll
      window.removeEventListener("scroll", scrollListenerRef.current);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Cập nhật trạng thái activeSection
      setActiveSection(id);

      // Sau khi cuộn xong, bật lại sự kiện scroll
      setTimeout(() => {
        window.addEventListener("scroll", scrollListenerRef.current);
      }, 500); // Delay nhỏ để đảm bảo cuộn xong
    }
  };

  return (
    <div className={clsx(styles.content, styles.hasSidebar)}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.aside}>
            <div className={styles.asideContainer}>
              <div className={styles.asideOutline}>
                <div ref={markerRef} className={styles.outlineMarker}></div>
                <div className={styles.outlineTitle}>On this page</div>
                <ul className={styles.outlineList}>
                  {sections.map((section, index) => (
                    <li
                      key={section.id}
                      className={clsx(
                        styles.outlineItem,
                        activeSection === section.id && styles.activeItem
                      )}
                    >
                      {/* Custom onClick to handle scroll */}
                      <button
                        onClick={() => handleClick(section.id)}
                        className={styles.outlineLink}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.mainInner}>
              {sections.map((section) => (
                <Section
                  key={section.id}
                  title={section.title}
                  id={section.id}
                />
              ))}
              {/* 
              <div
                dangerouslySetInnerHTML={{ __html: data?.data?.content || "" }}
              ></div> */}

              <TextEditor
                handleImageUpload={handleImageUpload2}
                initialValue={""}
              ></TextEditor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, id }: { title: string; id: string }) {
  return (
    <>
      <h1 id={id} className={styles.mainTitle} style={{ marginTop: "4rem" }}>
        {title}
        {/* Anchor link for accessibility */}
        <a className={styles.anchor} href={`#${id}`}></a>
      </h1>
      <p style={{ height: "100vh" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
        praesentium eos hic saepe numquam aperiam delectus animi voluptate. Hic
        dolore minima ab est nihil asperiores ipsa mollitia porro quam
        obcaecati.
      </p>
    </>
  );
}
