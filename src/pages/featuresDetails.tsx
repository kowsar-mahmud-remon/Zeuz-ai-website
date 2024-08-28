import FeaturesTwoDetails from "@/components/containers/features/FeaturesTwoDetails";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import React from "react";

const featuresDetails = () => {
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
          <title>ZeuZ | Features Details</title>
          <meta name="keywords" content="ZeuZ-ai" />
          <meta name="description" content="ZeuZ-ai" />
        </Head>
        <FeaturesTwoDetails />
      </Layout>
    </div>
  );
};

export default featuresDetails;
