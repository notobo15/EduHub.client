"use client";
import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

export default function Index({
  initialValue,
  handleImageUpload,
}: {
  initialValue: string;
  handleImageUpload: any;
}) {
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div>
      <Editor
        apiKey="kyukamdi5rf155cjiksj7jv0spvbpt6s760l17guc83hxuxn"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue}
        cloudChannel="5-dev"
        disabled={false}
        init={{
          height: 500,
          menubar: true,
          language: "en",
          plugins: [
            "mentions advlist autolink link image lists charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars codesample code fullscreen insertdatetime media nonbreaking",
            "save contextmenu directionality emoticons template paste textcolor",
            "media",
            "table",
            "fullpage",
          ],
          // toolbar:
          //   "codesample code | insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons | table | fullpage",
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | emoticons | help",

          automatic_uploads: true,
          table_toolbar:
            "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
          images_upload_url: "http://localhost:5273/api/posts/upload",
          images_reuse_filename: true,
          images_upload_handler: handleImageUpload,
          imagetools_toolbar:
            "rotateleft rotateright | flipv fliph | editimage imageoptions", // Thêm các công cụ chỉnh sửa ảnh
          // image_title: true,
          content_css: "default",
          // image_advtab: true,
          // file_picker_types: "image",
          // image_caption: true,
          toolbar_mode: "sliding",
          codesample_languages: [
            { text: "HTML/XML", value: "markup" },
            { text: "JavaScript", value: "javascript" },
            { text: "CSS", value: "css" },
            { text: "PHP", value: "php" },
            { text: "Ruby", value: "ruby" },
            { text: "Python", value: "python" },
            { text: "Java", value: "java" },
            { text: "C", value: "c" },
            { text: "C#", value: "csharp" },
            { text: "C++", value: "cpp" },
          ],

          emoticons_append: {
            custom_mind_explode: {
              keywords: ["brain", "mind", "explode", "blown"],
              char: "🤯",
            },
          },
          audio_template_callback: (data: any) =>
            "<audio controls>\n" +
            `<source src="${data.source}"${
              data.sourcemime ? ` type="${data.sourcemime}"` : ""
            } />\n` +
            (data.altsource
              ? `<source src="${data.altsource}"${
                  data.altsourcemime ? ` type="${data.altsourcemime}"` : ""
                } />\n`
              : "") +
            "</audio>",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  );
}
