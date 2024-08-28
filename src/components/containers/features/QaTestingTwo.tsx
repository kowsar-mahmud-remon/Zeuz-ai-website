import React from "react";
import Image from "next/image";

import One from "public/img/QaTesting/QaTestingImg7.svg";
import Two from "public/img/QaTesting/QaTestingImg6.svg";
import Tree from "public/img/QaTesting/QaTestingImg3.svg";
import Img01 from "public/img/QaTesting/Img01.png";
import Img02 from "public/img/QaTesting/Img02.png";
import Img03 from "public/img/QaTesting/Img03.png";
import Img04 from "public/img/QaTesting/Img04.png";
import Img05 from "public/img/QaTesting/Img05.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import Link from "next/link";

const QaTestingTwo = () => {
  return (
    <section
      className="feedback__area pt-60 pb-60"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container">
        <div className="row ">
          <div
            className="col-xl-7 col-lg-7 mb-4 allTextSize"
            style={{ marginTop: "50px" }}
          >
            <div className="section__subtitle-3">
              <span className="QaSpanText">Professional Services</span>
            </div>
            <h2 className="" style={{ color: "#399B8E" }}>
              Customized QA Testing Collaboration Options{" "}
            </h2>
            <p className="CustomerTextCssTwo">
              Experience the dynamic offerings of ZeuZ, including the
              revolutionary <b>ZeuZ Test Automation Developer (ZTAD) </b> and a
              comprehensive array of essential resources tailored to your needs.
              Elevate your teams proficiency with our top-notch training
              services, ensuring they harness the full potential of the robust
              Automation Testing platform, ZeuZ. Embrace ZeuZ to unlock
              unparalleled time and cost savings for your organization.
            </p>

            <Link className="features__btn svgHoverCss" href="/service">
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
          </div>

          <div className="col-xl-5 col-lg-5">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content d-flex justify-content-center">
                      <Image
                        src={One}
                        width={500}
                        height={400}
                        alt="image not found"
                        style={{
                          width: "70%",
                          height: "450px",
                        }}
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

export default QaTestingTwo;
