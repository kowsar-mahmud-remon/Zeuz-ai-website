import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import Banner from "@/components/layout/banner/Banner";
import Layout from "@/components/layout/Layout";
import TechnologyPage from "@/components/layout/Technology/TechnologyPage";
import TechnologyBanner from "@/components/layout/banner/TechnologyBanner";
import TechnologyPageTwo from "@/components/layout/Technology/TechnologyPageTwo";
import TechnologyPageThree from "@/components/layout/Technology/TechnologyPageThree";
import TechnologyPageFour from "@/components/layout/Technology/TechnologyPageFour";
import Technology from "@/components/containers/technology/SponsorOne";
import ExistingToolsPage from "@/components/containers/feedback/ExistingToolsPage";
import Head from "next/head";
const technology = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Technology</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <TechnologyBanner />
      <TechnologyPage />
      <TechnologyPageTwo />
      <TechnologyPageThree />
      {/* <Technology /> */}
      {/* <ExistingToolsPage /> */}
      {/* <TechnologyPageFour /> */}
    </Layout>
  );
};

export default technology;
