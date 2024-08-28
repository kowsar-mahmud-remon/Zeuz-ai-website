import React from "react";
import Image from "next/image";
import One from "public/img/svg-ai/Group 2.svg";
import Two from "public/img/shape/about-thumb-shape.png";

import YoutubeEmbed from "../youtube/YoutubeEmbed";

const AboutOne = () => {
  return (
    <div
      className="about__area p-relative pt-120 pb-60"
      style={{ backgroundColor: "#FFFFFC" }}
    >
      <div className="container">
        <div
          className="row align-items-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-xl-6 col-lg-6">
            <div className="about__thumb-wrapper-3 mb-60">
              <div className="about__thumb-3">
                <Image src={One} alt="image not found" />
              </div>
              <div className="about__thumb-shape">
                <Image src={Two} alt="image not found" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="about__content-wapper mb-60">
              <div className="section__title-wrapper mb-40">
                {/* <div className="section__subtitle-3">
                  <span>ABOUT ZeuZ</span>
                </div> */}
                <div className="section__title-3">
                  <h2 style={{ fontSize: 30, color: "#16b99b" }}>
                    {" "}
                    Introducing ZeuZ
                  </h2>
                </div>
              </div>
              {/* <p>
                End-to-End Software Testing
              </p> */}
              <div
                className="col-xl-12 col-lg-6"
                style={{
                  width: "95%",
                  height: "400px",
                  boxShadow: "0px 4px 6px rgba(0.5, 0.5, 0.5, .5)",
                  borderRadius: "8px",
                }}
              >
                <YoutubeEmbed embedId="6PJ-vveaT4k" />
              </div>

              {/* <div className="about__progress">
                <div className="about__progress-item">
                  <div className="about__progress-content">
                    <span>75.25%</span>
                    <p>
                      Increased in organic traffic <br /> in first year!
                    </p>
                  </div>
                </div>
                <div className="about__progress-item">
                  <div className="about__progress-content">
                    <span className="s-2">72%</span>
                    <p>
                      Increased in organic traffic <br /> in first year!
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
