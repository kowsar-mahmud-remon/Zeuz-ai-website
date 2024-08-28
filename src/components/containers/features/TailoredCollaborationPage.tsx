import React from "react";
import Image from "next/image";

import One from "public/img/TailoredCollaboration/TailoredCollaborationImg01.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import Link from "next/link";

const TailoredCollaborationPage = () => {
  return (
    <section
      className="feedback__area pt-60 pb-60"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <div className="row ">
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
                          width: "85%",
                          height: "450px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-lg-7 mb-4 allTextSize">
            <h2 className="" style={{ color: "#399B8E" }}>
              Tailored Collaboration Options for quality assurance Testing
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
              Discover Zeuzs innovative products, such as the ground-breaking
              ZeuZ Test Automation Developer (ZTAD) and an extensive collection
              of vital resources that can be customized to meet your needs.
              Boost your teams performance with our excellent training.
              services, making sure they take advantage of Zeuzs powerful
              Automation Testing platform to its fullest. Accept Zeuz to give
              your company unmatched time and financial savings.
            </p>

            <Link className="features__btn svgHoverCss" href="/service">
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

export default TailoredCollaborationPage;
