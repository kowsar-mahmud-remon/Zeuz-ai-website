import React from "react";
import Image from "next/image";
import One from "../../../assets/2023_06_25_0rj_Kleki.png";
import Two from "../../../assets/2023_06_25_0rj_Kleki.png";
import Three from "../../../assets/2023_06_25_0rj_Kleki.png";
import Four from "../../../assets/2023_06_25_0rj_Kleki.png";
import Five from "../../../assets/2023_06_25_0rj_Kleki.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

const SupportingOrganizations = () => {
  return (
    <div className="brand__area grey-bg-2 pt-120 pb-120">
      <div className="container">
        <div className="brand__title">
          <span>
            Supporting both large and small organizations around the world:
          </span>
        </div>
        <div
          className="row justify-content-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-12">
            <div className="swiper brand__active">
              <div className="swiper-wer">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={false}
                  loop={true}
                  navigation={false}
                  className="swiper-wrapper"
                  modules={[Autoplay]}
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    400: {
                      slidesPerView: 2,
                    },
                    600: {
                      slidesPerView: 3,
                    },

                    1024: {
                      slidesPerView: 4,
                    },

                    1500: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={One}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={Two}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={Three}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={Four}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={Five}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={One}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={Two}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={100}
                          src={Three}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={Four}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={Five}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={One}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={Two}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={Three}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={Four}
                          alt="image not found"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-slide brand__line">
                      <div className="singel__brand">
                        <Image
                          width={200}
                          height={200}
                          src={Five}
                          alt="image not found"
                        />
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
  );
};

export default SupportingOrganizations;
