import React from "react";
import Image from "next/image";

import One from "public/img/shape/feedback-pattren.png";
import Two from "public/img/partner/partner-2.png";
import Three from "public/img/partner/partner-3.png";
import Four from "public/img/testimonial/1.png";
import Five from "public/img/feedback/author-1.png";
import Six from "public/img/testimonial/corporate-testimonial-videos.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const HomeSectionThree1 = () => {
  return (
    <section
      className="feedback__area pt-120 pb-60"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="feedback__pattren">
        <Image src={One} alt="image not found" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="feedback__content-wrapper mb-60">
              <div className="section__title-wrapper allBannerText">
                <span className="section__subtitle">
                  <span style={{ color: "#16b99b" }}>customer </span> feedback
                </span>
                <h2
                  className="section__title mb-30"
                  style={{ color: "#399B8E" }}
                >
                  Our <span className="down__mark-line">customers </span>
                  feedback about us
                </h2>
              </div>
              <p>
                ZeuZ is a trusted partner for many small and large enterprises,
                including Blackberry, Honda, KeyFree, Bunz.com, and many others.
              </p>
              <div className="feedback__review-wrapper mb-60">
                <h6>Find more reviews on</h6>
                <div className="feedback__review-inner">
                  <div className="feedback__review-item">
                    <div className="eedback__review-thumb">
                      <Image
                        style={{ width: "100%", height: "155px" }}
                        src={Two}
                        alt="Image"
                      />
                    </div>
                    <div className="feedback__review-icon">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="feedback__review-text">
                      <h6>4.7</h6>
                      <span>(327 Reviews)</span>
                    </div>
                  </div>
                  <div className="feedback__review-item">
                    <div className="eedback__review-thumb">
                      <Image
                        style={{ width: "100%", height: "150px" }}
                        src={Three}
                        alt="Image"
                      />
                    </div>
                    <div className="feedback__review-icon">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="feedback__review-text">
                      <h6>4.5</h6>
                      <span>(327 Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
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
          <div className="col-xl-6 col-lg-6">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className="d-flex justify-content-center">
                  <Image
                    src={Six}
                    style={{ width: "100%", height: "500px" }}
                    width={500}
                    height={400}
                    alt="image not found"
                  />
                </div>
                <div className="feedbacK__content-wrapper space">
                  <div className="feedback__active">
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={30}
                      loop={true}
                      roundLengths={true}
                      modules={[Autoplay, Navigation]}
                      autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                      }}
                      navigation={{
                        nextEl: ".feedback-3__button-next",
                        prevEl: ".feedback-3__button-prev",
                      }}
                      className="feedback__active-three"
                    >
                      <SwiperSlide>
                        <div className="feedbacK__content">
                          <div className="feedback__review-icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                          <p style={{ fontSize: "16px" }}>
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
                              <h5>CAMERON SMITH</h5>
                              <span>CTO, Keyfree Technologies</span>
                            </div>
                            <div className="feedback__meta-thumb">
                              <Image src={Five} alt="image not found" />
                            </div>
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
                          <p style={{ fontSize: "16px" }}>
                            ZeuZ will be extremely beneficial to those people
                            that are visually oriented. The entire system is
                            displayed in a way that takes out the complexity of
                            organizing a project and adds a clean, sleek layout.
                          </p>
                          <div className="feedback__meta">
                            <div className="feedback__meta-author">
                              <h5>Riasat Rakin</h5>
                              <span>QA Analyst, AssetScience Inc.</span>
                            </div>
                            <div className="feedback__meta-thumb">
                              <Image src={Five} alt="image not found" />
                            </div>
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
                          <p style={{ fontSize: "16px" }}>
                            I have never been able to create test cases as
                            easily and quickly until I used the ZeuZ platform. I
                            can track projects easily and oversee the work of
                            every tester on the team which makes the entire
                            project move along with less hiccups.
                          </p>
                          <div className="feedback__meta">
                            <div className="feedback__meta-author">
                              <h5>Kanor K​</h5>
                              <span>FedPhoneLine Ltd</span>
                            </div>
                            <div className="feedback__meta-thumb">
                              <Image src={Five} alt="image not found" />
                            </div>
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

export default HomeSectionThree1;
