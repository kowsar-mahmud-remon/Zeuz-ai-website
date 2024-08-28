import React from "react";

import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import AboutCounter from "@/components/containers/counter/AboutCounter";
import AboutMission from "@/components/containers/about/AboutMission";
import AboutTeam from "@/components/containers/team/AboutTeam";
import HomeThreeSponsor from "@/components/containers/sponsor/HomeThreeSponsor";
import HomeThreeFeedback from "@/components/containers/feedback/HomeThreeFeedback";
import SponsorOne from "@/components/containers/sponsor/SponsorOne";
import AboutBanner from "@/components/layout/banner/AboutBanner";
import HomeSectionThree from "@/components/containers/feedback/HomeSectionThree";
import AboutBannerNew from "@/components/layout/banner/AboutBannerNew";
import Head from "next/head";
const about = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | About</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
              
      </Head>
      <AboutBannerNew />
      {/* <AboutBanner /> */}
      {/* <AboutCounter /> */}
      <AboutMission />

      <HomeSectionThree />
      {/* <SponsorOne></SponsorOne> */}
    </Layout>
  );
};

export default about;
