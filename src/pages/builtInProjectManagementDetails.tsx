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

const builtInProjectManagementDetails = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Built in project management</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <section
        className="feedback__area pb-60 featuresTwoDetails"
        style={{ backgroundColor: "#FDFDF9" }}
      >
        <div className="container">
          <h2 className="text-center featuresTwoDetailsTitle">
            Built in project management
          </h2>

          <div className="row align-items-center featuresTwoDetailsMargin">
            <div className="col-xl-6 col-lg-6 mb-4">
              <div className="d-flex">
                <div className="featureTwoDetailsContent">
                  <h4 style={{ color: "#1291B2" }}>
                    Seamless Project Integration
                  </h4>
                  <ul className="">
                    <li>
                      Integrate testing seamlessly with project management
                      workflows.
                    </li>
                    <li>
                      Track testing progress alongside development milestones.
                    </li>
                    <li>Assign tasks and manage resources efficiently.</li>
                    <li>Align testing efforts with project timelines.</li>
                    <li>Collaborate with teams across different phases.</li>
                    <li>Streamline communication with built-in tools.</li>
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
                    Agile Testing Capabilities
                  </h4>
                  <ul className="">
                    <li>
                      Support iterative development with agile methodologies.
                    </li>
                    <li>
                      Adapt testing processes to evolving project requirements.
                    </li>
                    <li>
                      Prioritize and schedule tests based on project priorities.
                    </li>
                    <li>
                      Continuous integration and delivery (CI/CD) compatibility.
                    </li>
                    <li>
                      Flexibility to adjust testing strategies in real-time.
                    </li>
                    <li>Ensure testing meets sprint goals and deadlines.</li>
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
                    Comprehensive Reporting and Analytics
                  </h4>
                  <ul className="">
                    <li>
                      Generate detailed reports on testing progress and
                      outcomes.
                    </li>
                    <li>
                      Analyze test results to improve project decision-making.
                    </li>
                    <li>Track performance metrics and quality benchmarks.</li>
                    <li>Visualize project health and testing coverage.</li>
                    <li>Identify trends and potential bottlenecks early.</li>
                    <li>Enhance project transparency with accessible data. </li>
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

export default builtInProjectManagementDetails;
