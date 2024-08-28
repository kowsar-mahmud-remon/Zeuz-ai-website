import React from "react";
import Image from "next/image";
import One from "public/img/brand/1.png";
import Two from "public/img/brand/2.png";
import Three from "public/img/brand/3.png";
import Four from "public/img/brand/4.png";
import Five from "public/img/brand/5.png";

import Partner1 from "public/img/platform/1.svg";
import Partner2 from "public/img/platform/2.svg";
import Partner3 from "public/img/platform/3.svg";
import Partner4 from "public/img/platform/4.svg";
import Partner5 from "public/img/platform/5.svg";
import Partner6 from "public/img/platform/6.svg";
import Partner7 from "public/img/platform/7.svg";
// import Partner8 from "public/img/platform/8.svg";
import Partner9 from "public/img/platform/8.svg";
import Partner10 from "public/img/platform/9.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Marquee from "react-fast-marquee";

const SponsorOne = () => {
  return (
    <div
      className="brand__area grey-bg-4 pt-50 pb-30"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container">
        <div className="brand__title2 d-flex justify-content-center">
          <span className="expertisePlatformText">
            Expertise in Diverse Platforms
          </span>
        </div>
        <div
          className=" DiversePlatforms"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {/* <Marquee pauseOnClick={true}> */}
          {/* <div className="col-12 d-flex gap-4"> */}
          <div className="DiversePlatformsCss">
            <Image
              style={{
                // height: "120px",
                width: "85%",
                // boxShadow: "0px 0px 6px rgba(0, 0, 0, .1)",
                borderRadius: "2px",
              }}
              // width={120}
              // height={120}
              src={Partner1}
              alt="image not found"
            />
          </div>
          <div className="DiversePlatformsCss">
            <Image
              style={{
                // height: "120px",
                width: "85%",
                // boxShadow: "0px 0px 6px rgba(0, 0, 0, .1)",
                borderRadius: "2px",
              }}
              // width={120}
              // height={120}
              src={Partner2}
              alt="image not found"
            />
          </div>
          <div className="DiversePlatformsCss">
            <Image
              style={{
                // height: "120px",
                width: "85%",
                // boxShadow: "0px 0px 6px rgba(0, 0, 0, .1)",
                borderRadius: "2px",
              }}
              // width={120}
              // height={120}
              src={Partner3}
              alt="image not found"
            />
          </div>
          <div className="DiversePlatformsCss">
            <Image
              style={{
                // height: "120px",
                width: "85%",
                // boxShadow: "0px 0px 6px rgba(0, 0, 0, .1)",
                borderRadius: "2px",
              }}
              // width={120}
              // height={120}
              src={Partner4}
              alt="image not found"
            />
          </div>
          <div className="DiversePlatformsCss">
            <Image
              style={{
                // height: "120px",
                width: "85%",
                // boxShadow: "0px 0px 6px rgba(0, 0, 0, .1)",
                borderRadius: "2px",
              }}
              // width={120}
              // height={120}
              src={Partner5}
              alt="image not found"
            />
          </div>
          <div className="DiversePlatformsCss">
            <Image
              style={{
                // height: "120px",
                width: "85%",
                // boxShadow: "0px 0px 6px rgba(0, 0, 0, .1)",
                borderRadius: "2px",
              }}
              // width={120}
              // height={120}
              src={Partner6}
              alt="image not found"
            />
          </div>
          <div className="DiversePlatformsCss">
            <Image
              style={{
                // height: "120px",
                // boxShadow: "0px 0px 6px rgba(0, 0, 0, .1)",
                borderRadius: "2px",
                width: "87%",
              }}
              // width={"90%"}
              // height={120}
              src={Partner7}
              alt="image not found"
            />
          </div>
          <div className="DiversePlatformsCss">
            <Image
              style={{
                // height: "120px",
                width: "85%",
                // boxShadow: "0px 0px 6px rgba(0, 0, 0, .1)",
                borderRadius: "2px",
              }}
              // width={120}
              // height={120}
              src={Partner9}
              alt="image not found"
            />
          </div>
          <div className="DiversePlatformsCss">
            <Image
              style={{
                // height: "120px",
                width: "83%",
                // boxShadow: "0px 0px 6px rgba(0, 0, 0, .1)",
                borderRadius: "2px",
              }}
              // width={120}
              // height={120}
              src={Partner10}
              alt="image not found"
            />
          </div>
          {/* </div> */}
          {/* </Marquee> */}
        </div>
      </div>
    </div>
  );
};

export default SponsorOne;
