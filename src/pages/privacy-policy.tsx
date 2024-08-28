import Layout from "@/components/layout/Layout";
import PrivacyPolicyPage from "@/components/layout/PrivacyPolicy/PrivacyPolicyPage";
import Head from "next/head";
import React from "react";

const privacy = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Privacy policy</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <PrivacyPolicyPage />
    </Layout>
  );
};

export default privacy;
