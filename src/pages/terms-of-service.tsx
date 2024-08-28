import Layout from "@/components/layout/Layout";
import TermsOfServicePage from "@/components/layout/TermsOfService/TermsOfServicePage";
import Head from "next/head";
import React from "react";

const terms = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Terms of service</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <TermsOfServicePage />
    </Layout>
  );
};

export default terms;
