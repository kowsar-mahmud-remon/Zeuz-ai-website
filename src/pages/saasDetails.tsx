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

const saasDetails = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Saas Details</title>
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
            SAAS / On-Prem Solution
          </h2>

          <div className="row align-items-center featuresTwoDetailsMargin">
            <div className="col-xl-6 col-lg-6 mb-4">
              <div className="d-flex">
                <div className="featureTwoDetailsContent">
                  <h4 style={{ color: "#1291B2" }}>
                    Flexible Deployment Options
                  </h4>
                  <ul className="">
                    <li>
                      Choose between cloud-based SaaS or on-premises solutions.
                    </li>
                    <li>
                      Adapt to organizational security and compliance
                      requirements.
                    </li>
                    <li>
                      Easily switch between deployment models as needs evolve.
                    </li>
                    <li>
                      Ensure data sovereignty with on-premises installations.
                    </li>
                    <li>
                      Leverage scalable resources with cloud-based
                      infrastructure.
                    </li>
                    <li>
                      Support hybrid environments for optimal flexibility.
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
                    Unified Testing Environment
                  </h4>
                  <ul className="">
                    <li>
                      Maintain consistent testing capabilities across
                      deployments.
                    </li>
                    <li>
                      Access the same features and tools regardless of
                      deployment.
                    </li>
                    <li>
                      Ensure seamless collaboration across distributed teams.
                    </li>
                    <li>
                      Centralize test management for efficiency and control.
                    </li>
                    <li>
                      Integrate with existing IT infrastructure seamlessly.
                    </li>
                    <li>
                      Support multiple environments with minimal setup effort.
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
                    Enhanced Security and Control
                  </h4>
                  <ul className="">
                    <li>Secure sensitive data with robust access controls.</li>
                    <li>Implement encryption and compliance measures.</li>
                    <li>
                      Monitor and audit testing activities comprehensively.
                    </li>
                    <li>
                      Protect intellectual property with secure testing
                      environments.
                    </li>
                    <li>
                      Maintain data privacy and confidentiality standards.
                    </li>
                    <li>
                      Empower IT teams with full administrative control and
                      visibility.
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

export default saasDetails;
