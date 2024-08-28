import React from "react";
import Image from "next/image";

import One from "public/img/Technology page/section 1/ts1-1.png";
import Two from "public/img/Technology page/section 1/ts1-2.png";
import Three from "public/img/Technology page/section 1/ts1-3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const TechnologyPageFour = () => {
  return (
    <section className="feedback__area pt-120 pb-60 bg-white">
      <div className="container">
        <div className="row " data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-12 col-lg-12 mb-4">
            <h2>ZeuZ Benefits:</h2>

            <ul className="ms-4 mt-4">
              <li>ZeuZ automates your tests across many platforms</li>
              <li>
                ZeuZ provides simple UI to create maintenance-free complex test
                workflows spanning across platforms
              </li>
              <li>
                ZeuZ comes with an embedded framework that allows the testers
                and developers to focus on test coverage rather than technology
                stack
              </li>
              <li>
                ZeuZ has powerful debugging tools, including recommendations to
                resolve issues
              </li>
              <li>
                ZeuZ also includes the ability to create manual tests, track
                bugs, record product features
              </li>
              <li>
                ZeuZ provides insights, various reports, and notifications
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPageFour;
