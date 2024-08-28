import Image from "next/image";
import Link from "next/link";
import React from "react";
import One from "public/img/keyFeatures/keyFeatures-new-img-01.svg";
import Two from "public/img/keyFeatures/keyFeatures-new-img-02.svg";
import Three from "public/img/keyFeatures/keyFeatures-new-img-03.svg";
import Four from "public/img/keyFeatures/keyFeatures-new-img-04.svg";
import Five from "public/img/keyFeatures/keyFeatures-new-img-05.svg";
import Six from "public/img/keyFeatures/keyFeatures-new-img-06.svg";

const KeyFeaturesFour = () => {
  return (
    <section
      className="feedback__area pt-60 pb-60"
      style={{ backgroundColor: "#FDFDF5" }}
    >
      <div className="container" style={{ backgroundColor: "#FDFDF5" }}>
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section__title-wrapper text-center pt-30">
              <div className="section__subtitle-3">
                <span className="keyFeaturesSubtitle">OUR FEATURES</span>
              </div>
              <div className="section__title-3">
                <h2 className="keyFeaturesTitle">Key Features of ZeuZ</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ margin: "40px 0" }}>
          <div className="row">
            {/* First course item */}
            <div className="keyFeaturesMain col-xl-4 col-lg-4">
              <Link href="/aiPoweredDetails">
                <Image
                  className="keyFeaturesImg"
                  src={One}
                  width={500}
                  height={500}
                  alt="image not found"
                />

                <div className="keyFeatures_Content">
                  <div className="keyFeatures_link">
                    <h4 className="keyFeaturesH4">AI-Powered</h4>
                    <p className="keyFeaturesText">
                      Leverage the latest in AI technology for intelligent and
                      adaptive testing.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="keyFeaturesMain col-xl-4 col-lg-4">
              <Link href="/noCodeDetails">
                <Image
                  className="keyFeaturesImg"
                  src={Two}
                  width={500}
                  height={500}
                  alt="image not found"
                />

                <div className="keyFeatures_Content">
                  <div className="keyFeatures_link">
                    <h4 className="keyFeaturesH4">No-Code</h4>
                    <p className="keyFeaturesText">
                      Streamline automation with a user-friendly interface that
                      is accessible to all skill levels.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="keyFeaturesMain col-xl-4 col-lg-4">
              <Link href="/crossPlatformDetails">
                <Image
                  className="keyFeaturesImg"
                  src={Three}
                  width={500}
                  height={500}
                  alt="image not found"
                />

                <div className="keyFeatures_Content">
                  <div className="keyFeatures_link">
                    <h4 className="keyFeaturesH4">Cross-Platform</h4>
                    <p className="keyFeaturesText">
                      Easily automate testing on a wide variety of platforms and
                      gadgets.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="keyFeaturesMain col-xl-4 col-lg-4">
              <Link href="/builtInProjectManagementDetails">
                <Image
                  className="keyFeaturesImg"
                  src={Four}
                  width={500}
                  height={500}
                  alt="image not found"
                />

                <div className="keyFeatures_Content">
                  <div className="keyFeatures_link">
                    <h4 className="keyFeaturesH4">
                      Built-in Project Management
                    </h4>
                    <p className="keyFeaturesText">
                      Easily automate testing on a wide variety of platforms and
                      gadgets.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="keyFeaturesMain col-xl-4 col-lg-4">
              <Link href="/builtInSchedulesDetails">
                <Image
                  className="keyFeaturesImg"
                  src={Five}
                  width={500}
                  height={500}
                  alt="image not found"
                />

                <div className="keyFeatures_Content">
                  <div className="keyFeatures_link">
                    <h4 className="keyFeaturesH4">CI/CD Integration</h4>
                    <p className="keyFeaturesText">
                      Easily automate testing on a wide variety of platforms and
                      gadgets.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="keyFeaturesMain col-xl-4 col-lg-4">
              <Link href="/saasDetails">
                <Image
                  className="keyFeaturesImg"
                  src={Six}
                  width={500}
                  height={500}
                  alt="image not found"
                />

                <div className="keyFeatures_Content">
                  <div className="keyFeatures_link">
                    <h4 className="keyFeaturesH4">SAAS / On-Prem Solution</h4>
                    <p className="keyFeaturesText">
                      Easily automate testing on a wide variety of platforms and
                      gadgets.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesFour;
