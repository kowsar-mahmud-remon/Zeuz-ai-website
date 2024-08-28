import React from "react";
import Image from "next/image";
import Link from "next/link";
// import One from "public/img/home/section 2/123.png";
import One from "public/img/mockup/hero_section_1-removebg-preview.png";
// import Two from "public/img/home/section 2/s2-2.png";
// import Three from "public/img/home/section 2/s2-3.png";
// import Four from "public/img/home/section 2/s2-4.png";
// import Five from "public/img/home/section 2/s2-5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const HomeSectionTwo = () => {
  return (
    <section
      className="feedback__area pt-40 pb-20"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="container">
        <div className="row " data-aos="fade-up">
          <div className="col-xl-7 col-lg-7">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content CenterImg">
                      <Image
                        className="mt-0 ms-0"
                        src={One}
                        alt="image not found"
                        style={{
                          width: "90%",
                          height: "400px",
                          borderRadius: "10px",
                          backgroundColor: "#229f8f",
                          boxShadow: "0px 4px 6px rgba(0.5, 0.5, 0.5, .5)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 mb-4">
            {/* <div className="section__subtitle-3">
              <span>Exploratory testing </span>
            </div> */}
            <h2 style={{ fontSize: 30, color: "#399B8E" }}>
              API & Performance Testing
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
            <Link className="features__btn svgHoverCss" href="/technology">
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
                    stroke="#399B8E"
                    strokeWidth="1"
                  />
                  <path
                    id="Polygon_2"
                    data-name="Polygon 2"
                    d="M5.5,0,11,9H0Z"
                    transform="translate(1198 1688) rotate(90)"
                    fill="#399B8E"
                  />
                </g>
              </svg>
            </Link>

            {/* <h2></h2>
            <ul className="ms-4 mt-4">
              <li>Create API & performance tests without any coding</li>
              <li>Import Postman collections</li>
              <li>
                Load generator written from scratch in Rust with high
                performance
              </li>
              <li>Collect important metrics</li>
              <li>Auto Test Case performance tracking</li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTwo;
