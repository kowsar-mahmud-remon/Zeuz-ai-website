import React from "react";
import Image from "next/image";
import Link from "next/link";
import Img01 from "public/img/features/featuresTowDetailsImg01.svg";
import Img02 from "public/img/features/featuresTowDetailsImg02.svg";
import Img03 from "public/img/features/featuresTowDetailsImg03.svg";
import Img04 from "public/img/features/featuresTowDetailsImg04.svg";
import Img05 from "public/img/features/featuresTowDetailsImg05.svg";

// import Video1 from "./video.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const FeaturesTwoDetails = () => {
  // const videoSource = "https://www.youtube.com/embed/6PJ-vveaT4k";
  const videoSource = "./video1.mp4";

  return (
    <section
      className="feedback__area pb-60 featuresTwoDetails"
      style={{ backgroundColor: "#FDFDF9" }}
    >
      <div className="container">
        <h2 className="text-center featuresTwoDetailsTitle">
          Benefits for different users
        </h2>

        <div className="row align-items-center featuresTwoDetailsMargin">
          <div className="col-xl-6 col-lg-6 mb-4">
            <div className="d-flex">
              <div className="featureTwoDetailsContent">
                <h4 style={{ color: "#1291B2" }}>Manual Tester</h4>
                <ul className="">
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="feedbacK__content">
              <div
                className="d-lg-flex justify-content-end"
                style={{ marginTop: "5px" }}
              >
                <Image
                  className="featuresTwoDetailsImgStyles"
                  src={Img01}
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

        <div className="row align-items-center featuresTwoDetailsMargin">
          <div className="col-xl-6 col-lg-6">
            <div className="feedbacK__content">
              <div className="" style={{ marginTop: "5px" }}>
                <Image
                  className="featuresTwoDetailsImgStyles"
                  src={Img02}
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
          <div className="col-xl-6 col-lg-6 mb-4">
            <div className="d-flex">
              <div className="featureTwoDetailsContent">
                <h4 style={{ color: "#1291B2" }}>Automation Tester</h4>
                <ul className="">
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center featuresTwoDetailsMargin">
          <div className="col-xl-6 col-lg-6 mb-4">
            <div className="d-flex">
              <div className="featureTwoDetailsContent">
                <h4 style={{ color: "#1291B2" }}>QA Team Lead</h4>
                <ul className="">
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="feedbacK__content">
              <div
                className="d-lg-flex justify-content-end"
                style={{ marginTop: "5px" }}
              >
                <Image
                  className="featuresTwoDetailsImgStyles"
                  src={Img03}
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

        <div className="row align-items-center featuresTwoDetailsMargin">
          <div className="col-xl-6 col-lg-6">
            <div className="feedbacK__content">
              <div className="" style={{ marginTop: "5px" }}>
                <Image
                  className="featuresTwoDetailsImgStyles"
                  src={Img04}
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
          <div className="col-xl-6 col-lg-6 mb-4">
            <div className="d-flex">
              <div className="featureTwoDetailsContent">
                <h4 style={{ color: "#1291B2" }}>QA Manager</h4>
                <ul className="">
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center featuresTwoDetailsMargin">
          <div className="col-xl-6 col-lg-6 mb-4">
            <div className="d-flex">
              <div className="featureTwoDetailsContent">
                <h4 style={{ color: "#1291B2" }}>Project Manager</h4>
                <ul className="">
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                  <li>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="feedbacK__content">
              <div
                className="d-lg-flex justify-content-end"
                style={{ marginTop: "5px" }}
              >
                <Image
                  className="featuresTwoDetailsImgStyles"
                  src={Img05}
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
    </section>
  );
};

export default FeaturesTwoDetails;
