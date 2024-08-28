// components/KeyFeaturesThree.tsx

import React from "react";
import styles from "./KeyFeaturesThree.module.css";
import Image from "next/image";
import One from "public/img/features/KeyFeaturesThree01.avif";
import Two from "public/img/QaTesting/QaTestingDetailsImg2.svg";

const KeyFeaturesThree = () => {
  return (
    <div className="container">
      <div
        className="row"
        style={{ paddingTop: "30px", paddingBottom: "40px" }}
      >
        <div className="col-lg-4 mb-4">
          <div className={styles.cardHover}>
            <div className={styles.cardHoverContent}>
              <h3 className={styles.cardHoverTitle}>AI-Powered Automation</h3>
              <p className={styles.cardHoverText}>
                AI-Powered Automation Leverage the latest in AI technology for
                intelligent and adaptive testing.
              </p>
              <a href="#" className={styles.cardHoverLink}>
                <span>Learn How</span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
            <div className={styles.cardHoverExtra}>
              <h4>
                Learn <span>now</span> and get <span>40%</span> discount!
              </h4>
            </div>
            <Image
              className={styles.imgCss}
              src={Two}
              alt=""
              style={{ backgroundColor: "#D3D3D3" }}
            />
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className={styles.cardHover}>
            <div className={styles.cardHoverContent}>
              <h3 className={styles.cardHoverTitle}>No-Code Platform </h3>
              <p className={styles.cardHoverText}>
                Streamline automation with a user-friendly, no-code interface
                that is accessible to all skill levels.
              </p>
              <a href="#" className={styles.cardHoverLink}>
                <span>Learn How</span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
            <div className={styles.cardHoverExtra}>
              <h4>
                Learn <span>now</span> and get <span>40%</span> discount!
              </h4>
            </div>
            <Image
              className={styles.imgCss}
              src={Two}
              alt=""
              style={{ backgroundColor: "#D3D3D3" }}
            />
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className={styles.cardHover}>
            <div className={styles.cardHoverContent}>
              <h3 className={styles.cardHoverTitle}>Cross-Platform Testing </h3>
              <p className={styles.cardHoverText}>
                Easily automate testing on a wide variety of platforms and
                gadgets.
              </p>
              <a href="#" className={styles.cardHoverLink}>
                <span>Learn How</span>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
            <div className={styles.cardHoverExtra}>
              <h4>
                Learn <span>now</span> and get <span>40%</span> discount!
              </h4>
            </div>
            <Image
              className={styles.imgCss}
              src={Two}
              alt=""
              style={{ backgroundColor: "#D3D3D3" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeaturesThree;
