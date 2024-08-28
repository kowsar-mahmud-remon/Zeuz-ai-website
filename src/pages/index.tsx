import React from "react";
import Layout from "@/components/layout/Layout";
import HomeBannerOne from "@/components/layout/banner/HomeBannerOne";
import SponsorOne from "@/components/containers/sponsor/SponsorOne";
import ChooseOne from "@/components/containers/choose/ChooseOne";
import AboutOne from "@/components/containers/about/AboutOne";
import Platform from "@/components/containers/platform/SponsorOne";
import Technology from "@/components/containers/technology/SponsorOne";
import FeaturesOne from "@/components/containers/features/FeaturesOne";
import Customized from "@/components/containers/features/Customized";
import SoftwareOne from "@/components/containers/software/SoftwareOne";
import ProjectOne from "@/components/containers/projects/ProjectOne";
import WorkOne from "@/components/containers/work/WorkOne";
import FeedbackOne from "@/components/containers/feedback/FeedbackOne";
import BlogOne from "@/components/containers/blog/BlogOne";
import SponsorTwo from "@/components/containers/sponsor/SponsorTwo";
import HomeFourVideo from "@/components/containers/offer/HomeFourVideo";
import YoutubeEmbed from "@/components/containers/youtube/YoutubeEmbed";
import VideoPage from "@/components/containers/videoPage/VideoPage";
import HomeThreeFeedback from "@/components/containers/feedback/HomeThreeFeedback";
import HomeSectionOne from "@/components/containers/feedback/HomeSectionOne";
import HomeSectionTwo from "@/components/containers/feedback/HomeSectionTwo";
import HomeSectionThree from "@/components/containers/feedback/HomeSectionThree";
import HomeSectionFour from "@/components/containers/feedback/HomeSectionFour";
import TechnologyPage from "@/components/layout/Technology/TechnologyPage";
import ExistingToolsPage from "@/components/containers/feedback/ExistingToolsPage";
import QaTesting from "@/components/containers/features/QaTesting";
import HomeBannerSectionTwo from "@/components/layout/banner/HomeBannerSectionTwo";
import HomeBannerSectionTwoNew from "@/components/layout/banner/HomeBannerSectionTwoNew";
import KnowledgeSharingPage from "@/components/containers/feedback/KnowledgeSharingPage";
import IntroducingZeuZVideoPage from "@/components/containers/feedback/IntroducingZeuZVideoPage";
import TailoredCollaborationPage from "@/components/containers/features/TailoredCollaborationPage";
import KeyFeaturesTwo from "@/components/containers/features/KeyFeaturesTwo";
import KeyFeaturesThree from "@/components/containers/features/KeyFeaturesThree";
import FeaturesTwo from "@/components/containers/features/FeaturesTwo";
import ManualTest from "@/components/layout/banner/ManualTest";
import QaTestingTwo from "@/components/containers/features/QaTestingTwo";
import Head from "next/head";
import KeyFeaturesFour from "@/components/containers/features/KeyFeaturesFour";

const Home = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Home</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
              
      </Head>
      {/* <HomeBannerOne /> */}

      {/* <HomeBannerSectionTwo /> */}
      <HomeBannerSectionTwoNew />
      <SponsorOne />
      <ManualTest />

      {/* <SponsorOne /> */}
      {/* <VideoPage />
      <ChooseOne /> */}

      {/* <AboutOne /> */}

      {/* <KnowledgeSharingPage /> */}

      {/* <IntroducingZeuZVideoPage /> */}
      {/* <FeaturesTwo /> */}

      {/* <FeaturesOne /> */}
      {/* <KeyFeaturesTwo /> */}
      <KeyFeaturesFour />

      <QaTestingTwo />
      {/* <KeyFeaturesThree /> */}

      {/* <QaTesting /> */}

      {/* <HomeSectionOne /> */}

      {/* <HomeSectionTwo /> */}

      {/* <ProjectOne /> */}
      {/* <Technology /> */}
      <ExistingToolsPage />

      <Platform />

      {/* <TechnologyPage /> */}
      {/* <HomeSectionFour /> */}

      {/* <SoftwareOne /> */}

      {/* <TailoredCollaborationPage /> */}

      {/* <WorkOne /> */}
      {/* <HomeThreeFeedback /> */}
      <HomeSectionThree />
      {/* <BlogOne /> */}
    </Layout>
  );
};

export default Home;
