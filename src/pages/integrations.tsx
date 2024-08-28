import GitHubPage from "@/components/containers/technology/GitHubPage";
import IntegrationsPage from "@/components/containers/technology/IntegrationsPage";
import JiraPage from "@/components/containers/technology/JiraPage";
import MicrosoftTeamsPage from "@/components/containers/technology/MicrosoftTeamsPage";
import OktaPage from "@/components/containers/technology/OktaPage";
import RobustAPIPage from "@/components/containers/technology/RobustAPIPage";
import SlackPage from "@/components/containers/technology/SlackPage";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/layout/banner/Banner";
import Head from "next/head";
import React from "react";

const integrations = () => {
  return (
    <Layout header={1} footer={1}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Integrations</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      {/* <Banner title="Integrations" /> */}
      {/* <IntegrationsPage /> */}
      <SlackPage />
      <MicrosoftTeamsPage />
      <JiraPage />
      <GitHubPage />
      <OktaPage />
      {/* <RobustAPIPage/> */}
    </Layout>
  );
};

export default integrations;
