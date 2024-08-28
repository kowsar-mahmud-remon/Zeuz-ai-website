import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "public/img/illo-overflowai.svg";
import Logo from "public/img/banner/logo2.png";

// import Video1 from "./video.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const IntroducingZeuZVideoPage = () => {
  const videoSource = "https://www.youtube.com/embed/6PJ-vveaT4k";
  // const videoSource = "./video1.mp4";

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
                      <div style={{ marginTop: "5px" }}>
                        
                        <iframe
                          width="100%"
                          height="360px"
                          src={videoSource + "?autoplay=1"}
                          title="YouTube Video"
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>

                        {/* <video autoPlay muted controls width="100%">
                          <source src={videoSource}  />
                          Your browser does not support the video tag.
                        </video> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 mb-4" style={{ paddingLeft: 30 }}>
            <h2 style={{ fontSize: 30, marginTop: 0, color: "#b25291" }}>
              Introducing ZeuZ
            </h2>
            <p
              className="CustomerTextCss"
              style={{ fontSize: 16, color: "gray", paddingTop: 40 }}
            >
              Revolutionize Your Testing with ZeuZ: AI-Powered, No-Code
              Automation Platform Our automation framework, ZeuZ, is not just a
              tool—it is a game-changer. Harness the power of Artificial
              Intelligence and experience a seamless, no-code automation
              platform for everyone. ZeuZ empowers you to automate complex
              workflows across various platforms, including Web, API, iOS,
              Android, Desktop, Database, and Performance testing.
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
                    stroke="#b25291"
                    strokeWidth="1"
                  />
                  <path
                    id="Polygon_2"
                    data-name="Polygon 2"
                    d="M5.5,0,11,9H0Z"
                    transform="translate(1198 1688) rotate(90)"
                    fill="#b25291"
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

export default IntroducingZeuZVideoPage;
