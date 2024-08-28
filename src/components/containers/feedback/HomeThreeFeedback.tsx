import React from "react";
import Image from "next/image";

import One from "public/img/shape/feedback-pattren.png";
import Two from "public/img/feedback/review-1.png";
import Three from "public/img/feedback/review-2.png";
import Four from "public/img/feedback/customer-service-automation-2-1-1024x512.png";
import Five from "public/img/feedback/author-1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

const HomeThreeFeedback = () => {
  return (
    <section className="feedback__area pt-120 pb-60 bg-white">
      <div className="feedback__pattren">
        <Image src={One} alt="image not found" />
      </div>
      <div className="container">
        <div className="row " data-aos="fade-up" data-aos-delay="300">
          <div className="col-xl-6 col-lg-6">
            <div className="feedback__content-wrapper mb-60">
              <div className="section__title-wrapper">
                <span className="section__subtitle">
                  <span>customer </span> feedback
                </span>
                <h2 className="section__title mb-30">
                  Our <span className="down__mark-line">customers</span>
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
                      <Image src={Two} alt="Image" />
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
                      <Image src={Three} alt="Image" />
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
                <Image
                  src={Four}
                  style={{ width: "100%", height: "400px" }}
                  width={500}
                  height={400}
                  alt="image not found"
                />
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
                            I am incredibly impressed with the professional
                            services provided by this team. Their expertise in
                            test automation, combined with a white-glove
                            approach, made our implementation seamless. The ZeuZ
                            Test Automation Developers were a game-changer for
                            us, offering a turnkey solution that significantly
                            boosted our automation velocity. The dedicated
                            Discord channel and priority support ensured quick
                            resolution to any queries. Highly recommend their
                            services for anyone seeking a comprehensive and
                            efficient test automation solution.
                          </p>
                          <div className="feedback__meta">
                            <div className="feedback__meta-author">
                              <h5>Neal Kapur</h5>
                              <span>Head of Marketing at Glossy</span>
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
                            Our experience with the ZeuZ team has been
                            exceptional. The Go-Live Implementation and Training
                            Bootcamp accelerated our automation journey, and the
                            support received through the dedicated Discord
                            channel was invaluable. The ZeuZ Test Automation
                            Developers integrated seamlessly with our QA team,
                            providing a cost-effective solution with minimal
                            recruitment headaches. The monthly health checks and
                            comprehensive reporting have enhanced our testing
                            processes, and we appreciate their commitment to
                            excellence.
                          </p>
                          <div className="feedback__meta">
                            <div className="feedback__meta-author">
                              <h5>Neal Kapur</h5>
                              <span>Head of Marketing at Glossy</span>
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
                            Choosing ZeuZ for our test automation needs was a
                            game-changer. The variety of professional services
                            offered, from test case data migration to CI/CD
                            integrations, covered every aspect of our
                            requirements. The ZeuZ Test Automation Developers
                            not only automated our tests efficiently but also
                            provided continuous support and training. Their
                            proactive approach to scalability, optimization, and
                            security ensured our automation infrastructure was
                            robust. This team goes above and beyond, and we are
                            delighted with the results.
                          </p>
                          <div className="feedback__meta">
                            <div className="feedback__meta-author">
                              <h5>Neal Kapur</h5>
                              <span>Head of Marketing at Glossy</span>
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

export default HomeThreeFeedback;
