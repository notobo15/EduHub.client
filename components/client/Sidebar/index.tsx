import Link from "next/link";
import styles from "./Sidebar.module.scss";
import React from "react";
import clsx from "clsx";

export default function Index(): React.ReactNode {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        <div className={styles.group}>
          <div className={styles.groupWrappper}>
            <div className={styles.title}>
              <h2 className={styles.titleText}>Getting Started</h2>
            </div>
            <Link href={""} className={styles.link}>
              <p className={styles.linkText}>Introduction</p>
            </Link>
            <Link href={""} className={clsx(styles.link, "active")}>
              <p className={styles.linkText}>Quick Start</p>
            </Link>
          </div>
        </div>
        <Group
          title="Essentials"
          items={[
            {
              title: "Creating an Application",
              url: "/essentials/application.html",
            },
          ]}
        />
      </nav>
    </aside>
  );
}
interface IItem {
  url: string;
  title: string;
}
function Group({ title, items }: { title: string; items: IItem[] }) {
  return (
    <div className={styles.group}>
      <div className={styles.groupWrappper}>
        <div className={styles.title}>
          <h2 className={styles.titleText}>{title}</h2>
        </div>
        {items.map((item: IItem) => (
          <Item key={item.url} {...item} />
        ))}
      </div>
    </div>
  );
}
function Item({ url, title }: IItem) {
  return (
    <Link href={url} className={styles.link}>
      <p className={styles.linkText}>{title}</p>
    </Link>
  );
}
