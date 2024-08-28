import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

const Error = () => {
  return (
    <Layout header={5} footer={2}>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>ZeuZ | Error</title>
        <meta name="keywords" content="ZeuZ-ai" />
        <meta name="description" content="ZeuZ-ai" />
      </Head>
      <div className="pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 text-center">
              <h2 className="mb-35">Page Not Found</h2>
              <Link
                href="/"
                className="border-btn text-dark bg-warning border border-dark text-center ms-3 borderc-btn d-inline-flex"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
