import React from "react";
import Image from "next/image";

import One from "public/img/illo-overflowai.svg";
import Two from "public/img/stack.png";
import { IoMdCheckmarkCircle } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import Link from "next/link";

const OktaPage = () => {
  return (
    <section
      className="feedback__area pt-120 pb-60"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-6 col-lg-6 mb-4" style={{ paddingTop: 30 }}>
            <div className="d-flex">
              {/* <div className="">
                <Image
                  className="me-2"
                  src={Two}
                  width={500}
                  height={400}
                  alt="image not found"
                  style={{
                    width: "95px",
                    height: "100px",
                    borderRadius: "10px",
                  }}
                />
              </div> */}
              <div className="mt-2">
                <h2 style={{ fontSize: 30 }}>Okta</h2>
                <p style={{ fontSize: 16, paddingTop: 10 }}>
                  Create an easy and secure login experience, every time.
                </p>
                <div className="d-flex">
                  <IoMdCheckmarkCircle
                    style={{
                      fontSize: "24px",
                      marginRight: "10px",
                      marginTop: "3px",
                    }}
                  />
                  <p>Streamlined User Onboarding</p>
                </div>
                <div className="d-flex">
                  <IoMdCheckmarkCircle
                    style={{
                      fontSize: "24px",
                      marginRight: "10px",
                      marginTop: "3px",
                    }}
                  />
                  <p>Seamless Integration with SAML SSO</p>
                </div>
                <div className="d-flex">
                  <IoMdCheckmarkCircle
                    style={{
                      fontSize: "24px",
                      marginRight: "10px",
                      marginTop: "3px",
                    }}
                  />
                  <p>Enhanced Security with Okta Verify OTP</p>
                </div>

                <div className="d-flex gap-3" style={{ marginTop: "40px" }}>
                  <Link className="features__btn" href="/service">
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
          </div>

          <div className="col-xl-6 col-lg-6 pb-4">
            <Image
              className="mt-4 ms-3"
              src={One}
              width={500}
              height={400}
              alt="image not found"
              style={{
                width: "90%",
                // height: "100%",
                borderRadius: "10px",
                backgroundColor: "#b25291",
                boxShadow: "0px 4px 6px rgba(0.5, 0.5, 0.5, .5)",
              }}
            />
            {/* <Image
                        className="w-full"
                        src={One}
                        width={700}
                        height={400}
                        alt="image not found"
                        style={{
                          width: "85%",
                          height: "400px",
                          boxShadow: "0px 4px 6px rgba(0.5, 0.5, 0.5, .5)",
                          borderRadius: "8px",
                          backgroundColor:"#b25291"
                        }}
                      /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OktaPage;
