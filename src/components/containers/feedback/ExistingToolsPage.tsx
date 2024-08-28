import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "public/img/illo-overflowai.svg";
import Partner2 from "public/img/tech/partner-10.png";
import Partner5 from "public/img/tech/partner-5.png";
import Partner9 from "public/img/tech/partner-9.png";
import Partner81 from "public/img/tech/partner-81.png";
import Partner3 from "public/img/tech/partner-4.png";
import techGroupImg from "public/img/tech/techGroupImg.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const ExistingToolsPage = () => {
  return (
    <section
      className="feedback__area pt-40 pb-20"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container">
        <div className="row " data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-7 col-lg-7 mb-4">
            <Image
              src={techGroupImg}
              width={500}
              height={400}
              alt="image not found"
              style={{
                width: "100%",
                // height: "140px",
                // boxShadow: "0px 4px 6px rgba(0.63, 0.00, 0.08, 0.39)",
                borderColor: "#399B8E",
                borderRadius: "30px",
              }}
            />

            {/* <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className="">
                  <div className="row">
                    <div className="col-4 col-lg-3 mb-4"></div>
                    <div className="col-4 col-lg-3 mb-4">
                      <Link href="/integrations">
                        <Image
                          src={Partner2}
                          width={500}
                          height={400}
                          alt="image not found"
                          style={{
                            width: "100%",
                            // height: "140px",
                            boxShadow:
                              "0px 4px 6px rgba(0.63, 0.00, 0.08, 0.39)",
                            borderColor: "#399B8E",
                            borderRadius: "30px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="col-4 col-lg-3 mb-4"></div>
                    <div className="col-4 col-lg-3 mb-4 d-none d-lg-block"></div>

                    <div className="col-4 col-lg-3 mb-4">
                      <Link href="/integrations">
                        <Image
                          src={Partner5}
                          width={500}
                          height={400}
                          alt="image not found"
                          style={{
                            width: "100%",
                            // height: "140px",
                            boxShadow:
                              "0px 4px 6px rgba(0.63, 0.00, 0.08, 0.39)",
                            borderRadius: "30px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="col-4 col-lg-3 mb-4">
                      <Link href="/integrations">
                        <Image
                          src={Partner9}
                          width={500}
                          height={400}
                          alt="image not found"
                          style={{
                            width: "100%",
                            // height: "140px",
                            boxShadow:
                              "0px 4px 6px rgba(0.63, 0.00, 0.08, 0.39)",
                            borderRadius: "30px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="col-4 col-lg-3 mb-4">
                      <Link href="/integrations">
                        <Image
                          src={Partner81}
                          width={500}
                          height={400}
                          alt="image not found"
                          style={{
                            width: "100%",
                            // height: "140px",
                            boxShadow:
                              "0px 4px 6px rgba(0.63, 0.00, 0.08, 0.39)",
                            borderRadius: "30px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="col-4 col-lg-3 mb-4 d-none d-lg-block"></div>
                    <div className="col-4 col-lg-3 mb-4"></div>
                    <div className="col-4 col-lg-3 mb-4">
                      <Link href="/integrations">
                        <Image
                          src={Partner3}
                          width={500}
                          height={400}
                          alt="image not found"
                          style={{
                            width: "100%",
                            // height: "140px",
                            boxShadow:
                              "0px 4px 6px rgba(0.63, 0.00, 0.08, 0.39)",
                            borderRadius: "30px",
                          }}
                        />
                      </Link>
                    </div>
                    <div className="col-4 col-lg-3 mb-4"></div>
                    <div className="col-4 col-lg-3 mb-4 d-none d-lg-block"></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-xl-5 col-lg-5 mb-4">
            <h2 className="SeamlessIntegrationH2">Seamless Integration </h2>
            <p className="SeamlessIntegrationText">
              ZeuZ seamlessly integrates with your existing tech stack, becoming
              an essential component of your ecosystem. This integration
              includes synchronizing sprints with JIRA for efficient project
              management, linking GitHub issues to generate detailed reports
              with milestone synchronization, and integrating with various CI/CD
              pipelines like GitHub Actions, Jenkins, and Azure DevOps.
              Additionally, ZeuZ enables the transmission of reports and metrics
              to platforms such as GCP BigQuery, allowing for visualization of
              data using tools like Google Data Studio.
            </p>
            <Link className="features__btn svgHoverCss" href="/integrations">
              Learn about our integrations{" "}
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
        </div>
      </div>
    </section>
  );
};

export default ExistingToolsPage;
