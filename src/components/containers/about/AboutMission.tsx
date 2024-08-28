import React from "react";
import Image from "next/image";

import One from "public/img/shape/about-shape-1.png";
import Two from "public/img/shape/about-shape-2.png";
import Three from "public/img/shape/rectangle-1.png";
import Four from "public/img/shape/rectangle-2.png";
import Five from "public/img/svg-ai/Group 4.svg";

const AboutMission = () => {
  return (
    <div
      className="about__area  z-index-11 p-relative pt-40 pb-20"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      {/* <div className="about__shape-1">
        <Image src={One} alt="image not found" />
      </div> */}
      {/* <div className="about__shape-2">
        <Image src={Two} alt="image not found" />
      </div>
      <div className="about__shape-3">
        <Image src={Three} alt="image not found" />
      </div>
      <div className="about__shape-4">
        <Image src={Four} alt="image not found" />
      </div> */}
      <div className="container">
        <div
          className="row align-items-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-xl-6 col-lg-6">
            <div className="about__thumb-wrapper mb-60">
              <div className="about__thumb">
                <Image className="aboutImg" src={Five} alt="image not found" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about__content-wapper mb-60">
              <div className="section__title-wrapper mb-40">
                <span className="section__subtitle-2"></span>
                <h2 className="section__title-2" style={{ color: "#239B7E" }}>
                  We Are Passionate About Testing!
                </h2>
              </div>
              <p className="CustomerTextCss">
                ZeuZ is a quality assurance centric software and services firm.
              </p>
              <p className="CustomerTextCss">
                We developed an innovative and easy to use platform to test
                cross-platform applications, including mobile, web, desktop,
                APIs, and cloud apps. We believe in transformative power of
                automation to eliminate defects and improve user experience.{" "}
              </p>
              <p className="CustomerTextCss">
                If you are looking for experienced manual testers or experts in
                test automation, we’ve got you covered!{" "}
              </p>

              <p className="CustomerTextCss">
                Due to our extensive experience in quality control, we have
                cost-effective resources to help with:
              </p>

              <ul className="ms-4 text-secondary mb-4">
                <li>Setting up manual and automated testing best practices</li>
                <li>Test, test, and test some more</li>
                <li>Provide training</li>
                <li>Designing test workflows and framework</li>
                <li>Maintain, report, and debug issues</li>
                <li>Provide expertise in robotics and hardware testing</li>
              </ul>
              <p className="CustomerTextCss">
                ZeuZ is a trusted partner for many small and large enterprises,
                including Blackberry, Honda, KeyFree, Bunz.com, and many others.
              </p>
              <p className="CustomerTextCss">
                Contact us today and let us know how we can help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
