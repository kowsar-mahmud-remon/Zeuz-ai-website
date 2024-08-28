import React from "react";
import Image from "next/image";

import One from "public/img/teams-integrations-hero.svg";
// import Two from "public/img/home/section 1/s1-2.png";

import Link from "next/link";
// import One from "public/img/testmo/1.png";
// import Two from "public/img/testmo/2.png";
// import Three from "public/img/testmo/3.png";
// import Four from "public/img/testmo/1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const IntegrationsPage = () => {
  return (
    <section className="feedback__area pt-120 pb-60 bg-white">
      <div className="container">
        <div
          className="row d-flex align-items-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-xl-5 col-lg-5 mb-4">
            <div className="section__subtitle-3">
              <span>How it fits in</span>
            </div>
            <h2 style={{ fontSize: 30 }}>Level up your tools and teams.</h2>
            <p style={{ fontSize: 16, color: "gray", paddingTop: 40 }}>
              Stack Overflow for Teams integrates with your existing tools,
              products, and tech stack to make them work better for your team.
            </p>
          </div>

          <div className="col-xl-7 col-lg-7">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content">
                      <Image
                        src={One}
                        width={500}
                        height={400}
                        alt="image not found"
                        style={{
                          width: "95%",
                          height: "400px",
                        }}
                      />
                    </div>
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

export default IntegrationsPage;
