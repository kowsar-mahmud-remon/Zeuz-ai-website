import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";

import HomeThreeService from "@/components/containers/service/HomeThreeService";
import HomeThreeFeatures from "@/components/containers/features/HomeThreeFeatures";
import ServiceBoost from "@/components/containers/boost/ServiceBoost";
import ServiceCta from "@/components/containers/cta/ServiceCta";
import HomeTwoService from "@/components/containers/service/HomeTwoService";
import ServiceBanner from "@/components/layout/banner/ServiceBanner";
import AboutOne from "@/components/containers/about/AboutOne";
import Platform from "@/components/containers/platform/SponsorOne";
import QaTesting from "@/components/containers/features/QaTesting";
import ServicesBanner from "@/components/layout/banner/ServicesBanner";
import OurServicesPage from "@/components/containers/service/OurServicesPage";
import QAServicesDetailsPage from "@/components/containers/service/QAServicesDetailsPage";
import Head from "next/head";
const service = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Services</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      {/* <Banner/> */}
      <ServicesBanner />

      {/* <HomeTwoService /> */}

      <QaTesting />
      <OurServicesPage />
      <QAServicesDetailsPage />
      {/* <AboutOne /> */}

      {/* <Platform /> */}
    </Layout>
  );
};

export default service;
