import React from "react";
import Image from "next/image";

import One from "public/img/mockup/hero_section_1-removebg-preview.png";
import Link from "next/link";
// import One from "public/img/home/section 4/s4-1.png";
// import Two from "public/img/home/section 4/s4-2.png";
// import Three from "public/img/home/section 4/s4-3.png";
// import Four from "public/img/home/section 4/s4-4.png";
// import Five from "public/img/home/section 4/s4-5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const HomeSectionFour = () => {
  return (
    <section
      className="feedback__area pt-120 pb-60"
      style={{ backgroundColor: "#FDFDF9" }}
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
                        className="mt-0 ms-0"
                        src={One}
                        alt="image not found"
                        style={{
                          width: "90%",
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
            {/* <div className="section__subtitle-new">
              <span>Exploratory testing </span>
            </div> */}
            <h2 style={{ fontSize: 30, color: "#2aa7c7" }}>
              Insightful Reporting
            </h2>
            <p
              className="CustomerTextCss"
              style={{ fontSize: 16, color: "gray", paddingTop: 40 }}
            >
              Effortlessly generate API and performance tests without the need
              for coding. Seamlessly import Postman collections to streamline
              your testing process. Utilize a custom load generator built from
              the ground up in Rust, ensuring high performance and reliability.
              Gather essential metrics to gain insights into your system
              performance. Automatically track the performance of your test
              cases to ensure consistent quality and efficiency.
            </p>

            <Link
              className="Insightful-Reporting-btn svgHoverCss"
              href="/technology"
            >
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
                    stroke="#2aa7c7"
                    strokeWidth="1"
                  />
                  <path
                    id="Polygon_2"
                    data-name="Polygon 2"
                    d="M5.5,0,11,9H0Z"
                    transform="translate(1198 1688) rotate(90)"
                    fill="#2aa7c7"
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

export default HomeSectionFour;
