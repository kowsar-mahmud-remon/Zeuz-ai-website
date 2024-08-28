import React from "react";
import Image from "next/image";

import One from "public/img/teams-integrations-slack.svg";
import Two from "public/img/stack.png";
import { IoMdCheckmarkCircle } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const RobustAPIPage = () => {
  return (
    <section className="feedback__area pt-120 pb-60 bg-white">
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-6 col-lg-6 mb-4">
            <h2>And so much more with our robust API…</h2>
            <p className="mt-4">
              Our robust API allows you to integrate the apps you’re using. Even
              if they’re homegrown.
            </p>

            <div className="d-flex gap-3" style={{ marginTop: "40px" }}>
              <Link
                className="btn btn-outline-primary btn-sm py-2 px-4"
                href="/integrations"
              >
                Talk to an expert{" "}
              </Link>
              <Link
                className="btn btn-primary btn-sm py-2 px-4"
                href="/integrations"
              >
                Learn more
              </Link>
            </div>
          </div>

          <div></div>
        </div>
        <div className="row">
          <Marquee pauseOnClick={true}>
            <div className="col-xl-6 col-lg-6 shadow p-4">
              <Image
                style={{ height: "70px" }}
                width={70}
                height={100}
                src={Two}
                alt="image not found"
              />

              <p className="mt-4">
                Suggest questions typed in Slack become questions that live in
                Stack Overflow for Teams.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 shadow p-4">
              <Image
                style={{ height: "70px" }}
                width={70}
                height={100}
                src={Two}
                alt="image not found"
              />

              <p className="mt-4">
                Suggest questions typed in Slack become questions that live in
                Stack Overflow for Teams.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 shadow p-4">
              <Image
                style={{ height: "70px" }}
                width={70}
                height={100}
                src={Two}
                alt="image not found"
              />

              <p className="mt-4">
                Suggest questions typed in Slack become questions that live in
                Stack Overflow for Teams.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 shadow p-4">
              <Image
                style={{ height: "70px" }}
                width={70}
                height={100}
                src={Two}
                alt="image not found"
              />

              <p className="mt-4">
                Suggest questions typed in Slack become questions that live in
                Stack Overflow for Teams.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 shadow p-4">
              <Image
                style={{ height: "70px" }}
                width={70}
                height={100}
                src={Two}
                alt="image not found"
              />

              <p className="mt-4">
                Suggest questions typed in Slack become questions that live in
                Stack Overflow for Teams.
              </p>
            </div>
            <div className="col-xl-6 col-lg-6 shadow p-4">
              <Image
                style={{ height: "70px" }}
                width={70}
                height={100}
                src={Two}
                alt="image not found"
              />

              <p className="mt-4">
                Suggest questions typed in Slack become questions that live in
                Stack Overflow for Teams.
              </p>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default RobustAPIPage;
