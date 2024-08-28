import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/img/features/icon-5.png";
import Two from "public/img/features/icon-6.png";
import Three from "public/img/features/icon-7.png";
import Four from "public/img/features/icon-8.png";

const FeaturesOne = () => {
  return (
    <section
      className="feedback__area "
      style={{ backgroundColor: "#FDFDF9", paddingBottom: 50 }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section__title-wrapper text-center mb-70">
              <div className="section__subtitle-3">
                <span style={{ fontSize: "17px" }}>OUR FEATURES</span>
              </div>
              <div className="section__title-3">
                <h2 style={{ fontSize: 36, color: "#399B8E" }}>
                  Key Features of ZeuZ
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
            <div
              className="features__items borderCss"
              style={{
                marginBottom: "20px",
                backgroundColor: "#e5f5ef",
                boxShadow: "0px 4px 10px rgba(0.5, 0.5, 0.5, .2)",
                borderRadius: "10px",
              }}
            >
              <div className="features__items-icon d-flex justify-content-center ">
                <div className="features__items-img">
                  <Image src={One} alt="image not found" />
                </div>
              </div>
              <div className="features__items-content KeyFeaturesCss justify-content-center">
                <h3 className="justify-content-center">
                  <Link href="/service">AI-Powered Automation</Link>
                </h3>
                <p>
                  Leverage the latest in AI technology for intelligent and
                  adaptive testing.
                </p>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ paddingBottom: 10 }}
              >
                <Link className="features__btn pb-0" href="/technology">
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
            <div
              className="features__items borderCss"
              style={{
                marginBottom: "20px",
                backgroundColor: "#e5f5ef",
                boxShadow: "0px 4px 10px rgba(0.5, 0.5, 0.5, .2)",
                borderRadius: "10px",
              }}
            >
              <div className="features__items-icon d-flex justify-content-center">
                <div className="features__items-img">
                  <Image src={Two} alt="image not found" />
                </div>
              </div>
              <div className="features__items-content KeyFeaturesCss">
                <h3>
                  <Link href="/service">No-Code Platform</Link>
                </h3>
                <p>
                  Streamline automation with a user-friendly, no-code interface
                  that is accessible to all skill levels.
                </p>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ paddingBottom: 10 }}
              >
                <Link className="features__btn pb-0" href="/technology">
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
            <div
              className="features__items borderCss"
              style={{
                marginBottom: "20px",
                backgroundColor: "#e5f5ef",
                boxShadow: "0px 4px 10px rgba(0.5, 0.5, 0.5, .2)",
                borderRadius: "10px",
              }}
            >
              <div className="features__items-icon d-flex justify-content-center">
                <div className="features__items-img">
                  <Image src={Three} alt="image not found" />
                </div>
              </div>
              <div className="features__items-content KeyFeaturesCss">
                <h3>
                  <Link href="/service">Cross-Platform Testing</Link>
                </h3>
                <p>
                  Easily automate testing on a wide variety of platforms and
                  gadgets.
                </p>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ paddingBottom: 10 }}
              >
                <Link className="features__btn pb-0" href="/technology">
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4">
            <div
              className="features__items borderCss"
              style={{
                marginBottom: "20px",
                backgroundColor: "#e5f5ef",
                boxShadow: "0px 4px 10px rgba(0.5, 0.5, 0.5, .2)",
                borderRadius: "10px",
              }}
            >
              <div className="features__items-icon d-flex justify-content-center">
                <div className="features__items-img">
                  <Image src={Four} alt="image not found" />
                </div>
              </div>
              <div className="features__items-content KeyFeaturesCss">
                <h3>
                  <Link href="/service">Entire Coverage</Link>
                </h3>
                <p>
                  ZeuZ offers services for Web and API as well as iOS, Android,
                  Desktop, Database, and Performance testing.
                </p>
              </div>
              <div
                className="d-flex justify-content-center"
                style={{ paddingBottom: 10 }}
              >
                <Link className="features__btn pb-0" href="/technology">
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOne;
