import React from "react";
import Image from "next/image";
import One from "public/img/brand/1.png";
import Two from "public/img/brand/2.png";
import Three from "public/img/brand/3.png";
import Four from "public/img/brand/4.png";
import Five from "public/img/brand/5.png";

import Partner1 from "public/img/tech/partner-1.png";
import Partner2 from "public/img/tech/partner-2.png";
import Partner3 from "public/img/tech/partner-3.png";
import Partner4 from "public/img/tech/partner-4.png";
import Partner5 from "public/img/tech/partner-5.png";
import Partner6 from "public/img/tech/partner-6.png";
import Partner7 from "public/img/tech/partner-7.png";
// import Partner8 from "public/img/tech/partner-1.png";
import Partner9 from "public/img/tech/partner-9.png";
import Partner10 from "public/img/tech/partner-10.png";
import Partner11 from "public/img/tech/partner-11.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import Marquee from "react-fast-marquee";

const SponsorOne = () => {
  return (
    <div className="brand__area grey-bg-2 pt-60 pb-60">
      <div className="container">
        <div className="brand__title">
          <span style={{ color: "#297C91" }}>
            Integrates with Almost Everything
          </span>
        </div>
        <div
          className="row justify-content-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Marquee pauseOnClick={true}>
            <div className="col-12 d-flex gap-4">
              <div className="singel__brand">
                <Image
                  style={{ height: "170px" }}
                  width={200}
                  height={150}
                  src={Partner1}
                  alt="image not found"
                />
              </div>
              <div className="singel__brand">
                <Image
                  style={{ height: "170px" }}
                  width={200}
                  height={150}
                  src={Partner2}
                  alt="image not found"
                />
              </div>
              <div className="singel__brand">
                <Image
                  style={{ height: "170px" }}
                  width={200}
                  height={150}
                  src={Partner3}
                  alt="image not found"
                />
              </div>
              <div className="singel__brand">
                <Image
                  style={{ height: "170px" }}
                  width={200}
                  height={150}
                  src={Partner4}
                  alt="image not found"
                />
              </div>
              <div className="singel__brand">
                <Image
                  style={{ height: "170px" }}
                  width={200}
                  height={150}
                  src={Partner5}
                  alt="image not found"
                />
              </div>
              <div className="singel__brand">
                <Image
                  style={{ height: "170px" }}
                  width={200}
                  height={150}
                  src={Partner6}
                  alt="image not found"
                />
              </div>
              <div className="singel__brand">
                <Image
                  style={{ height: "170px" }}
                  width={200}
                  height={150}
                  src={Partner7}
                  alt="image not found"
                />
              </div>
              <div className="singel__brand">
                <Image
                  style={{ height: "170px" }}
                  width={200}
                  height={150}
                  src={Partner9}
                  alt="image not found"
                />
              </div>
              <div className="singel__brand">
                <Image
                  style={{ height: "170px" }}
                  width={200}
                  height={150}
                  src={Partner10}
                  alt="image not found"
                />
              </div>
              <div className="singel__brand">
                <Image
                  style={{ height: "170px" }}
                  width={200}
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
