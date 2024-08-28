import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BannerGroupImg from "public/img/banner/Testimonials.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const TestimonialsBanner = () => {
  return (
    <section
      className="hero__area-3 pt-60 pb-20"
      style={{ backgroundColor: "#FAF8F2" }}
    >
      <div className="hero__wrapper mt-0 m-auto">
        <div className="newBannerContainer bannerPadding">
          <div className="row align-items-center banner-lg-padding">
            <div
              className="col-xl-7 col-lg-7 mb-lg-0"
              style={{ marginBottom: "40px" }}
            >
              <div className="">
                <div className="bannerTextSide">
                  <h2
                    className=""
                    data-aos="fade-up"
                    data-aos-delay="500"
                    style={{ color: "#353935" }}
                  >
                    <span style={{ color: "#16B99B" }}>
                      ZeuZ Testimonials:{" "}
                    </span>
                    Hear from Our Satisfied Clients{" "}
                  </h2>

                  <p
                    className="mt-4"
                    data-aos="fade-up"
                    data-aos-delay="700"
                    style={{
                      color: "gray",
                      letterSpacing: 1,
                      lineHeight: 2,
                    }}
                  >
                    Real Experiences, Real Results in Connectivity and
                    Integration
                  </p>

                  {/* <div className="d-flex gap-3" style={{ marginTop: "50px" }}>
                    <Link
                      className="bannerButtonOne"
                      style={{
                        color: "white",
                        borderRadius: "5px",
                        boxShadow: "0px 4px 6px rgba(0.5, 0.5, 0.5, .5)",
                      }}
                      href="/service"
                    >
                      Explore Now <FaArrowRightLong />
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-xl-5 col-lg-5 d-flex justify-content-center">
              <Image
                width={700}
                height={700}
                style={{
                  width: "60%",
                }}
                src={BannerGroupImg}
                alt="image not found"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBanner;
