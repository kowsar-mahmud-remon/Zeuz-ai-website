import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import TechnicalArea from "@/components/containers/cta/TechnicalArea";
import TechnicalProject from "@/components/containers/projects/TechnicalProject";
import Head from "next/head";

const technical = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Technical</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
              
      </Head>
      <Banner title="Technical SEO" />
      <TechnicalArea />
      <TechnicalProject />
    </Layout>
  );
};

export default technical;
