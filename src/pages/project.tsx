import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import ProjectCta from "@/components/containers/cta/ProjectCta";
import ProjectGallery from "@/components/containers/cta/ProjectGallery";
import Head from "next/head";

const project = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Project</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <Banner title="Our Projects" />
      <ProjectGallery />
      {/* <ProjectCta /> */}
    </Layout>
  );
};

export default project;
