import React from "react";
import Image from "next/image";
import One from "public/img/brand/1.png";
import Two from "public/img/brand/2.png";
import Three from "public/img/brand/3.png";
import Four from "public/img/brand/4.png";
import Five from "public/img/brand/5.png";

import Partner1 from "public/img/partner/partner-1.png";
import Partner2 from "public/img/partner/partner22.png";
import Partner3 from "public/img/partner/partner-3.png";
import Partner4 from "public/img/partner/partner-4.png";
import Partner5 from "public/img/partner/partner-5.png";
import Partner6 from "public/img/partner/partner-6.png";
import Partner7 from "public/img/partner/partner-7.png";
import Partner8 from "public/img/partner/partner-8.png";
import Partner9 from "public/img/partner/partner-9.png";
import Partner10 from "public/img/partner/partner-10.png";
import Partner11 from "public/img/partner/partner-11.png";
import Marquee from "react-fast-marquee";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// import "swiper/css";

const SponsorOne = () => {
  return (
    <div
      className="brand__area grey-bg-0 pt-3 pb-0 zIndex100"
      style={{
        backgroundColor: "#FAF8F2",
        marginTop: -20,
        boxShadow: "0px 104px 80px rgba(1.5, 1.5, 1.5, .1)",
      }}
    >
      <div
        className="brand__title2 d-flex justify-content-center"
        style={{ marginBottom: "-60px", marginTop: 15 }}
      >
        <span style={{ fontSize: "16px", color: "#4A4844" }}>
          Clients Who Trust Us
        </span>
      </div>

      <div
        className="container"
        // style={{
        //   minWidth: "2080px",
        // }}
      >
        <div
          className="row justify-content-center "
          // style={{ minWidth: "2080px" }}
        >
          <Marquee pauseOnClick={true}>
            <div className="d-flex  gap-5">
              <div className="">
                <Image
                  style={{ height: "170px" }}
                  width={170}
                  height={150}
                  src={Partner1}
                  alt="image not found"
                />
              </div>

              <div className="">
                <Image
                  style={{ height: "170px" }}
                  width={170}
                  height={150}
                  src={Partner3}
                  alt="image not found"
                />
              </div>
              <div className="">
                <Image
                  style={{ height: "170px" }}
                  width={170}
                  height={150}
                  src={Partner4}
                  alt="image not found"
                />
              </div>
              <div className="">
                <Image
                  style={{ height: "170px" }}
                  width={170}
                  height={150}
                  src={Partner5}
                  alt="image not found"
                />
              </div>
              <div className="">
                <Image
                  style={{ height: "170px" }}
                  width={170}
                  height={150}
                  src={Partner6}
                  alt="image not found"
                />
              </div>
              <div className="">
                <Image
                  style={{ height: "170px" }}
                  width={170}
                  height={150}
                  src={Partner7}
                  alt="image not found"
                />
              </div>
              <div className="">
                <Image
                  style={{ height: "170px" }}
                  width={170}
                  height={150}
                  src={Partner8}
                  alt="image not found"
                />
              </div>

              <div className="" style={{ paddingTop: 50 }}>
                <Image
                  style={{ height: "80px" }}
                  width={110}
                  height={120}
                  src={Partner2}
                  alt="image not found"
                />
              </div>
              <div className="">
                <Image
                  style={{ height: "170px" }}
                  width={170}
                  height={150}
                  src={Partner9}
                  alt="image not found"
                />
              </div>
              <div className="">
                <Image
                  style={{ height: "170px" }}
                  width={170}
                  height={150}
                  src={Partner10}
                  alt="image not found"
                />
              </div>
              <div className="">
                <Image
                  style={{ height: "170px" }}
                  width={170}
                  height={150}
                  src={Partner11}
                  alt="image not found"
                />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SponsorOne;
