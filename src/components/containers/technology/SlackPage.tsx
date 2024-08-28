import React from "react";
import Image from "next/image";

// import One from "public/img/teams-integrations-slack.svg";
import Two from "public/img/stack.png";
import { IoMdCheckmarkCircle } from "react-icons/io";

import One from "public/img/illo-overflowai.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import Link from "next/link";

const SlackPage = () => {
  return (
    <section
      className="feedback__area pb-0"
      style={{ backgroundColor: "#FAF9F6",paddingTop:150}}
    >
      <div className="container">
        <div className="text-center SlackPageCss">
          <h2 style={{ color: "#b25291" }}>ZeuZ Integrates</h2>
          <h3 style={{ color: "#353935" }}>
            Establishes the connection you have been seeking
          </h3>
          <p style={{ fontSize: "16px", marginTop: "8px" }}>
            ZeuZ seamlessly integrates with your existing tech setup,
            centralizing information for universal access to the latest updates
          </p>
          <p style={{ fontSize: "16px", marginTop: "8px" }}>
            This boosts productivity, efficiency, and adds enjoyment to work.
          </p>
        </div>
        <div className="row" style={{paddingBottom:50}}>
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
                <h2 style={{ fontSize: 30 }}>Slack</h2>
                <p style={{ fontSize: 16, paddingTop: 10 }}>
                  Post questions and get answers, right from Slack.
                </p>
                <div className="d-flex">
                  <IoMdCheckmarkCircle
                    style={{
                      fontSize: "32px",
                      marginRight: "10px",
                      marginTop: "3px",
                    }}
                  />
                  <p>
                    Access Stack Overflow for Teams directly within Slack,
                    enhancing collaboration and knowledge sharing.
                  </p>
                </div>
                <div className="d-flex">
                  <IoMdCheckmarkCircle
                    style={{
                      fontSize: "32px",
                      marginRight: "10px",
                      marginTop: "3px",
                    }}
                  />
                  <p>
                    Receive real-time updates and notifications in Slack for
                    timely information on questions and answers.
                  </p>
                </div>
                <div className="d-flex">
                  <IoMdCheckmarkCircle
                    style={{
                      fontSize: "32px",
                      marginRight: "10px",
                      marginTop: "3px",
                    }}
                  />
                  <p>
                    Discuss and brainstorm solutions with team members within
                    Slack channels, improving workflow.
                  </p>
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

export default SlackPage;
