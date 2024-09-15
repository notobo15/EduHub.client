import React from "react";
import clsx from "clsx";
import styles from "./Header.module.scss";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href={"/"}>
          <img
            src="https://www.smashingmagazine.com/images/logo--full.svg"
            loading="eager"
            decoding="async"
            alt="Smashing Magazine"
          />
        </Link>
      </h1>
      <nav className={styles.mainNav}>
        <ul className={styles.mainNavPrimary}>
          <li className={styles.navItem}>
            <Link
              data-instant=""
              className={styles.navItemLink}
              href="/articles/"
            >
              Articles
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              data-instant=""
              className={styles.navItemLink}
              href="/printed-books/"
            >
              Books
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              data-instant=""
              className={styles.navItemLink}
              href="/online-workshops/"
            >
              Workshops
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              data-instant=""
              className={styles.navItemLink}
              href="/events/"
            >
              Conferences
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              data-instant=""
              className={styles.navItemLink}
              href="/membership/"
            >
              Membership
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link data-instant="" className={styles.navItemLink} href="/jobs/">
              Job Board
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              data-instant=""
              className={styles.navItemLink}
              href="/the-smashing-newsletter/"
            >
              Newsletter
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navItemLink}
              href="https://podcast.smashingmagazine.com"
            >
              Podcasts
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link className={styles.navItemLink} href="/write-for-us/">
              Write for us
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              className={styles.navItemLink}
              href="mailto:advertising@smashingmagazine.com"
            >
              Advertise with us
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.SecondaryNav}></div>
      <div className={styles.search}>
        <form
          className={styles.searchForm}
          method="get"
          action="https://www.google.com/webhp?q=site:smashingmagazine.com"
        >
          <div className={styles.searchInputWrapper}>
            <input
              className={styles.input}
              inputMode="search"
              type="text"
              name="q"
              id="js-search-input"
              autoComplete="off"
              placeholder="Search articles..."
              aria-label="Search articles"
            />
            <a
              id="js-search-clear-button"
              className={styles.searchClearBtn}
              role="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15.35 15.36"
                width={16}
                height={16}
              >
                <title>Clear Search</title>
                <path
                  fill="#e33b2a"
                  d="M8.38 11.41c-.5-.5-.78-.52-1.33.0L4 14.49c-1.18 1.18-1.7 1.18-3-.16s-1.18-2-.18-3L4 8.14A.69.69.0 003.93 7l-3-3c-1-1-1.13-1.81.0-3s1.9-1.21 3.13.0L7 4a.66.66.0 001.11.0c.63-.65 2.49-2.51 3.28-3.35a1.46 1.46.0 012.3-.15c.24.24.47.42.89.84.86.86.94 1.57.05 2.46l-3.27 3.26c-.36.34-.52.58-.16.94l3.27 3.27c1.1 1.1 1.23 1.7.05 2.88l-.58.58a1.59 1.59.0 01-2.46-.21z"
                />
              </svg>
            </a>
          </div>
          <input
            type="submit"
            className={styles.searchBtnSubmit}
            name="submit"
            defaultValue="Search"
          />
          <span />
        </form>
      </div>
    </header>
  );
};

export default Header;
