import React, { Suspense, useEffect } from "react";
import "../styles/fonts.css";
import "../styles/globals.css";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

import "public/app/css/fontawesome-pro.css";
import "@/styles/index-four.scss";
import "@/styles/main.scss";
import { Toaster } from "react-hot-toast";

import AOS from "aos";
import "aos/dist/aos.css";

import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Suspense>
      <Toaster />
      <Component {...pageProps} />
    </Suspense>
  );
}
