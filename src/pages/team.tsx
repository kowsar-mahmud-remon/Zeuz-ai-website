import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import TeamArea from "@/components/containers/details/TeamArea";
import ServiceCtaTwo from "@/components/containers/cta/ServiceCtaTwo";
import Head from "next/head";

const team = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Team</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <Banner title="Our SEO Expert" />
      {/* <TeamArea />
      <ServiceCtaTwo /> */}
    </Layout>
  );
};

export default team;
