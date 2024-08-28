import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import One from "public/img/shape/feedback-pattren.png";
import Four from "public/img/testimonial/1.png";
import Six from "public/img/testimonial/testimonial-img-01.svg";

SwiperCore.use([Autoplay, Navigation]);

const HomeThreeFeedback = () => {
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const swiperRef = useRef(null) as any;
  useEffect(() => {
    return () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.autoplay.stop();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setAutoplayEnabled(false);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    setAutoplayEnabled(true);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <section
      className="feedback__area pt-160 pb-60 "
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="feedback__pattren">
        <Image src={One} alt="image not found" />
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-xl-6 col-lg-6" style={{ marginBottom: "30px" }}>
            <div className="feedback__content-wrapper mb-60">
              <div className="section__title-wrapper allBannerText">
                <span className="section__subtitle feedbackSubText">
                  <span className="" style={{ color: "#16b99b" }}>
                    customer{" "}
                  </span>{" "}
                  feedback
                </span>
                <h2
                  className="section__title mb-30 feedbackTitleText"
                  style={{ color: "#399B8E" }}
                >
                  Testimonials
                </h2>
              </div>
              <p className="feedbackTextCss">
                ZeuZ is a trusted partner for many small and large enterprises,
                including Blackberry, Honda, KeyFree, Bunz.com, and many others.
              </p>
              <div className="feedback__navigation">
                <button className="feedback-3__button-prev">
                  <i className="fa-regular fa-arrow-left-long"></i>
                </button>
                <button className="feedback-3__button-next">
                  <i className="fa-regular fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6" style={{ marginTop: 40 }}>
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <Image
                  src={Four}
                  style={{ width: "100%", height: "100px" }}
                  width={500}
                  height={400}
                  alt="image not found"
                />
                <div
                  className="feedbacK__content-wrapper space"
                  style={{ border: "3px solid #d3eae6" }}
                >
                  <div
                    className="feedback__active"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Swiper
                      ref={swiperRef}
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      autoplay={
                        autoplayEnabled ? { delay: 5000 } : { delay: 0 }
                      }
                      navigation={{
                        nextEl: ".feedback-3__button-next",
                        prevEl: ".feedback-3__button-prev",
                      }}
                      className="feedback__active-three"
                    >
                      {/* Slides */}
                      <SwiperSlide>
                        <div className="feedbacK__content">
                          <div className="feedback__review-icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p
                            className="CustomerTextCss"
                            style={{ fontSize: "16px" }}
                          >
                            Zeuz has helped and is helping us transform our
                            testing capabilities from a fully manual set up to
                            an automated approach. This helped us improve the
                            quality of our software and safe valuable resource
                            time on other tasks. Zeuz also provides fully
                            trained testing experts at an additional cost that
                            is definitely worth it as the resource is highly
                            capable and provides great extra coverage to our
                            testing needs. The produce is very easy to use and
                            best of all it can do so much - it really is a
                            comprehensive tool that can cater to all possible
                            testing needs of a company.
                          </p>
                          <div className="feedback__meta">
                            <div className="feedback__meta-author">
                              <h5 className="FeedbackAuthorText">Zoheil K.</h5>
                              <span className="FeedbackAuthorTitleText">
                                QA & Release Manager Automotive
                              </span>
                            </div>
                            {/* <div className="feedback__meta-thumb">
                              <Image src={Five} alt="image not found" />
                            </div> */}
                          </div>
                        </div>
                      </SwiperSlide>
                      {/* 2 */}
                      <SwiperSlide>
                        <div className="feedbacK__content">
                          <div className="feedback__review-icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p
                            className="CustomerTextCss"
                            style={{ fontSize: "16px" }}
                          >
                            Our software products have web applications plus
                            native iOS and Android that all needs to talk
                            together. We struggled to find a tool that would
                            integrate across the entire stack until we found
                            zeuz. We’ve been using it for two years and found
                            their service to be very good, and when we evolved
                            our products and needed new functions they helped us
                            find them or worked with us to add them. Have and
                            would recommend trying zeuz if you want to harness
                            the power of automation in your QA team.
                          </p>
                          <div className="feedback__meta ">
                            <div className="d-flex align-items-center">
                              <div className="me-4">
                                <Image
                                  style={{ width: "70px", height: "70px" }}
                                  width={200}
                                  height={200}
                                  src={Six}
                                  alt="image not found"
                                />
                              </div>

                              <div className="feedback__meta-author">
                                <h5 className="FeedbackAuthorText">Adam K.</h5>
                                <span className="FeedbackAuthorTitleText">
                                  Head of Product & Development
                                </span>
                              </div>
                            </div>
                            {/* <div className="feedback__meta-thumb">
                              <Image src={Five} alt="image not found" />
                            </div> */}
                          </div>
                        </div>
                      </SwiperSlide>

                      {/* 3 */}
                      <SwiperSlide>
                        <div className="feedbacK__content">
                          <div className="feedback__review-icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p
                            className="CustomerTextCss"
                            style={{ fontSize: "16px" }}
                          >
                            Overall the experience was wonderful and would
                            highly recommend ZeuZ for all your testing
                            automation needs. Loved the solution flexibility to
                            be able to integrate various systems and create
                            scale to automate complex test cases scenarios. The
                            technical and leadership team their is very engaged
                            and committed to delivering business results through
                            automation. Excellent experience and partnership.
                          </p>
                          <div className="feedback__meta">
                            <div className="feedback__meta-author">
                              <h5>Ali M.</h5>
                              <span>VP Transformation</span>
                            </div>
                            {/* <div className="feedback__meta-thumb">
                              <Image src={Five} alt="image not found" />
                            </div> */}
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="feedbacK__content">
                          <div className="feedback__review-icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p
                            className="CustomerTextCss"
                            style={{ fontSize: "16px" }}
                          >
                            In order to automate simultaneous testing of
                            multiple mobile devices, cloud (REST API) along with
                            simulated bluetooth device as shown above, I am
                            convinced that it would have taken an enormous
                            amount of time, cost and resource in achieving
                            measurable results through major competing
                            frameworks like QTP, Renorax, or SmartBear. ZeuZs
                            expert consultancy and local presence truly made it
                            a no-brainer for us unlike any other outsourcing
                            arrangement we ever imagined or had experience of,
                            in the past.
                          </p>
                          <div className="feedback__meta">
                            <div className="feedback__meta-author">
                              <h5 className="FeedbackAuthorText">
                                CAMERON SMITH
                              </h5>
                              <span className="FeedbackAuthorTitleText">
                                CTO, Keyfree Technologies
                              </span>
                            </div>
                            {/* <div className="feedback__meta-thumb">
                              <Image src={Five} alt="image not found" />
                            </div> */}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="feedbacK__content">
                          <div className="feedback__review-icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p
                            className="CustomerTextCss"
                            style={{ fontSize: "16px" }}
                          >
                            I have never been able to create test cases as
                            easily and quickly until I used the ZeuZ platform. I
                            can track projects easily and oversee the work of
                            every tester on the team which makes the entire
                            project move along with less hiccups.
                          </p>
                          <div className="feedback__meta">
                            <div className="feedback__meta-author">
                              <h5 className="FeedbackAuthorText">Kanor K​</h5>
                              <span className="FeedbackAuthorTitleText">
                                FedPhoneLine Ltd
                              </span>
                            </div>
                            {/* <div className="feedback__meta-thumb">
                              <Image src={Five} alt="image not found" />
                            </div> */}
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="feedbacK__content">
                          <div className="feedback__review-icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p
                            className="CustomerTextCss"
                            style={{ fontSize: "16px" }}
                          >
                            ZeuZ will be extremely beneficial to those people
                            that are visually oriented. The entire system is
                            displayed in a way that takes out the complexity of
                            organizing a project and adds a clean, sleek layout.
                          </p>
                          <div className="feedback__meta">
                            <div className="feedback__meta-author">
                              <h5 className="FeedbackAuthorText">
                                Riasat Rakin
                              </h5>
                              <span className="FeedbackAuthorTitleText">
                                QA Analyst, AssetScience Inc.
                              </span>
                            </div>
                            {/* <div className="feedback__meta-thumb">
                              <Image src={Five} alt="image not found" />
                            </div> */}
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeThreeFeedback;
