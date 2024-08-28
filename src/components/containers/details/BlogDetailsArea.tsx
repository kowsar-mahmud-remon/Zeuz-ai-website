import React from "react";
import Image from "next/image";
import Link from "next/link";

import Arrow from "public/img/svg/arrow.svg";

import One from "public/img/blog/1/blog-01.jpg";
import Two from "public/img/blog/blog-author-1.png";
import Three from "public/img/svg/blockquote.svg";

import Four from "public/img/blog/postbox-author.png";

const BlogDetailsArea = () => {
  return (
    <section
      className="postbox__area pt-120 pb-60"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container">
        <div
          className="row justify-content-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-xl-10 col-lg-12">
            <div className="postbox__wrapper mb-60">
              <div className="blog__thumb w-img mb-45">
                <Image src={One} alt="image not found" />
              </div>
              <div className="blog__meta mb-45">
                <div className="blog__meta-thumb">
                  <Image src={Two} alt="image not found" />
                </div>
                <div className="blog__meta-author">
                  <span>Aothor</span>
                  <span>24th March, 2022</span>
                </div>
              </div>
              <div className="postbox__text mb-35">
                <h3 className="postbox__title">
                  New survey reveals test automation trends
                </h3>
                <p>Automated testing, manual testing / Leave a Comment</p>
              </div>
              <div className="postbox__text">
                <h3 className="postbox__title">
                  Key findings from the automation report include:
                </h3>
                <p className="mt-4 CustomerTextCss">
                  Only 5% of survey respondents said they currently carry out
                  0:100 manual:automation testing. The majority (66%) are either
                  at 75:25 or 50:50, and 9% said they are only doing manual
                  testing.
                </p>
                <p className="mt-4 CustomerTextCss">
                  When asked what they’d like to achieve in the next five years,
                  the majority (73%) said they’d like to see 50:50 to 25:75
                  manual:automation testing. 14% said they’d like to have no
                  manual testing at all.
                </p>
                <p className="mt-4 CustomerTextCss">
                  The majority of respondents reported seeing a return on their
                  test automation investment immediately (24%) or within the
                  first 6 months (24%). The remainder saw a result within 6‑12
                  months (28%) or after one year (15%). Only 9% reported never
                  getting an ROI.
                </p>
                <p className="mt-4 CustomerTextCss">
                  The majority of respondents (94%) said they use test execution
                  tools and automation to support testing efforts. Other popular
                  answers include generation of test data (57%) and deployment
                  of environments (49%).
                </p>
                <p className="mt-4 CustomerTextCss">
                  The survey respondents reported that the primary users of
                  their testing tools are test automation specialists (55%) and
                  testers (27%). Developers make up just 6%. Other responses
                  included offshore contractors software engineers, and product
                  owners.
                </p>
                <p className="mt-4 CustomerTextCss">
                  When asked what automation currently exists in organizations,
                  there were a wide variety of responses. UI (82%) is the most
                  popular; APIs (62%), cross-browser/platform (55%), test
                  data/environment (55%), performance (53%) and integration
                  (47%) are all very even. Interestingly, automation in the
                  ecosystem scored the lowest at just 6%.
                </p>
                <p className="mt-4 CustomerTextCss">
                  Shameless plug, but it is important to note that our own ZeuZ
                  automation testing platform supports all of the trends,
                  including UI testing, APIs, cross-platform, performance/stress
                  testing, and can be integrated with your continuous
                  integration and delivery workflow.
                </p>
              </div>
            </div>
            <div className="postbox-wrapper-2 mb-60">
              <div className="blog__nav-items">
                <div className="single__nav">
                  <div className="single__nav-btn">
                    <Link href="/">
                      <i className="fa-light fa-arrow-left-long"></i>
                    </Link>
                  </div>
                  <div className="blog-content">
                    <span>Previous Post</span>
                  </div>
                </div>
                <div className="dot-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                  >
                    <g
                      id="Group_5129"
                      data-name="Group 5129"
                      transform="translate(-633.197 -4179.197)"
                    >
                      <rect
                        id="Rectangle_971"
                        data-name="Rectangle 971"
                        width="15"
                        height="15"
                        transform="translate(633.197 4179.197)"
                        fill="#2f2f2f"
                      />
                      <rect
                        id="Rectangle_974"
                        data-name="Rectangle 974"
                        width="15"
                        height="15"
                        transform="translate(633.197 4197.197)"
                        fill="#2f2f2f"
                      />
                      <rect
                        id="Rectangle_972"
                        data-name="Rectangle 972"
                        width="15"
                        height="15"
                        transform="translate(651.197 4179.197)"
                        fill="#2f2f2f"
                      />
                      <rect
                        id="Rectangle_973"
                        data-name="Rectangle 973"
                        width="15"
                        height="15"
                        transform="translate(651.197 4197.197)"
                        fill="#2f2f2f"
                      />
                    </g>
                  </svg>
                </div>
                <div className="single__nav">
                  <div className="blog-content">
                    <span>Next Post</span>
                  </div>
                  <div className="single__nav-btn">
                    <Link href="/">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="postbox__comment-form pt-50">
                <h3 className="postbox__comment-form-title">Leave A Comment</h3>
                <form action="#">
                  <div className="row">
                    <div className="col-xxl-12">
                      <div className="postbox__comment-input mb-30">
                        <textarea placeholder="Start type..."></textarea>
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="postbox__comment-input mb-30">
                        <input type="text" placeholder="your name" />
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="postbox__comment-input mb-30">
                        <input type="email" placeholder="your email" />
                      </div>
                    </div>
                    <div className="col-xxl-12">
                      <div className="postbox__comment-btn mt-5">
                        <button className="solid__btn" type="submit">
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;
