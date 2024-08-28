import React from "react";
import Image from "next/image";

import One from "public/img/mockup/hero_section_1-removebg-preview.png";
// import Two from "public/img/home/section 1/s1-2.png";
// import Three from "public/img/home/section 1/s1-1.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const TechnologyPage = () => {
  return (
    <section
      className="feedback__area pt-60 pb-30"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container">
        <div className="row ">
          <div className="col-xl-5 col-lg-5 mb-4">
            {/* <div className="section__subtitle-3">
              <span>Exploratory testing </span>
            </div> */}
            <h2 style={{ fontSize: 26, color: "#16b99b" }}>Why ZeuZ?</h2>
            <p
              className="CustomerTextCss"
              style={{ fontSize: 16, color: "gray", paddingTop: 40 }}
            >
              ZeuZ is an all-in-one automation testing tool that simplifies
              testing for manual and automation testers, developers, and DevOps
              teams. With ZeuZ, there is no need to learn code - it offers a
              user-friendly interface for seamless cross-platform testing. Users
              can easily create and manage complex workflows directly in their
              browser, without worrying about maintenance. ZeuZ provides
              detailed reports, notifications, and debugging tools, and
              seamlessly integrates with CI/CD pipelines for efficient software
              delivery. Choose ZeuZ for streamlined automation testing without
              the complexity of coding.
            </p>
            <Link className="features__btn svgHoverCss" href="/">
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
                    stroke="#399b8e"
                    strokeWidth="1"
                  />
                  <path
                    id="Polygon_2"
                    data-name="Polygon 2"
                    d="M5.5,0,11,9H0Z"
                    transform="translate(1198 1688) rotate(90)"
                    fill="#399b8e"
                  />
                </g>
              </svg>
            </Link>
          </div>

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
                          width: "90%",
                          height: "400px",
                          borderRadius: "10px",
                          backgroundColor: "#b25291",
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
        </div>
      </div>
    </section>
  );
};

export default TechnologyPage;
