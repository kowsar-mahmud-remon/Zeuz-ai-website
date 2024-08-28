import HomeThreeService from "@/components/containers/service/HomeThreeService";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import Head from "next/head";
import React from "react";

const serviceDetails = () => {
  return (
    <div>
      <Layout header={1} footer={1}>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <title>ZeuZ | Service Details</title>
          <meta name="keywords" content="ZeuZ-ai" />
          <meta name="description" content="ZeuZ-ai" />
        </Head>
        <Banner title="Services Details" />
        <HomeThreeService />
      </Layout>
    </div>
  );
};

export default serviceDetails;
