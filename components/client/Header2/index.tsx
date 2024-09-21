import React from "react";
import clsx from "clsx";
import styles from "./Header.module.scss";
import Link from "next/link";
import Switch from "../Switch";
import SubHeader from "../SubHeader";
const Header: React.FC = () => {
  const navItems = [
    {
      title: "Cources",
      links: [
        { name: "HTML", href: "/html" },
        { name: "CSS", href: "/css" },
        { name: "JAVASCRIPT", href: "/html" },
        { name: "C#", href: "/html" },
        { name: "JAVA", href: "/html" },
        { name: "PYTHON", href: "/html" },
        { name: "REACT", href: "/html" },
      ],
    },
    {
      title: "Tutorial",
      links: [
        { name: "HTML", href: "/html" },
        { name: "CSS", href: "/css" },
        { name: "JAVASCRIPT", href: "/html" },
        { name: "C#", href: "/html" },
        { name: "JAVA", href: "/html" },
        { name: "PYTHON", href: "/html" },
        { name: "REACT", href: "/html" },
      ],
    },
    { title: "Community", links: [{ name: "Forum", href: "/" }] },
    {
      title: "About",
      links: [
        { name: "Me", href: "/me" },

        { name: "Contact", href: "/me" },
      ],
    },
    { title: "Donate", href: "/me", links: [] },
  ];
  return (
    <>
      <header className={clsx(styles.header)}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.logo}></div>
            <div className={styles.content}>
              <div className={styles.search}>
                <div className={styles.searchForm}>
                  <div className={styles.searchFormLeft}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
                        stroke="currentColor"
                        fill="none"
                        fillRule="evenodd"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span>Search</span>
                  </div>
                  <div className={styles.btnSearchKeys}>
                    <kbd className={styles.btnSearchKey}>Ctrl</kbd>
                    <kbd className={styles.btnSearchKey}>K</kbd>
                  </div>
                </div>
              </div>
              <div className={styles.mainNav}>
                {/* <div className={styles.navGroup}>
                  <button className={styles.navGroupBtn}>
                    <span>Docs</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
                    </svg>
                  </button>
                  <div className={styles.navGroupMenu}>
                    <div className={styles.navGroupMenuWrapper}>
                      <div className={styles.navGroupMenuList}>
                        <Link href="" className={styles.navGroupMenuItem}>
                          Guide
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className={styles.navGroup}>
                  <div className={styles.navGroupBtn}>
                    <span>Docs</span>
                  </div>
                </div> */}
                {navItems.map((item, index) =>
                  item.links.length === 0 ? (
                    <Link
                      href={item?.href || "/"}
                      className={styles.navGroup}
                      key={index}
                    >
                      <div className={styles.navGroupBtn}>
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  ) : (
                    <div key={index} className={styles.navGroup}>
                      <button className={styles.navGroupBtn}>
                        <span>{item.title}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          focusable="false"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"></path>
                        </svg>
                      </button>
                      {
                        <div className={styles.navGroupMenu}>
                          <div className={styles.navGroupMenuWrapper}>
                            <div className={styles.navGroupMenuList}>
                              {item.links.map((link, i) => (
                                <Link
                                  key={i}
                                  href={link.href}
                                  className={styles.navGroupMenuItem}
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  )
                )}
                <div className={styles.navGroup}>
                  <div className={styles.navGroupBtn}>
                    <div className={styles.locales}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 24 24"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.appearance}>
                <Switch />
              </div>
              <Social />
              <div className={styles.userWrapper}>
                <div className={styles.user}>
                  <Link href="/signup" className={styles.signup}>
                    Sign Up
                  </Link>
                  <Link href="/login" className={styles.login}>
                    Log in
                  </Link>
                </div>
              </div>
              <div className={styles.extra}>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="2"></circle>
                    <circle cx="19" cy="12" r="2"></circle>
                    <circle cx="5" cy="12" r="2"></circle>
                  </svg>
                </button>
                <div className={styles.extraMenu}>
                  <div className={styles.extraMenuWrapper}>
                    <div className={styles.extraMenuGroup}>
                      <div className={styles.extraItem}>
                        <p className={styles.extraItemText}>Appearance</p>
                        <div className={styles.extraItemAction}>
                          <Switch />
                        </div>
                      </div>
                    </div>

                    <div className={styles.extraMenuGroup}>
                      <div className={styles.extraItem}>
                        <Social />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

function Social() {
  return (
    <div className={styles.socialLinks}>
      <Link
        className={styles.socialItem}
        href="https://github.com/vuejs/"
        title="github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          className="vt-social-link-icon"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
        {/* <span className={styles.socialItem}>github</span> */}
      </Link>
      <Link
        className={styles.socialItem}
        href="https://twitter.com/vuejs"
        title="twitter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          className="vt-social-link-icon"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        {/* <span className={styles.socialItem}>twitter</span> */}
      </Link>
      <Link
        className={styles.socialItem}
        href="https://discord.com/invite/vue"
        title="discord"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          className="vt-social-link-icon"
        >
          <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" />
        </svg>
        {/* <span className={styles.visuallyHidden}>discord</span> */}
      </Link>
    </div>
  );
}
