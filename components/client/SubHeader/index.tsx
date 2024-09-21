import React from "react";
import styles from "./SubHeader.module.scss";
export default function Index(): React.ReactNode {
  return (
    <div className={styles.container}>
      <ul className={styles.subnav}>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/accessibility/"
          >
            Accessibility
          </a>
        </li>
        <li className={styles.item}>
          <a data-instant="" className={styles.itemLink} href="/category/ux/">
            UX
          </a>
        </li>
        <li className={styles.item}>
          <a data-instant="" className={styles.itemLink} href="/category/css/">
            CSS
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/javascript/"
          >
            JavaScript
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/performance/"
          >
            Performance
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/design/"
          >
            Design
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/figma/"
          >
            Figma
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/wallpapers/"
          >
            Wallpapers
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/react/"
          >
            React
          </a>
        </li>
        <li className={styles.item}>
          <a data-instant="" className={styles.itemLink} href="/category/vue/">
            Vue
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/round-ups/"
          >
            Round-Ups
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/web-design/"
          >
            Web Design
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/guides/"
          >
            Guides
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/business/"
          >
            Business
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/career/"
          >
            Career
          </a>
        </li>
        <li className={styles.item}>
          <a
            data-instant=""
            className={styles.itemLink}
            href="/category/privacy/"
          >
            Privacy
          </a>
        </li>
      </ul>
    </div>
  );
}
