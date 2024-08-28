import React from "react";
import Image from "next/image";
import Link from "next/link";
import Img01 from "public/img/features/featuresTowDetailsImg01.svg";
import Img02 from "public/img/features/featuresTowDetailsImg02.svg";
import Img03 from "public/img/features/featuresTowDetailsImg03.svg";
import Img04 from "public/img/features/featuresTowDetailsImg04.svg";
import Img05 from "public/img/features/featuresTowDetailsImg05.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const crossPlatformDetails = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Cross Platform</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <section
        className="feedback__area pb-60 featuresTwoDetails"
        style={{ backgroundColor: "#FDFDF9" }}
      >
        <div className="container">
          <h2 className="text-center featuresTwoDetailsTitle">
            Cross-Platform
          </h2>

          <div className="row align-items-center featuresTwoDetailsMargin">
            <div className="col-xl-6 col-lg-6 mb-4">
              <div className="d-flex">
                <div className="featureTwoDetailsContent">
                  <h4 style={{ color: "#1291B2" }}>Broad Platform Support</h4>
                  <ul className="">
                    <li>Test on desktop, mobile, and web applications.</li>
                    <li>
                      Support for various operating systems like Windows, macOS,
                      Linux.
                    </li>
                    <li>Compatibility with Android and iOS devices.</li>
                    <li>Test across different browsers and versions.</li>
                    <li>Ensure consistency on tablets and wearables.</li>
                    <li>
                      Seamless integration with cloud-based testing platforms.
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
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-4">
              <div className="d-flex">
                <div className="featureTwoDetailsContent">
                  <h4 style={{ color: "#1291B2" }}>
                    Unified Testing Framework
                  </h4>
                  <ul className="">
                    <li>Centralized management for all platform tests.</li>
                    <li>Reuse test cases across different environments.</li>
                    <li>
                      Consistent reporting and analytics for all platforms.
                    </li>
                    <li>Simplify test maintenance with a single framework.</li>
                    <li>Reduce redundancy with shared resources.</li>
                    <li>Adapt to new platforms quickly and efficiently.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center featuresTwoDetailsMargin">
            <div className="col-xl-6 col-lg-6 mb-4">
              <div className="d-flex">
                <div className="featureTwoDetailsContent">
                  <h4 style={{ color: "#1291B2" }}>
                    Enhanced Coverage and Quality
                  </h4>
                  <ul className="">
                    <li>Comprehensive testing for better software quality.</li>
                    <li>Identify platform-specific issues early.</li>
                    <li>Improve user experience on all devices.</li>
                    <li>
                      Faster release cycles with automated cross-platform tests.
                    </li>
                    <li>Ensure compatibility with the latest gadgets.</li>
                    <li>
                      Achieve higher reliability across multiple platforms.
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default crossPlatformDetails;
