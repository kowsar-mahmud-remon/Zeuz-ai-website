import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "public/img/features/featuresTowImg.svg";
import Img01 from "public/img/features/featuresTowImg01.svg";
import Img02 from "public/img/features/featuresTowImg02.svg";
import Img03 from "public/img/features/featuresTowImg03.svg";
import Img04 from "public/img/features/featuresTowImg04.svg";
import Img05 from "public/img/features/featuresTowImg05.svg";

// import Video1 from "./video.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const FeaturesTwo = () => {
  // const videoSource = "https://www.youtube.com/embed/6PJ-vveaT4k";
  const videoSource = "./video1.mp4";

  return (
    <section
      className="feedback__area pb-60"
      style={{ backgroundColor: "#FDFDF9", paddingTop: "50px" }}
    >
      <div className="container">
        <h2
          className="text-center featuresTwoDetailsTitle"
          style={{ marginBottom: 50 }}
        >
          Features for different users
        </h2>

        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content">
                      <h4
                        className="mb-4"
                        style={{ fontSize: "20px", color: "#399B8E" }}
                      >
                        I am a...
                      </h4>
                      <div
                        className="d-flex justify-content-center"
                        style={{ marginTop: "5px" }}
                      >
                        <Image
                          className="featuresTwoImgStyles"
                          src={One}
                          width={500}
                          height={500}
                          alt="image not found"
                        />
                        {/* <video autoPlay muted controls width="100%">
                          <source src="./video1.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 mb-4">
            <Link href="/featuresDetails">
              <div
                className="d-flex align-items-center gap-4 p-2 mb-3 shadow-sm"
                style={{ background: "#EEFCFE" }}
              >
                <Image
                  style={{ width: "55px" }}
                  className=""
                  src={Img01}
                  width={500}
                  height={500}
                  alt="image not found"
                />

                <div className="featureTwoContent">
                  <h4>Manual Tester</h4>
                  <p className="mt-1">
                    Efficiency Through Expertise: Streamlining Manual Testing
                    Processes
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/featuresDetails">
              <div
                className="d-flex align-items-center gap-4 p-2 mb-3 shadow-sm"
                style={{ background: "#EEFCFE" }}
              >
                <Image
                  style={{ width: "55px" }}
                  className=""
                  src={Img02}
                  width={500}
                  height={500}
                  alt="image not found"
                />

                <div className="featureTwoContent">
                  <h4>Automation Tester</h4>
                  <p className="mt-1">
                    Unleashing Innovation: Strategies for Effective Automation
                    Testing
                  </p>
                </div>
              </div>
            </Link>

            <Link href="/featuresDetails">
              <div
                className="d-flex align-items-center gap-4 p-2 mb-3 shadow-sm"
                style={{ background: "#EEFCFE" }}
              >
                <Image
                  style={{ width: "55px" }}
                  className=""
                  src={Img03}
                  width={500}
                  height={500}
                  alt="image not found"
                />

                <div className="featureTwoContent">
                  <h4>QA Team Lead</h4>
                  <p className="mt-1">
                    Strategic Quality Assurance: Leading Teams to Success
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/featuresDetails">
              <div
                className="d-flex align-items-center gap-4 p-2 mb-3 shadow-sm"
                style={{ background: "#EEFCFE" }}
              >
                <Image
                  style={{ width: "55px" }}
                  className=""
                  src={Img04}
                  width={500}
                  height={500}
                  alt="image not found"
                />

                <div className="featureTwoContent">
                  <h4>QA Manager</h4>
                  <p className="mt-1">
                    Building Bridges: Fostering Collaboration Across QA and
                    Development
                  </p>
                </div>
              </div>
            </Link>
            <Link href="/featuresDetails">
              <div
                className="d-flex align-items-center gap-4 p-2 mb-3 shadow-sm"
                style={{ background: "#EEFCFE" }}
              >
                <Image
                  style={{ width: "55px" }}
                  className=""
                  src={Img05}
                  width={500}
                  height={500}
                  alt="image not found"
                />

                <div className="featureTwoContent">
                  <h4>Project Manager</h4>
                  <p className="mt-1">
                    Essential Strategies for Success in Software Development
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

export default FeaturesTwo;
