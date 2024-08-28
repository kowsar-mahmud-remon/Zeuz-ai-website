import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/imaiiiiges-removebg-preview.png";

const Footer = () => {
  return (
    <footer>
      <section
        className="footer__border p-relative z-index-11 pt-30 pb-30 foot-one-bg"
        style={{
          boxShadow: "0px 4px 6px rgba(0.5, 0.5, 0.5, .5)",
          backgroundColor: "#F3F3EE",
        }}
      >
        <div className="footer__style-3">
          <span className="footer__cercle"></span>
          <div className="container pt-2">
            <div className="footer__inner mb-0">
              <div className="row" style={{ paddingTop: 40 }}>
                <div className="col-xl-5 col-lg-4 col-md-5 col-sm-6">
                  <div className="footer__widget mb-55">
                    <div className="footer__logo mb-20">
                      <Link href="/">
                        <Image src={Logo} alt="logo not found" />
                      </Link>
                    </div>
                    <div className="footer__contact mb-30">
                      <p className="mb-0">Canada Head Quarter:</p>
                      <p style={{ fontSize: "14px" }}>
                        151 Charles Street W #100, Kitchener, ON N2G 1H6
                      </p>
                      <p className="mb-0">Bangladesh R&D Center:</p>
                      <p style={{ fontSize: "14px" }}>
                        House 04, Road 27, Sector 07,
                        Uttara, Dhaka -1230, Bangladesh
                      </p>
                    </div>
                    <div className="touch__social">
                      <Link
                        href="https://www.facebook.com/automationsolutionz/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        href="https://twitter.com/zeuz_io?lang=en"
                        target="_blank"
                      >
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link
                        href="https://www.youtube.com/channel/UCmuvyGik12kr739Nz2qeY8g"
                        target="_blank"
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </Link>
                      <Link
                        href="https://ca.linkedin.com/company/automation-solutionz"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                  <div className="footer__widget footer__col-1 mb-55">
                    <div className="footer__title">
                      <h3>Our Story</h3>
                    </div>
                    <div className="footer__link">
                      <ul>
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        {/* <li>
                          <Link href="/blog">Community Blog</Link>
                        </li> */}
                        {/* <li>
                          <Link href="/">Portfolio</Link>
                        </li> */}
                        <li>
                          <Link href="/service">Work with Us</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact Us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="footer__widget footer__col-5 mb-55">
                    <div className="footer__title">
                      <h3>Explore Softim</h3>
                    </div>
                    <div className="footer__link">
                      <ul>
                        <li>
                          <Link href="/technology">Features</Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/terms-of-service">
                            Terms Of Service{" "}
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/">Program</Link>
                        </li> */}
                        {/* <li>
                          <Link href="/">Our Partner</Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__widget footer__col-6 mb-55">
                    <div className="footer__title">
                      <h3>Quick Inks</h3>
                    </div>
                    <div className="footer__link">
                      <ul>
                        <li>
                          <Link href="/about">About us</Link>
                        </li>
                        {/* <li>
                          <Link href="/">News & press</Link>
                        </li> */}
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                        {/* <li>
                          <Link href="/">FAQs</Link>
                        </li> */}
                        <li>
                          <Link href="/">Careers</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="footer__copyright">
                  <div className="copyright__text text-center">
                    <p>Copyright © 2024 ZeuZ | Automation Solutionz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
