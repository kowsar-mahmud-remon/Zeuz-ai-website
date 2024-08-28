import React from "react";
import Image from "next/image";

// import One from "public/img/Technology page/section 3/ts3-1.png";
// import Two from "public/img/Technology page/section 3/ts3-2.png";
import One from "public/img/mockup/hero_section_1-removebg-preview.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const TechnologyPageThree = () => {
  return (
    <section
      className="feedback__area pt-120 pb-60"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container">
        <div className="row " data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-5 col-lg-5 mb-4">
            {/* <div className="section__subtitle-3">
              <span>Exploratory testing </span>
            </div> */}
            <h2 style={{ fontSize: 26, color: "#16b99b" }}>
              ZeuZ: CI/CD Integration Leader
            </h2>
            <p
              className="CustomerTextCss"
              style={{ fontSize: 16, color: "gray", paddingTop: 40 }}
            >
              ZeuZ effortlessly incorporates with top CI/CD platforms like GIT,
              SVN, Jenkins, TeamCity, Ansible, Jira, Slack, Asana, and HP ALM,
              among others, simplifying workflow management and fostering
              seamless collaboration among teams on different platforms. By
              leveraging ZeuZ, users can maximize the potential of their
              preferred tools while enjoying its extensive automation features,
              ultimately enhancing productivity and streamlining processes
              across the board.
            </p>
            <Link className="features__btn svgHoverCss" href="/">
              Start Now
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
          <div className="col-xl-7 col-lg-7">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content">
                      <Image
                        className="mt-4 ms-3"
                        src={One}
                        width={500}
                        height={400}
                        alt="image not found"
                        style={{
                          width: "85%",
                          height: "400px",
                          borderRadius: "10px",
                          backgroundColor: "#229f8f",
                          boxShadow: "0px 4px 6px rgba(0.5, 0.5, 0.5, .5)",
                        }}
                      />
                    </div>

                    {/* <SwiperSlide>
                  <div className="feedbacK__content">
                    <Image
                      src={Two}
                      style={{ width: "100%", height: "400px" }}
                      width={500}
                      height={400}
                      alt="image not found"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedbacK__content">
                    <Image
                      src={Three}
                      style={{ width: "100%", height: "400px" }}
                      width={500}
                      height={400}
                      alt="image not found"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedbacK__content">
                    <Image
                      src={Four}
                      style={{ width: "100%", height: "400px" }}
                      width={500}
                      height={400}
                      alt="image not found"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feedbacK__content">
                    <Image
                      src={Five}
                      style={{ width: "100%", height: "400px" }}
                      width={500}
                      height={400}
                      alt="image not found"
                    />
                  </div>
                </SwiperSlide> */}
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

export default TechnologyPageThree;
