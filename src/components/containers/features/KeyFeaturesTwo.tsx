import Link from "next/link";
import React from "react";

const KeyFeaturesTwo = () => {
  return (
    <section
      className="feedback__area pt-60 pb-60"
      style={{ backgroundColor: "#FDFDF5" }}
    >
      <div className="container" style={{ backgroundColor: "#FDFDF5" }}>
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section__title-wrapper text-center mb-40 pt-30">
              <div className="section__subtitle-3">
                <span style={{ fontSize: "17px" }}>OUR FEATURES</span>
              </div>
              <div className="section__title-3">
                <h2 style={{ fontSize: 36, color: "#399B8E" }}>
                  Key Features of ZeuZ
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ margin: "40px 0" }}>
          <div className="row">
            {/* First course item */}
            <div className="ag-courses_item col-xl-4 col-lg-4">
              <Link href="/aiPoweredDetails">
                <div className="ag-courses-item_link KeyFeaturesBgImg01">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">AI-Powered</div>
                  <div className="ag-courses-item_date-box">
                    Leverage the latest in AI technology for intelligent and
                    adaptive testing.
                  </div>
                </div>
              </Link>
            </div>

            <div className="ag-courses_item col-xl-4 col-lg-4">
              <Link href="/noCodeDetails">
                <div className="ag-courses-item_link KeyFeaturesBgImg02">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">No-Code </div>

                  <div className="ag-courses-item_date-box">
                    Streamline automation with a user-friendly, no-code
                    interface that is accessible to all skill levels.
                  </div>
                </div>
              </Link>
            </div>

            <div className="ag-courses_item col-xl-4 col-lg-4">
              <Link href="/crossPlatformDetails">
                <div className="ag-courses-item_link KeyFeaturesBgImg03">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">Cross-Platform</div>

                  <div className="ag-courses-item_date-box">
                    Easily automate testing on a wide variety of platforms and
                    gadgets.
                  </div>
                </div>
              </Link>
            </div>

            <div className="ag-courses_item col-xl-4 col-lg-4">
              <Link href="/builtInProjectManagementDetails">
                <div className="ag-courses-item_link KeyFeaturesBgImg04">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Built-in Project Management
                  </div>

                  <div className="ag-courses-item_date-box">
                    Easily automate testing on a wide variety of platforms and
                    gadgets.
                  </div>
                </div>
              </Link>
            </div>

            <div className="ag-courses_item col-xl-4 col-lg-4">
              <Link href="/builtInSchedulesDetails">
                <div className="ag-courses-item_link KeyFeaturesBgImg05">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Built-in Scheduler,
                    <br />
                    CI/CD Integration
                  </div>

                  <div className="ag-courses-item_date-box">
                    Easily automate testing on a wide variety of platforms and
                    gadgets.
                  </div>
                </div>
              </Link>
            </div>

            <div className="ag-courses_item col-xl-4 col-lg-4">
              <Link href="/saasDetails">
                <div className="ag-courses-item_link KeyFeaturesBgImg06">
                  <div className="ag-courses-item_bg"></div>

                  <div
                    className="ag-courses-item_title"
                    style={{ paddingBottom: "24px" }}
                  >
                    SAAS / On-Prem Solution
                  </div>

                  <div className="ag-courses-item_date-box">
                    Easily automate testing on a wide variety of platforms and
                    gadgets.
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

export default KeyFeaturesTwo;
