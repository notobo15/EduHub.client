import React from "react";
import clsx from "clsx";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <div
      id="pagetop"
      className={clsx(styles.w3Bar, styles.notranslate, styles.w3White)}
    >
      <a
        id="w3-logo"
        href="https://www.w3schools.com"
        className={clsx(
          styles.w3BarItem,
          styles.w3Button,
          styles.w3HoverNone,
          styles.w3Left,
          styles.gaTop,
          styles.gaTopW3home
        )}
        title="Home"
        style={{ width: "75px" }}
        aria-label="Home link"
      >
        <i
          className={clsx(styles.fa, styles.faLogo, styles.wsHoverTextGreen)}
          style={{
            position: "relative",
            zIndex: 1,
            color: "#04aa6d",
            fontSize: "36px",
          }}
          aria-hidden="true"
        ></i>
      </a>

      <nav className={clsx(styles.tnbDesktopNav, styles.w3BarItem)}>
        <a
          className={clsx(
            styles.tnbNavBtn,
            styles.w3BarItem,
            styles.w3Button,
            styles.barex,
            styles.barItemHover,
            styles.w3Padding16,
            styles.gaTop,
            styles.gaTopTutAndRef
          )}
          href="javascript:void(0)"
          id="navbtn_tutorials"
          title="Tutorials and References"
          role="button"
        >
          Tutorials
          <i
            className={clsx(styles.fa, styles.faCaretDown)}
            style={{ fontSize: "15px" }}
            aria-hidden="true"
          ></i>
          <i
            className={clsx(styles.fa, styles.faCaretUp)}
            style={{ display: "none", fontSize: "15px" }}
            aria-hidden="true"
          ></i>
        </a>

        <a
          className={clsx(
            styles.tnbNavBtn,
            styles.w3BarItem,
            styles.w3Button,
            styles.barex,
            styles.barItemHover,
            styles.w3Padding16,
            styles.gaTop,
            styles.gaTopExcAndQuz
          )}
          href="javascript:void(0)"
          id="navbtn_exercises"
          title="Exercises and Quizzes"
          role="button"
        >
          Exercises
          <i
            className={clsx(styles.fa, styles.faCaretDown)}
            style={{ fontSize: "15px" }}
            aria-hidden="true"
          ></i>
          <i
            className={clsx(styles.fa, styles.faCaretUp)}
            style={{ display: "none", fontSize: "15px" }}
            aria-hidden="true"
          ></i>
        </a>

        <a
          className={clsx(
            styles.tnbNavBtn,
            styles.w3BarItem,
            styles.w3Button,
            styles.barex,
            styles.barItemHover,
            styles.w3Padding16,
            styles.tnbPaidService,
            styles.gaTop,
            styles.gaTopCertAndCourse
          )}
          href="javascript:void(0)"
          id="navbtn_certified"
          title="Certificates"
          role="button"
        >
          Certificates
          <i
            className={clsx(styles.fa, styles.faCaretDown)}
            style={{ fontSize: "15px" }}
            aria-hidden="true"
          ></i>
          <i
            className={clsx(styles.fa, styles.faCaretUp)}
            style={{ display: "none", fontSize: "15px" }}
            aria-hidden="true"
          ></i>
        </a>

        <a
          className={clsx(
            styles.tnbNavBtn,
            styles.w3BarItem,
            styles.w3Button,
            styles.barex,
            styles.barItemHover,
            styles.w3Padding16,
            styles.gaTop,
            styles.gaTopServices
          )}
          href="javascript:void(0)"
          id="navbtn_services"
          title="Our Services"
          role="button"
        >
          Services
          <i
            className={clsx(styles.fa, styles.faCaretDown)}
            style={{ fontSize: "15px" }}
            aria-hidden="true"
          ></i>
          <i
            className={clsx(styles.fa, styles.faCaretUp)}
            style={{ display: "none", fontSize: "15px" }}
            aria-hidden="true"
          ></i>
        </a>
      </nav>

      <a
        className={clsx(
          styles.tnbMenuBtn,
          styles.w3BarItem,
          styles.w3Button,
          styles.barItemHover,
          styles.w3Padding16,
          styles.gaTop,
          styles.gaTopMenu
        )}
        href="javascript:void(0)"
        title="Menu"
        aria-label="Menu"
        role="button"
      >
        Menu
        <i
          className={clsx(styles.fa, styles.faCaretDown)}
          style={{ fontSize: "15px" }}
          aria-hidden="true"
        ></i>
        <i
          className={clsx(styles.fa, styles.faCaretUp)}
          style={{ display: "none", fontSize: "15px" }}
          aria-hidden="true"
        ></i>
      </a>

      <div id="tnb-google-search-container" className={styles.w3BarItem}>
        <div id="tnb-google-search-inner-container">
          <label
            htmlFor="tnb-google-search-input"
            className={styles.tnbSoftHide}
          >
            Search field
          </label>

          <input
            id="tnb-google-search-input"
            type="text"
            placeholder="Search..."
            autoComplete="off"
            aria-label="Search field"
          />

          <div
            id="tnb-google-search-submit-btn"
            className={styles.tnbButtonLight}
            role="button"
            aria-label="Button to search"
          >
            <svg
              id="tnb-google-search-icon"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8153 10.3439C12.6061 9.2673 13.0732 7.9382 13.0732 6.5C13.0732 2.91015 10.163 0 6.57318 0C2.98333 0 0.0731812 2.91015 0.0731812 6.5C0.0731812 10.0899 2.98333 13 6.57318 13C8.01176 13 9.3412 12.5327 10.4179 11.7415L10.4171 11.7422C10.4466 11.7822 10.4794 11.8204 10.5156 11.8566L14.3661 15.7071C14.7566 16.0976 15.3898 16.0976 15.7803 15.7071C16.1708 15.3166 16.1708 14.6834 15.7803 14.2929L11.9298 10.4424C11.8936 10.4062 11.8553 10.3734 11.8153 10.3439ZM12.0732 6.5C12.0732 9.53757 9.61075 12 6.57318 12C3.53561 12 1.07318 9.53757 1.07318 6.5C1.07318 3.46243 3.53561 1 6.57318 1C9.61075 1 12.0732 3.46243 12.0732 6.5Z"
                fill="black"
              ></path>
            </svg>
          </div>
        </div>

        <div id="tnb-google-search-mobile-action-btns">
          <div
            id="tnb-google-search-mobile-show"
            className={styles.tnbButton}
            aria-label="Button to open search field"
            role="button"
          >
            <svg
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8153 10.3439C12.6061 9.2673 13.0732 7.9382 13.0732 6.5C13.0732 2.91015 10.163 0 6.57318 0C2.98333 0 0.0731812 2.91015 0.0731812 6.5C0.0731812 10.0899 2.98333 13 6.57318 13C8.01176 13 9.3412 12.5327 10.4179 11.7415L10.4171 11.7422C10.4466 11.7822 10.4794 11.8204 10.5156 11.8566L14.3661 15.7071C14.7566 16.0976 15.3898 16.0976 15.7803 15.7071C16.1708 15.3166 16.1708 14.6834 15.7803 14.2929L11.9298 10.4424C11.8936 10.4062 11.8553 10.3734 11.8153 10.3439ZM12.0732 6.5C12.0732 9.53757 9.61075 12 6.57318 12C3.53561 12 1.07318 9.53757 1.07318 6.5C1.07318 3.46243 3.53561 1 6.57318 1C9.61075 1 12.0732 3.46243 12.0732 6.5Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div
            id="tnb-google-search-mobile-close"
            className={styles.tnbButton}
            role="button"
            aria-label="Close search field"
          >
            <i>×</i>
          </div>
        </div>
      </div>

      <div id="tnb-dark-mode-toggle-wrapper" className={styles.w3BarItem}>
        <a
          id="tnb-dark-mode-toggle-btn"
          href="javascript:void(0);"
          className={clsx(
            styles.tnbButton,
            styles.fa,
            styles.gaNav,
            styles.gaDarkModeToggle
          )}
          role="button"
          title="Toggle light/dark mode"
          aria-label="Toggle light/dark mode"
        >
          <i></i>
        </a>
      </div>

      <div className={styles.tnbRightSection}>
        <a
          href="https://profile.w3schools.com/log-in?redirect_url=https%3A%2F%2Fwww.w3schools.com%2Fhtml%2Fdefault.asp"
          className={clsx(
            styles.userAnonymous,
            styles.tnbLoginBtn,
            styles.w3BarItem,
            styles.w3Btn,
            styles.barItemHover,
            styles.w3Right,
            styles.wsLightGreen,
            styles.gaTop,
            styles.gaTopLogin
          )}
          title="Login to your account"
          aria-label="Login to your account"
        >
          Log in
        </a>

        <a
          href="https://profile.w3schools.com/sign-up?redirect_url=https%3A%2F%2Fwww.w3schools.com%2Fhtml%2Fdefault.asp"
          className={clsx(
            styles.userAnonymous,
            styles.tnbSignupBtn,
            styles.w3BarItem,
            styles.w3Button,
            styles.w3Right,
            styles.wsGreen,
            styles.wsHoverGreen,
            styles.gaTop,
            styles.gaTopSignup
          )}
          title="Sign Up to Improve Your Learning Experience"
          aria-label="Sign Up to Improve Your Learning Experience"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
