import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import HomeThreeTouch from "@/components/containers/touch/HomeThreeTouch";
import ContactMap from "@/components/containers/cta/ContactMap";
import RequestADemo from "@/components/containers/touch/RequestADemo";
import RequestDemoBanner from "@/components/layout/banner/RequestDemoBanner";
import Head from "next/head";

const requestademo = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Request Demo</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
              
      </Head>
      {/* <Banner title="Request A Demo" /> */}
      <RequestDemoBanner />
      <RequestADemo />
    </Layout>
  );
};

export default requestademo;
