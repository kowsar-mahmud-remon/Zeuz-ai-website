import React from "react";
import Image from "next/image";
import Link from "next/link";
import Img01 from "public/img/support/Live-Interactive-testing.png";
import Img02 from "public/img/support/Automation.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const ManualTest = () => {
  return (
    <section
      className="feedback__area pt-80 "
      style={{ backgroundColor: "#FDFDF5" }}
    >
      <div
        className="container custom-border   d-flex justify-content-center align-items-center rounded "
        style={{ backgroundColor: "#FAF8F2" }}
      >
        <div className="manualTestMargin  d-flex justify-content-center align-items-center rounded">
          <div className="col-xl-14 col-lg-12 mr-5">
            {/* <div className="" style={{ padding: "40px 0",paddingRight:40 }}> */}
            <h2 className="manualTestText">
              Manual Test Case Management for{" "}
              <span className="manualTestTextTwo">$1</span>
              /month
            </h2>
          </div>

          <div className="col-xl-4 col-lg-4 d-lg-flex justify-content-end">
            {/* <div className=" d-lg-flex justify-content-end"> */}
            <Link href="/contact">
              <button className="manualTestButton">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualTest;
