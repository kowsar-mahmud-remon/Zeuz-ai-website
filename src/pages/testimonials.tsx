import React from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import TeamArea from "@/components/containers/details/TeamArea";
import ServiceCtaTwo from "@/components/containers/cta/ServiceCtaTwo";
import TestimonialsPage from "@/components/layout/Testimonials/TestimonialsPage";
import HomeSectionThree1 from "@/components/containers/feedback/HomeSectionThree1";
import TestimonialsBanner from "@/components/layout/banner/TestimonialsBanner";
import HomeThreeFeedback from "@/components/containers/feedback/HomeSectionThree";
import TestimonialsTwo from "@/components/layout/banner/TestimonialsTwo";
import TestimonialsTwoTable from "@/components/layout/banner/TestimonialsTwoTable";
import Head from "next/head";

const testimonials = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Testimonial</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <TestimonialsBanner />
      <TestimonialsTwo />
      <HomeThreeFeedback />
      {/* <HomeSectionThree1 /> */}
      {/* <TestimonialsPage /> */}
    </Layout>
  );
};

export default testimonials;
