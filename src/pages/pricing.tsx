import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import PriceList from "@/components/containers/cta/PriceList";
import PricingBanner from "@/components/layout/banner/PricingBanner";
import PricingBannerNew from "@/components/layout/banner/PricingBannerNew";
import Head from "next/head";
const pricing = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Pricing</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <PricingBannerNew />
      {/* <PricingBanner /> */}
      <PriceList />
    </Layout>
  );
};

export default pricing;
