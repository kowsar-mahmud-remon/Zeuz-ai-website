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

const builtInSchedulesDetails = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Built-in Schedules CI/CD Integration</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <section
        className="feedback__area pb-60 featuresTwoDetails"
        style={{ backgroundColor: "#FDFDF9" }}
      >
        <div className="container">
          <h2 className="text-center featuresTwoDetailsTitle">
            {" "}
            Built-in Schedules CI/CD Integration
          </h2>

          <div className="row align-items-center featuresTwoDetailsMargin">
            <div className="col-xl-6 col-lg-6 mb-4">
              <div className="d-flex">
                <div className="featureTwoDetailsContent">
                  <h4 style={{ color: "#1291B2" }}>
                    Automated Testing Pipelines
                  </h4>
                  <ul className="">
                    <li>
                      Seamlessly integrate automated testing into CI/CD
                      pipelines.
                    </li>
                    <li>Trigger tests automatically with each code commit.</li>
                    <li>
                      Ensure consistent testing across all deployment stages.
                    </li>
                    <li>Validate changes quickly and efficiently.</li>
                    <li>Reduce manual intervention and human error.</li>
                    <li>Improve overall software quality and reliability.</li>
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
                  <h4 style={{ color: "#1291B2" }}>Continuous Feedback Loop</h4>
                  <ul className="">
                    <li>
                      Receive instant feedback on code changes through automated
                      tests.
                    </li>
                    <li>
                      Identify and fix issues early in the development cycle.
                    </li>
                    <li>
                      Monitor application health throughout the deployment
                      pipeline.
                    </li>
                    <li>
                      Facilitate faster iterations and shorter release cycles.
                    </li>
                    <li>
                      Enable continuous improvement based on real-time insights.
                    </li>
                    <li>
                      Streamline collaboration between development and QA teams.
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
                  <h4 style={{ color: "#1291B2" }}>
                    Scalable and Efficient Testing
                  </h4>
                  <ul className="">
                    <li>
                      Scale testing efforts effortlessly with automated CI/CD
                      workflows.
                    </li>
                    <li>
                      Test applications across diverse environments and
                      configurations.
                    </li>
                    <li>
                      Optimize resource utilization with parallel testing
                      capabilities.
                    </li>
                    <li>Ensure compatibility across platforms and gadgets.</li>
                    <li>
                      Increase deployment speed without compromising quality.
                    </li>
                    <li>
                      Achieve seamless integration with existing CI/CD tools and
                      frameworks.
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

export default builtInSchedulesDetails;
