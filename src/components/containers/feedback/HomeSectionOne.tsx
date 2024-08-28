import React from "react";
import Image from "next/image";

import One from "public/img/home/section 1/1234.png";
// import Two from "public/img/home/section 1/s1-2.png";

import Link from "next/link";
// import One from "public/img/testmo/1.png";
// import Two from "public/img/testmo/2.png";
// import Three from "public/img/testmo/3.png";
// import Four from "public/img/testmo/1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const HomeSectionOne = () => {
  return (
    <section className="feedback__area pt-120 pb-60 bg-white">
      <div className="container">
        <div className="row " data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-5 col-lg-5 mb-4"  >
          <div className="section__subtitle-3">
                <span>Exploratory testing </span>
          </div>
            <h2 style={{fontSize:30}}>Create & Deploy thousands of test cases</h2>
            <p style={{fontSize:16,color:'gray',paddingTop:40}}>
            Effortlessly generate API and performance tests without the need for coding. Seamlessly import Postman collections to streamline your testing process. Utilize a custom load generator built from the ground up in Rust, ensuring high performance and reliability. Gather essential metrics to gain insights into your system performance. Automatically track the performance of your test cases to ensure consistent quality and efficiency.
            </p>
            <Link className="features__btn" href="/service">
                Learn More
                <svg 
                style={{paddingLeft:10}}
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
                          stroke="#3249b3"
                          strokeWidth="1"
                        />
                        <path
                          id="Polygon_2"
                          data-name="Polygon 2"
                          d="M5.5,0,11,9H0Z"
                          transform="translate(1198 1688) rotate(90)"
                          fill="#3249b3"
                        />
                      </g>
                    </svg>
            </Link>

            {/* <ul className="ms-4 mt-4">
              <li>Test Sets</li>
              <li>Built-in test Scheduler</li>
              <li>
                Configure and deploy to environments – Staging, QA, Production +
              </li>
              <li>Speed up execution by parallelizing into multiple nodes</li>
            </ul> */}
          </div>
      
          <div className="col-xl-7 col-lg-0">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className=" ">
                <div className="feedback__active" >
                  
                   
                  <div className="feedbacK__content" >
                    <Image
                      src={One}
                      alt="image not found"
                      style={{width: "95%",height: "400px", boxShadow: "0px 4px 6px rgba(0.5, 0.5, 0.5, .5)", borderRadius: "8px" }}
                    />
                  </div>
              
              
              
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

export default HomeSectionOne;
