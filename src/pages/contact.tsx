import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import HomeThreeTouch from "@/components/containers/touch/HomeThreeTouch";
import ContactMap from "@/components/containers/cta/ContactMap";
import ContactBanner from "@/components/layout/banner/ContactBanner";
import Head from "next/head";
const contact = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Contact</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
              
      </Head>
      {/* <Banner title="Contact" /> */}
      <ContactBanner />
      <HomeThreeTouch />
      <ContactMap />
    </Layout>
  );
};

export default contact;
