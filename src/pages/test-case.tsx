import Layout from "@/components/layout/Layout";
import TestimonialsTwoTable from "@/components/layout/banner/TestimonialsTwoTable";
import Head from "next/head";
import React from "react";

const testCase = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Test Case</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <TestimonialsTwoTable />
    </Layout>
  );
};

export default testCase;
