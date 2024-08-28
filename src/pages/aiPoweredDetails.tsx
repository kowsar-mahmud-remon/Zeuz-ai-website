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

const aiPoweredDetails = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Ai Powered</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
              
      </Head>

      <section
        className="feedback__area pb-60 featuresTwoDetails"
        style={{ backgroundColor: "#FDFDF9" }}
      >
        <div className="container">
          <h2 className="text-center featuresTwoDetailsTitle">AI-Powered</h2>

          <div className="row align-items-center featuresTwoDetailsMargin">
            <div className="col-xl-6 col-lg-6 mb-4">
              <div className="d-flex">
                <div className="featureTwoDetailsContent">
                  <h4 style={{ color: "#1291B2" }}>
                    Intelligent Test Automation
                  </h4>
                  <ul className="">
                    <li>
                      Automatically generate test cases based on application
                      behavior.
                    </li>
                    <li>Execute tests dynamically to adapt to changes.</li>
                    <li>
                      Self-healing scripts fix themselves when encountering
                      issues.
                    </li>
                    <li>
                      Predict defects before they impact the user experience.
                    </li>
                    <li>Integrate smoothly with CI/CD pipelines.</li>
                    <li>Get real-time analytics and comprehensive reporting</li>
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
                    Adaptive Testing Strategies
                  </h4>
                  <ul className="">
                    <li>Perform context-aware testing for better accuracy.</li>
                    <li>Prioritize tests based on risk assessment.</li>
                    <li>Make informed decisions with data-driven insights.</li>
                    <li>Continuously learn and improve from test results.</li>
                    <li>Customize testing parameters to suit your needs.</li>
                    <li>Scale testing environments as your project grows. </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row align-items-center featuresTwoDetailsMargin">
            <div className="col-xl-6 col-lg-6 mb-4">
              <div className="d-flex">
                <div className="featureTwoDetailsContent">
                  <h4 style={{ color: "#1291B2" }}>Enhanced User Experience</h4>
                  <ul className="">
                    <li>Navigate easily with an intuitive user interface.</li>
                    <li>Set up and configure testing quickly.</li>
                    <li>Use interactive dashboards for detailed insights.</li>
                    <li>
                      Collaborate with team members in a unified workspace.
                    </li>
                    <li>
                      Receive detailed error reports for quick resolutions.
                    </li>
                    <li>Support for multiple languages and locales.</li>
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

export default aiPoweredDetails;
