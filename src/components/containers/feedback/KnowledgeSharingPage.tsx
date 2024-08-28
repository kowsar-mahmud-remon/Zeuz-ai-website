import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "public/img/illo-overflowai.svg";
import Logo from "public/img/banner/logo2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const KnowledgeSharingPage = () => {
  return (
    <section
      className="feedback__area pb-60"
      style={{ backgroundColor: "#FDFDF9", paddingTop: "50px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content">
                      <Image
                        className="w-full"
                        src={One}
                        width={700}
                        height={400}
                        alt="image not found"
                        style={{
                          width: "85%",
                          height: "400px",
                          boxShadow: "0px 4px 6px rgba(0.5, 0.5, 0.5, .5)",
                          borderRadius: "8px",
                          backgroundColor: "#b25291",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 mb-4">
            {/* <Image
              className="d-none d-lg-block"
              src={Logo}
              width={280}
              // height={400}
              alt="image not found"
              style={{
                // width: "85%",

                height: "100px",
                // boxShadow: "0px 4px 6px rgba(0.5, 0.5, 0.5, .5)",
                // borderRadius: "8px",
              }}
            /> */}
            <h2 style={{ fontSize: 30, marginTop: 20, color: "#b25291" }}>
              Introducing ZeuZ
            </h2>
            <p style={{ fontSize: 16, color: "gray", paddingTop: 40 }}>
              Revolutionize Your Testing with ZeuZ: AI-Powered, No-Code
              Automation Platform Our automation framework, ZeuZ, is not just a
              tool—it is a game-changer. Harness the power of Artificial
              Intelligence and experience a seamless, no-code automation
              platform for everyone. ZeuZ empowers you to automate complex
              workflows across various platforms, including Web, API, iOS,
              Android, Desktop, Database, and Performance testing. With ZeuZ,
              efficiency and precision are no longer goals but guarantees.
            </p>
            <Link className="features__btn__new svgHoverCss" href="/technology">
              Learn More
              <svg
                style={{ paddingLeft: 10 }}
                xmlns="http://www.w3.org/2000/svg"
                width="30.5"
                height="11"
                viewBox="0 0 30.5 11"
              >
                <g
                  id="Group_14479"
                  data-name="Group 14479"
                  transform="translate(-1167.5 -1688)"
                >
                  <line
                    id="Line_48"
                    data-name="Line 48"
                    x2="23"
                    transform="translate(1167.5 1693.5)"
                    fill="none"
                    stroke="#ff01a6"
                    strokeWidth="1"
                  />
                  <path
                    id="Polygon_2"
                    data-name="Polygon 2"
                    d="M5.5,0,11,9H0Z"
                    transform="translate(1198 1688) rotate(90)"
                    fill="#ff01a6"
                  />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSharingPage;
