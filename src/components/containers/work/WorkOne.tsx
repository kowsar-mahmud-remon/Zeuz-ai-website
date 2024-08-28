import React from "react";
import Image from "next/image";
import Link from "next/link";

import one from "public/img/work/1.svg";
import two from "public/img/work/2.svg";
import three from "public/img/work/3.svg";

const WorkOne = () => {
  return (
    <section
      className="work__area pt-120 pb-60"
      style={{ backgroundColor: "#FDFDF9" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__title-wrapper text-center mb-70">
              {/* <div className="section__subtitle-3">
                <span>HOW DOES IT WORKS</span>
              </div> */}
              <div className="section__title-3 mb-20 workflowCss">
                <h2 style={{ color: "#399B8E" }}> Efficient Workflow Setup</h2>
              </div>
              <p>Streamline Your Workflow with Simple Installation Steps</p>
            </div>
          </div>
        </div>
        <div className="row " data-aos="fade-up" data-aos-delay="300">
          <div className="work__item-grid">
            <div className="work__item mb-60">
              <div className="work__flow-shape"></div>
              <div className="work__thumb">
                <Image src={one} alt="image not found" />
              </div>
              <div className="work__content">
                <h3>
                  <Link href="https://automationsolutionz.github.io/docs/ZeuZ-node-setup">
                    ZeuZ Server
                  </Link>
                </h3>
                <p className="CustomerTextCss">
                  The web app for creating and managing test cases, doubling as
                  a comprehensive Project Management suite for SDLC
                </p>
              </div>
            </div>
            <div className="work__item mb-60">
              <div className="work__flow-shape"></div>
              <div className="work__thumb">
                <Image src={two} alt="image not found" />
              </div>
              <div className="work__content">
                <h3>
                  <Link href="https://automationsolutionz.github.io/docs/ZeuZ-server">
                    ZeuZ Node Setup
                  </Link>
                </h3>
                <p className="CustomerTextCss">
                  This guide simplifies ZeuZ Node setup, automating most steps
                  for efficiency, yet acknowledging potential variations in
                  machine configurations, notably PATH variables
                </p>
              </div>
            </div>
            <div className="work__item mb-60">
              <div className="work__thumb">
                <Image src={three} alt="image not found" />
              </div>
              <div className="work__content">
                <h3>
                  <Link href="https://automationsolutionz.github.io/docs/how-tos/how-to-debug-test-cases">
                    How to Debug Test Cases
                  </Link>
                </h3>
                <p className="CustomerTextCss">
                  Automated test case debugging identifies and removes errors,
                  ensuring top-quality software by minimizing defects and
                  creating clean code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkOne;
