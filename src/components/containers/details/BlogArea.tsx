import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/img/blog/blog-author-1.png";
import BlogOne from "public/img/blog/1/blog-01.jpg";
import Two from "public/img/blog/1/blog-02.jpg";
import Three from "public/img/blog/1/blog-03.jpg";
import Four from "public/img/blog/1/blog-04.jpg";
import Five from "public/img/blog/1/blog-05.jpg";
import Six from "public/img/blog/1/blog-06.jpg";

const BlogArea = () => {
  return (
    <div
      className="blog__area pt-20 pb-20"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-xl-6 col-lg-6">
            <div className="blog__content-wrapper mb-30">
              <div className="blog__content-item">
                <div className="blog__content">
                  <Link href="/blog-details">
                    <h3>New survey reveals test automation trends</h3>
                    <p className="CustomerTextCss">
                      Key findings from the automation report include: Only 5%
                      of survey respondents said they currently carry out 0:100
                      manual:automation testing. The majority (66%) are either
                    </p>
                    <button className="mb-3" style={{ color: "#16b99b" }}>
                      Read More {">"}
                    </button>
                  </Link>
                </div>
                <div className="blog__meta">
                  <div className="blog__meta-thumb">
                    <Image src={One} alt="image not found" />
                  </div>
                  <div className="blog__meta-author">
                    <span>Aothor</span>
                    <span>24th March, 2022</span>
                  </div>
                </div>
              </div>
              <div className="blog__content-item">
                <div className="blog__content">
                  <Link href="/blog-details">
                    <h3>Scriptless test automation</h3>
                    <p className="CustomerTextCss">
                      The requirement for test automation has never been
                      greater, with many organizations moving towards Continuous
                      Delivery and DevOps regimes. With these rapid Build/Deploy
                      cycles, test automation has
                    </p>
                    <button className="mb-3" style={{ color: "#16b99b" }}>
                      Read More {">"}
                    </button>
                  </Link>
                </div>
                <div className="blog__meta">
                  <div className="blog__meta-thumb">
                    <Image src={One} alt="image not found" />
                  </div>
                  <div className="blog__meta-author">
                    <span>Aothor</span>
                    <span>24th March, 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="blog__thumb-wrapper mb-30">
              <div className="blog__thumb w-img">
                <Image src={BlogOne} alt="image not found" />
              </div>
              <div className="blog__thumb w-img">
                <Image src={Two} alt="image not found" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="blog__thumb-wrapper mb-30">
              <div className="blog__thumb w-img">
                <Image src={Three} alt="image not found" />
              </div>
              <div className="blog__thumb w-img">
                <Image src={Four} alt="image not found" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="blog__content-wrapper mb-30">
              <div className="blog__content-item">
                <div className="blog__content">
                  <Link href="/blog-details">
                    <h3>How do I approach agile testing?</h3>
                    <p className="CustomerTextCss">
                      “Our QA is delaying deployment.” I am sure you’ve heard
                      this before. If you did, then your organization is not
                      testing in an agile way.
                    </p>
                    <button className="mb-3" style={{ color: "#16b99b" }}>
                      Read More {">"}
                    </button>
                  </Link>
                </div>
                <div className="blog__meta">
                  <div className="blog__meta-thumb">
                    <Image src={One} alt="image not found" />
                  </div>
                  <div className="blog__meta-author">
                    <span>Aothor</span>
                    <span>24th March, 2022</span>
                  </div>
                </div>
              </div>
              <div className="blog__content-item">
                <div className="blog__content">
                  <Link href="/blog-details">
                    <h3>
                      How can ZeuZ test automation framework solve regression
                      testing challenges?
                    </h3>
                    <p className="CustomerTextCss">
                      In general terms, we think of regression testing as:
                      -retesting of a recently modified software to ensure that
                      any bugs that have been fixed are
                    </p>
                    <button className="mb-3" style={{ color: "#16b99b" }}>
                      Read More {">"}
                    </button>
                  </Link>
                </div>
                <div className="blog__meta">
                  <div className="blog__meta-thumb">
                    <Image src={One} alt="image not found" />
                  </div>
                  <div className="blog__meta-author">
                    <span>Aothor</span>
                    <span>24th March, 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="blog__content-wrapper mb-30">
              <div className="blog__content-item">
                <div className="blog__content">
                  <Link href="/blog-details">
                    <h3>Scriptless smoke test automation</h3>
                    <p className="CustomerTextCss">
                      Smoke tests with scriptless test automation? There are
                      many types of tests and to achieve a certain objective,
                      they each have their own different goals
                    </p>
                    <button className="mb-3" style={{ color: "#16b99b" }}>
                      Read More {">"}
                    </button>
                  </Link>
                </div>
                <div className="blog__meta">
                  <div className="blog__meta-thumb">
                    <Image src={One} alt="image not found" />
                  </div>
                  <div className="blog__meta-author">
                    <span>Aothor</span>
                    <span>24th March, 2022</span>
                  </div>
                </div>
              </div>
              <div className="blog__content-item">
                <div className="blog__content">
                  <Link href="/blog-details">
                    <h3>Test Faster, Fail Faster, Improve Faster!</h3>
                    <p className="CustomerTextCss">
                      Test Automation is an important step of Continuous
                      Deployment. As noted in the published survey highlighting
                      test automation trends, automation reduces bug fix costs
                      by
                    </p>
                    <button className="mb-3" style={{ color: "#16b99b" }}>
                      Read More {">"}
                    </button>
                  </Link>
                </div>
                <div className="blog__meta">
                  <div className="blog__meta-thumb">
                    <Image src={One} alt="image not found" />
                  </div>
                  <div className="blog__meta-author">
                    <span>Aothor</span>
                    <span>24th March, 2022</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="blog__thumb-wrapper mb-30">
              <div className="blog__thumb w-img">
                <Image src={Five} alt="image not found" />
              </div>
              <div className="blog__thumb w-img">
                <Image src={Six} alt="image not found" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArea;
