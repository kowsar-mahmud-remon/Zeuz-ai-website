import React from "react";
import Image from "next/image";
import Link from "next/link";
import Img01 from "public/img/support/Live-Interactive-testing.png";
import Img02 from "public/img/support/Automation.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const support = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Support</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <section
        className="feedback__area pb-60 featuresTwoDetails"
        style={{ backgroundColor: "#FDFDF9" }}
      >
        <div className="container">
          <h2 className="text-center featuresTwoDetailsTitle">
            We Are Here To Help.
          </h2>

          <div className="row align-items-center featuresTwoDetailsMargin">
            <div className="col-xl-6 col-lg-6 mb-4">
              <div className="d-flex">
                <div className="featureTwoDetailsContent">
                  <h4 style={{ color: "#1291B2" }}>
                    Your support has arrived!
                  </h4>
                  <ul className="">
                    <li>Ask questions & get answers</li>
                    <li>Chat with QA and automation specialists</li>
                    <li>Chat with Devs and ZTADs</li>
                    <li>
                      Ask for help regarding automation or testing in general
                    </li>
                    <li>
                      Customers get hopped into a priority support server!
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="feedbacK__content">
                <div className="d-flex justify-content-center">
                  <iframe
                    src="https://discord.com/widget?id=1122437730366918698&amp;theme=dark"
                    width="75%"
                    height="500"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-6 align-items-center featuresTwoDetailsMargin mt-4">
            <div className="col-xl-4 col-lg-4 supportShadow mb-4">
              <Link
                target="_blank"
                href="https://automationsolutionz.github.io/"
              >
                <div className="feedbacK__content px-4 py-5 border rounded-3 supportHeight">
                  <div className="d-flex justify-content-center">
                    <Image
                      className=""
                      style={{ width: "80px" }}
                      src={Img01}
                      width={500}
                      height={500}
                      alt="image not found"
                    />
                  </div>
                  <div className="supportText">
                    <h4
                      className="text-center mt-4"
                      style={{ color: "#454545" }}
                    >
                      DOCUMENTATION
                    </h4>
                    <p
                      className="text-center mt-2"
                      style={{ color: "#737373" }}
                    >
                      Installation instructions, how-tos, technical docs, etc.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-xl-4 col-lg-4 supportShadow mb-4">
              <Link
                target="_blank"
                href="https://automationsolutionz.github.io/docs/how-tos/guides/"
              >
                <div className="feedbacK__content px-4 py-5 border rounded-3 supportHeight">
                  <div className="d-flex justify-content-center">
                    <Image
                      className=""
                      style={{ width: "80px" }}
                      src={Img01}
                      width={500}
                      height={500}
                      alt="image not found"
                    />
                  </div>
                  <div className="supportText">
                    <h4
                      className="text-center mt-4"
                      style={{ color: "#454545" }}
                    >
                      GUIDES
                    </h4>
                    <p
                      className="text-center mt-2"
                      style={{ color: "#737373" }}
                    >
                      How-tos and guides
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-xl-4 col-lg-4 supportShadow mb-4">
              <Link
                target="_blank"
                href="https://automationsolutionz.github.io/docs/course-info/"
              >
                <div className="feedbacK__content px-4 py-5 border rounded-3 supportHeight">
                  <div className="d-flex justify-content-center">
                    <Image
                      className=""
                      style={{ width: "80px" }}
                      src={Img02}
                      width={500}
                      height={500}
                      alt="image not found"
                    />
                  </div>
                  <div className="supportText">
                    <h4
                      className="text-center mt-4"
                      style={{ color: "#454545" }}
                    >
                      PRODUCT VIDEOS
                    </h4>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default support;
