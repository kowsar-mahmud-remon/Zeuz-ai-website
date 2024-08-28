import React from "react";
import Image from "next/image";

// import One from "public/img/Technology page/section 2/ts2-1.png";
// import Two from "public/img/Technology page/section 2/ts2-2.png";
import One from "public/img/mockup/hero_section_1-removebg-preview.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import Link from "next/link";
const TechnologyPageTwo = () => {
  return (
    <section
      className="feedback__area pt-120 pb-60"
      style={{ backgroundColor: "#FFFFFC" }}
    >
      <div className="container">
        <div className="row " data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-7 col-lg-7">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content">
                      <Image
                        className="mt-4 ms-3"
                        src={One}
                        width={500}
                        height={400}
                        alt="image not found"
                        style={{
                          width: "85%",
                          height: "400px",
                          borderRadius: "10px",
                          backgroundColor: "#2aa7c7",
                          boxShadow: "0px 4px 6px rgba(0.5, 0.5, 0.5, .5)",
                        }}
                      />
                    </div>

                    {/* <SwiperSlide>
                  <div className="feedbacK__content">
                    <Image
                      src={Two}
                      style={{ width: "100%", height: "400px" }}
                      width={500}
                      height={400}
                      alt="image not found"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedbacK__content">
                    <Image
                      src={Three}
                      style={{ width: "100%", height: "400px" }}
                      width={500}
                      height={400}
                      alt="image not found"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedbacK__content">
                    <Image
                      src={Four}
                      style={{ width: "100%", height: "400px" }}
                      width={500}
                      height={400}
                      alt="image not found"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedbacK__content">
                    <Image
                      src={Five}
                      style={{ width: "100%", height: "400px" }}
                      width={500}
                      height={400}
                      alt="image not found"
                    />
                  </div>
                </SwiperSlide> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-5 mb-4">
            {/* <div className="section__subtitle-3">
              <span>Exploratory testing </span>
            </div> */}
            <h2 style={{ fontSize: 26, color: "#16b99b" }}>
              ZeuZ: Seamless Cross-Platform Testing
            </h2>
            <p
              className="CustomerTextCss"
              style={{ fontSize: 16, color: "gray", paddingTop: 40 }}
            >
              ZeuZ is a standout automation testing solution known for its
              user-friendly interface and AI-driven features, simplifying the
              testing process. It offers comprehensive testing across web
              browsers, mobile apps (iOS and Android), desktop environments
              (Windows, Mac, Linux), APIs, and cloud-based applications. Its
              scalability to hundreds of nodes makes it perfect for stress and
              performance testing, making ZeuZ the top choice for teams
              requiring efficient testing across diverse technologies.
            </p>
            <Link className="features__btn svgHoverCss" href="/technology">
              Start Now
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
                    stroke="#16b99b"
                    strokeWidth="1"
                  />
                  <path
                    id="Polygon_2"
                    data-name="Polygon 2"
                    d="M5.5,0,11,9H0Z"
                    transform="translate(1198 1688) rotate(90)"
                    fill="#16b99b"
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

export default TechnologyPageTwo;
