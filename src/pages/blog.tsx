import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import BlogArea from "@/components/containers/details/BlogArea";
import BlogsBanner from "@/components/layout/banner/BlogsBanner";
import Head from "next/head";
const blog = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Blog</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
              
      </Head>
      <BlogsBanner />
      <BlogArea />
    </Layout>
  );
};

export default blog;
