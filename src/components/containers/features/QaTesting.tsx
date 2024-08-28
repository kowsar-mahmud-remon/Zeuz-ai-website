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

const QaTesting = () => {
  return (
    <section
      className="feedback__area pb-60"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <div className="row ">
          <div
            className="col-xl-7 col-lg-7 mb-4 allTextSize"
            style={{ marginTop: "50px" }}
          >
            <h2 className="" style={{ color: "#399B8E" }}>
              Customized QA Testing Collaboration Options{" "}
            </h2>
            <p
              className="CustomerTextCss"
              style={{
                fontSize: 16,
                color: "#504F47",
                paddingTop: 40,
                letterSpacing: 1,
                lineHeight: 2,
              }}
            >
              Experience the dynamic offerings of ZeuZ, including the
              revolutionary ZeuZ Test Automation Developer (ZTAD) and a
              comprehensive array of essential resources tailored to your needs.
              Elevate your teams proficiency with our top-notch training
              services, ensuring they harness the full potential of the robust
              Automation Testing platform, ZeuZ. Embrace ZeuZ to unlock
              unparalleled time and cost savings for your organization.
            </p>
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

        <div className="row gx-5" style={{ marginTop: "0px" }}>
          <div className="col-xl-5 col-lg-5 mb-4">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className=" mt-4">
                  <div className="feedback__active">
                    <div className="feedbacK__content mb-4">
                      <Image
                        src={Two}
                        width={500}
                        height={500}
                        alt="image not found"
                        style={{
                          width: "85%",
                          // height: "800px",
                          paddingBottom: "50px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-lg-7" style={{ paddingBottom: 50 }}>
            <Link href="#QaTesting01">
              <div
                className="d-flex QaServiceHover"
                style={{
                  backgroundColor: "#E8F2EF",
                  width: "100%",
                  boxShadow: "0px 4px 6px rgba(0.0, 0, 0, .2)",
                  borderRadius: "10px",
                }}
                // data-aos="fade-up"
                // data-aos-delay="300"
              >
                <div style={{ padding: 20 }}>
                  <Image
                    src={Img01}
                    alt="image not found"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </div>
                <div className="mt-3 homeH3Text" style={{ color: "#399B8E" }}>
                  <h3 style={{ color: "#20695F" }}>Fully Managed QA</h3>
                  <p
                    className="mt-2"
                    style={{ fontSize: 16, color: "#49857D", letterSpacing: 1 }}
                  >
                    Delegate Your QA Process, Focus on Your Core Business.
                  </p>
                </div>
              </div>
            </Link>
            <Link href="#QaTesting02">
              <div
                className="d-flex QaServiceHover"
                style={{
                  marginTop: "40px",
                  backgroundColor: "#E8F2EF",
                  width: "100%",
                  boxShadow: "0px 4px 6px rgba(0.0, 0, 0, .2)",
                  borderRadius: "10px",
                }}
                // data-aos="fade-up"
                // data-aos-delay="300"
              >
                <div style={{ padding: 20 }}>
                  <Image
                    src={Img02}
                    alt="image not found"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </div>
                <div className="mt-3 homeH3Text" style={{ color: "#399B8E" }}>
                  <h3 style={{ color: "#20695F" }}>Team Augmentation</h3>
                  <p
                    className="mt-2"
                    style={{ fontSize: 16, color: "#49857D", letterSpacing: 1 }}
                  >
                    Enhance your existing team with skilled QA professionals.{" "}
                  </p>
                </div>
              </div>
            </Link>
            <Link href="#QaTesting03">
              <div
                className="d-flex QaServiceHover"
                style={{
                  marginTop: "40px",
                  backgroundColor: "#E8F2EF",
                  width: "100%",
                  boxShadow: "0px 4px 6px rgba(0.0, 0, 0, .2)",
                  borderRadius: "10px",
                }}
                // data-aos="fade-up"
                // data-aos-delay="300"
              >
                <div style={{ padding: 20 }}>
                  <Image
                    src={Img03}
                    alt="image not found"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </div>
                <div className="mt-2 homeH3Text" style={{ color: "#399B8E" }}>
                  <h3 style={{ color: "#20695F" }}>QA as a Service</h3>
                  <p
                    className="mt-2"
                    style={{ fontSize: 16, color: "#49857D", letterSpacing: 1 }}
                  >
                    Enjoy on-demand QA services that flex with your project
                    needs.{" "}
                  </p>
                </div>
              </div>
            </Link>

            <Link href="#QaTesting04">
              <div
                className="d-flex QaServiceHover"
                style={{
                  marginTop: "40px",
                  backgroundColor: "#E8F2EF",
                  width: "100%",
                  boxShadow: "0px 4px 6px rgba(0.0, 0, 0, .2)",
                  borderRadius: "10px",
                }}
                // data-aos="fade-up"
                // data-aos-delay="300"
              >
                <div style={{ padding: 20 }}>
                  <Image
                    src={Img04}
                    alt="image not found"
                    style={{
                      width: "35px",
                      height: "50px",
                    }}
                  />
                </div>
                <div className="mt-3 homeH3Text" style={{ color: "#399B8E" }}>
                  <h3 style={{ color: "#20695F" }}>Tap into QA Wisdom</h3>
                  <p
                    className="mt-2"
                    style={{ fontSize: 16, color: "#49857D", letterSpacing: 1 }}
                  >
                    Benefit from Consulting and Audit Services by Our Seasoned
                    Experts.{" "}
                  </p>
                </div>
              </div>
            </Link>

            <Link href="#QaTesting05">
              <div
                className="d-flex QaServiceHover"
                style={{
                  marginTop: "40px",
                  backgroundColor: "#E8F2EF",
                  width: "100%",
                  boxShadow: "0px 4px 6px rgba(0.0, 0, 0, .2)",
                  borderRadius: "10px",
                }}
                // data-aos="fade-up"
                // data-aos-delay="300"
              >
                <div style={{ padding: 20 }}>
                  <Image
                    src={Img05}
                    alt="image not found"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </div>
                <div className="mt-3 homeH3Text">
                  <h3 style={{ color: "#20695F" }}>Project-Based QA</h3>
                  <p
                    className="mt-2"
                    style={{
                      fontSize: 16,
                      color: "#49857D",
                      letterSpacing: 0.7,
                    }}
                  >
                    Opt for project-specific QA testing to meet your immediate
                    requirements.{" "}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QaTesting;
