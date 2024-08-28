import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

// import Logo from "public/img/logo/logo.png";
// import Logo from "./logo1.png";
import Logo from "public/img/banner/logo2.png";
import Logo1 from "public/img/banner/logo1111.png";
import { useRouter } from "next/router";

const HeaderNew = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [toggleMenu, setToggleMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-open" : "";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " sm-btn-active" : " ";
  };

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleMenu(false);
      setOpenSubMenu(null);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <div className="fix">
        <div className={(toggleMenu ? " info-open" : " ") + " offcanvas__info"}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image
                      src={Logo1}
                      width={60}
                      height={60}
                      alt="logo not found"
                      priority
                    />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button
                    style={{ background: "#16b99b" }}
                    aria-label="Close"
                    onClick={() => setToggleMenu(false)}
                  >
                    <i className="fal fa-times"></i>
                  </button>
                </div>
              </div>
              {/* <div className="offcanvas__search mb-25">
                <form action="/">
                  <input
                    type="text"
                    placeholder="What are you searching for?"
                    required
                  />
                  <button type="submit">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div> */}
              <div className="mobile-menu fix mb-40 mean-container">
                <div className="mean-bar d-block d-lg-none">
                  <nav className="mean-nav">
                    <ul className="">
                      <li className="has-dropdown">
                        <Link
                          className={` ${currentRoute === "/" ? "active" : ""}`}
                          href="/"
                        >
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={` ${
                            currentRoute === "/about" ? "active" : ""
                          }`}
                          href="/about"
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={` ${
                            currentRoute === "/service" ? "active" : ""
                          }`}
                          href="/service"
                        >
                          Services
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={` ${
                            currentRoute === "/technology" ? "active" : ""
                          }`}
                          href="/technology"
                        >
                          Technology
                        </Link>
                      </li>

                      <li>
                        <Link
                          className={` ${
                            currentRoute === "/pricing" ? "active" : ""
                          }`}
                          href="/pricing"
                        >
                          Pricing
                        </Link>
                      </li>

                      {/* <li>
                        <Link
                          className={` ${
                            currentRoute === "/project" ? "active" : ""
                          }`}
                          href="/project"
                        >
                          Portfolio
                        </Link>
                      </li> */}

                      <li className="has-dropdown">
                        <button
                          className={`${isSubMenuButton("pages")}`}
                          onClick={() => handleSubmenu("pages")}
                        >
                          Resources
                          <span className="mean-expand">
                            <i className="fal fa-plus"></i>
                          </span>
                        </button>
                        <ul className={`sub-menu ${isSubMenuOpen("pages")}`}>
                          {/* <li className="has-dropdown">
                              <Link
                                className={` ${
                                  currentRoute === "/project" ? "active" : ""
                                }`}
                                href="/project"
                              >
                                Portfolio
                              </Link>
                            </li> */}

                          <li>
                            <Link
                              className={` ${
                                currentRoute === "/testimonials" ? "active" : ""
                              }`}
                              href="/testimonials"
                            >
                              Testimonials
                            </Link>
                          </li>

                          <li>
                            <Link
                              className={` ${
                                currentRoute === "/test-case" ? "active" : ""
                              }`}
                              href="/test-case"
                            >
                              Test Case
                            </Link>
                          </li>
                          <li>
                            <Link
                              className={` ${
                                currentRoute === "/support" ? "active" : ""
                              }`}
                              href="/support"
                            >
                              Support
                            </Link>
                          </li>

                          <li>
                            <Link
                              // className={` ${
                              //   currentRoute === "/support"
                              //     ? "active"
                              //     : ""
                              // }`}
                              href="https://automationsolutionz.github.io"
                            >
                              Documentation
                            </Link>
                          </li>
                          {/* <li>
                              <Link
                                className={` ${
                                  currentRoute === "/support"
                                    ? "active"
                                    : ""
                                }`}
                                href="/"
                              >
                                Support
                              </Link>
                            </li> */}
                        </ul>
                      </li>

                      {/* <li>
                        <Link
                          className={` ${
                            currentRoute === "/blog" ? "active" : ""
                          }`}
                          href="/blog"
                        >
                          blog
                        </Link>
                      </li> */}

                      <li className="mean-last">
                        <Link
                          className={` ${
                            currentRoute === "/contact" ? "active" : ""
                          }`}
                          href="/contact"
                        >
                          Contact
                        </Link>
                      </li>

                      <li>
                        <Link href="/requestademo">Request A Demo</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="offcanvas__contact mt-30 mb-20">
                <h5 className="mb-3">Contact Info</h5>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link
                        target="_blank"
                        href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873"
                      >
                        151 Charles Street W #100 Kitchener, ON N2G 1H6
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="tel:+088889797697" aria-label="Contact Us">
                        +1 8888 979 7697
                      </Link>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <Link href="tel:+012-345-6789" aria-label="Contact Us">
                        <span className="mailto:support@mail.com">
                          support@zeuz.ai
                        </span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="offcanvas__social">
                <ul>
                  <li>
                    <Link
                      href="https://www.facebook.com/automationsolutionz/"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/zeuz_io?lang=en"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/channel/UCmuvyGik12kr739Nz2qeY8g"
                      target="_blank"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://ca.linkedin.com/company/automation-solutionz"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={(toggleMenu ? " overlay-open" : " ") + " offcanvas__overlay"}
        onClick={() => setToggleMenu(false)}
      ></div>
      <div className="offcanvas__overlay-white"></div>
      <header>
        <div
          id="header-sticky"
          className={
            (scrolled ? " sticky" : " ") + " header__area-3 header__transparent"
          }
          // style={{backgroundColor:"white"}}
        >
          <div className="newHeaderContainer py-2">
            <div className="row align-items-center headerPadding2 py-0">
              <div className="col-xl-2 col-lg-2 col-6">
                <div className={scrolled ? " header__logo1" : "header__logo"}>
                  <Link href="/">
                    <Image
                      className="HeaderLogo"
                      src={Logo}
                      alt="logo not found"
                      priority
                    />
                  </Link>
                </div>
              </div>
              <div className="d-none d-lg-block">
                <div className="menu__main-wrapper-3 d-flex">
                  <div className="main-menu main-menu-3 d-none d-lg-block">
                    <nav
                    //  id="mobile-menu"
                    >
                      <ul className="hoverText">
                        <li className={`has-dropdown`}>
                          <Link
                            className={` ${
                              currentRoute === "/" ? "active" : ""
                            }`}
                            href="/"
                          >
                            Home
                          </Link>
                        </li>

                        <li>
                          <Link
                            className={` ${
                              currentRoute === "/service" ? "active" : ""
                            }`}
                            href="/service"
                          >
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={` ${
                              currentRoute === "/technology" ? "active" : ""
                            }`}
                            href="/technology"
                          >
                            Technology
                          </Link>
                        </li>

                        <li>
                          <Link
                            className={` ${
                              currentRoute === "/pricing" ? "active" : ""
                            }`}
                            href="/pricing"
                          >
                            Pricing
                          </Link>
                        </li>

                        {/* <li>
                          <Link
                            className={` ${
                              currentRoute === "/project" ? "active" : ""
                            }`}
                            href="/project"
                          >
                            Resources
                          </Link>
                        </li> */}

                        <li className="has-dropdown">
                          <button
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className="py-0"
                            aria-label="Select Dropdown"
                            // className={` headerItem${

                            //   currentRoute === "/testimonials"||
                            //   currentRoute === "/blog"
                            //     ? "active"
                            //     : ""
                            // }`}
                          >
                            <Link
                              className={` ${
                                currentRoute === "/testimonials" ||
                                currentRoute === "/blog"
                                  ? "active"
                                  : ""
                              }`}
                              href=""
                            >
                              Resources
                            </Link>
                          </button>
                        </li>

                        {/* <li>
                          <Link
                            className={` ${
                              currentRoute === "/blog" ? "active" : ""
                            }`}
                            href="/blog"
                          >
                            blog
                          </Link>
                        </li> */}
                        <li>
                          <Link
                            className={` ${
                              currentRoute === "/about" ? "active" : ""
                            }`}
                            href="/about"
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <Link
                            className={` ${
                              currentRoute === "/contact" ? "active" : ""
                            }`}
                            href="/contact"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2 col-6">
                <div className="header__right d-flex align-items-center justify-content-end">
                  <div className="header__btn requestDemoButtonCss d-none d-lg-block">
                    <Link
                      className="border__btn s-3"
                      href="/requestademo"
                      style={{ fontSize: 14 }}
                    >
                      Request A Demo
                    </Link>
                  </div>

                  {/* mobile nav */}
                  <div className="header__toggle d-lg-none">
                    <button
                      className="sidebar__active"
                      aria-label="Toggle Sidebar"
                      onClick={handleToggleMenu}
                    >
                      <div className="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {showMenu && (
              <div className="row mt-4">
                <div className="col-6">
                  <p className="pe-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Harum voluptatum nemo optio dicta officia consequatur
                    accusantium eaque provident minus et, eum aspernatur
                    quibusdam consequuntur commodi ipsam tempore aliquam
                    corrupti ducimus neque voluptatem quidem, beatae error
                    ullam! Nobis sequi perspiciatis quo, voluptate ducimus
                    laboriosam quaerat officiis nemo quidem voluptatum, incidunt
                    molestias!
                  </p>
                </div>
                <div className="col-6">
                  <div className="">
                    <ul className="submenu mt-3 hoverTextMenuItems bg-secondary">
                      {/* <li className="has-dropdown">
                              <Link
                                className={` ${
                                  currentRoute === "/project" ? "active" : ""
                                }`}
                                href="/project"
                              >
                                Portfolio
                              </Link>
                            </li> */}

                      <li>
                        <Link
                          className={` ${
                            currentRoute === "/testimonials" ? "active" : ""
                          }`}
                          href="/testimonials"
                        >
                          Testimonials
                        </Link>
                      </li>
                      <li>
                        <Link
                          // className={` ${
                          //   currentRoute === "/support"
                          //     ? "active"
                          //     : ""
                          // }`}
                          href="https://automationsolutionz.github.io"
                        >
                          Documentation
                        </Link>
                      </li>
                      {/* <li>
                              <Link
                                className={` ${
                                  currentRoute === "/blog" ? "active" : ""
                                }`}
                                href="/blog"
                              >
                                blog
                              </Link>
                            </li> */}

                      <li>
                        <Link
                          className={` ${
                            currentRoute === "/test-case" ? "active" : ""
                          }`}
                          href="/test-case"
                        >
                          Test Case
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={` ${
                            currentRoute === "/support" ? "active" : ""
                          }`}
                          href="/support"
                        >
                          Support
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default HeaderNew;
<nav className="navbarTwo">
  {/* <div className="brand-and-icon">
          <a href="index.html" className="navbar-brandTwo">
            ESHOP
          </a>
          <button type="button" className="navbar-togglerTwo">
            <i className="fas fa-bars"></i>
          </button>
        </div> */}

  <div className="navbar-collapseTwo">
    <ul className="navbar-navTwo">
      <li>
        <a href="#">home</a>
      </li>

      <li>
        <a href="#" className="menu-link">
          electronics
          <span className="drop-icon">
            <i className="fas fa-chevron-down"></i>
          </span>
        </a>
        <div className="sub-menuTwo">
          <div className="sub-menu-itemTwo">
            <h4>top categories</h4>
            <ul>
              <li>
                <a href="#">cell phones & accessories</a>
              </li>
              <li>
                <a href="#">smart tv</a>
              </li>
              <li>
                <a href="#">computer & laptops</a>
              </li>
              <li>
                <a href="#">digital cameras</a>
              </li>
              <li>
                <a href="#">video games & accessories</a>
              </li>
            </ul>
          </div>

          <div className="sub-menu-item">
            <h4>other categories</h4>
            <ul>
              <li>
                <a href="#">iphones</a>
              </li>
              <li>
                <a href="#">speakers</a>
              </li>
              <li>
                <a href="#">samsung devices</a>
              </li>
              <li>
                <a href="#">audio & headphones</a>
              </li>
              <li>
                <a href="#">vehicles electronics & GPS</a>
              </li>
            </ul>
          </div>

          <div className="sub-menu-item">
            <h2>all essential devices and tools for home</h2>
            <button type="button" className="btn">
              shop here
            </button>
          </div>

          <div className="sub-menu-item">
            {/* <img src="images/car.png" alt="product image" /> */}
          </div>
        </div>
      </li>

      <li>
        <a href="#">deals</a>
      </li>
    </ul>
  </div>
</nav>;

///////////////
