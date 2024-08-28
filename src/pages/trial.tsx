import Layout from "@/components/layout/Layout";
import TrialPage from "@/components/layout/TrialPage/TrialPage";
import Head from "next/head";
import React from "react";

const trial = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Trail</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
              
      </Head>
      <TrialPage />
    </Layout>
  );
};

export default trial;
