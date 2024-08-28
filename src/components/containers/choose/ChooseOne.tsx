import React from "react";
import Image from "next/image";
import Link from "next/link";

import Partner3 from "public/img/support OS/web-1.png";
import Partner4 from "public/img/support OS/web-2.png";
import Partner5 from "public/img/support OS/web-3.png";
import Partner6 from "public/img/support OS/web-1.png";
import Partner7 from "public/img/support OS/web-4.png";
import Partner8 from "public/img/support OS/web-5.png";
import Partner9 from "public/img/support OS/web-6.png";
import Partner10 from "public/img/support OS/web-7.jpg";
import Partner11 from "public/img/support OS/web-8.png";
import Partner12 from "public/img/support OS/web-9.png";
import Partner13 from "public/img/support OS/web-10.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";

const ChooseOne = () => {
  return (
    <section className="choose__area pt-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="section__title-wrapper mb-40">
              <div className="section__title-3">
                Supporting both large and small organizations around the world:
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <div className="choouse__pagination-wrapper text-lg-end">
              <div className="choose__pagination"></div>
            </div>
          </div>
        </div>
        <div className="row " data-aos="fade-up" data-aos-delay="300">
          <div className="col-12">
            <div className="choose__line">
              <div className="swiper choose__active">
                <div className="swiper-wrapper">
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    loop={true}
                    roundLengths={true}
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      el: ".choose__pagination",
                      clickable: true,
                    }}
                    className="choose__active"
                    breakpoints={{
                      768: {
                        slidesPerView: 2,
                      },

                      1200: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="choose__features">
                          <div className="choose__features-icon">
                            <Image
                              style={{ height: "80px" }}
                              width={80}
                              height={100}
                              src={Partner3}
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="choose__features">
                          <div className="choose__features-icon">
                            <Image
                              style={{ height: "80px" }}
                              width={80}
                              height={100}
                              src={Partner4}
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="choose__features">
                          <div className="choose__features-icon">
                            <Image
                              style={{ height: "80px" }}
                              width={80}
                              height={100}
                              src={Partner5}
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="choose__features">
                          <div className="choose__features-icon">
                            <Image
                              style={{ height: "80px" }}
                              width={80}
                              height={100}
                              src={Partner6}
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="choose__features">
                          <div className="choose__features-icon">
                            <Image
                              style={{ height: "80px" }}
                              width={80}
                              height={100}
                              src={Partner7}
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="choose__features">
                          <div className="choose__features-icon">
                            <Image
                              style={{ height: "80x" }}
                              width={150}
                              height={100}
                              src={Partner8}
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="choose__features">
                          <div className="choose__features-icon">
                            <Image
                              style={{ height: "80px" }}
                              width={80}
                              height={100}
                              src={Partner9}
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="choose__features">
                          <div className="choose__features-icon">
                            <Image
                              style={{ height: "80px" }}
                              width={80}
                              height={100}
                              src={Partner10}
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="choose__features">
                          <div className="choose__features-icon">
                            <Image
                              style={{ height: "80px" }}
                              width={80}
                              height={100}
                              src={Partner11}
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="choose__features">
                          <div className="choose__features-icon">
                            <Image
                              style={{ height: "80px" }}
                              width={80}
                              height={100}
                              src={Partner12}
                              alt="image not found"
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="choose__features">
                          <div className="choose__features-icon">
                            <Image
                              style={{ height: "80px" }}
                              width={80}
                              height={100}
                              src={Partner13}
                              alt="image not found"
                            />
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
    </section>
  );
};

export default ChooseOne;
