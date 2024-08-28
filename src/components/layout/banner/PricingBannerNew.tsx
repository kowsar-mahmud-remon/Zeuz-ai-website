import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import BannerGroupImg from "public/img/banner/Pricing.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const PricingBannerNew = () => {
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
                    <span style={{ color: "#16B99B" }}>ZeuZ Pricing: </span>
                    Tailored Solutions for Every Budget{" "}
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
                    Unlock the Power of Seamless Integration at Affordable Rates
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

            <div
              className="col-xl-5 col-lg-5 d-flex justify-content-center"
              style={{ marginTop: 0 }}
            >
              <Image
                width={700}
                height={700}
                style={{
                  width: "80%",
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

export default PricingBannerNew;
