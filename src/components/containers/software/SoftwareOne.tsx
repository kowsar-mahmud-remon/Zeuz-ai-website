import React from "react";
import Image from "next/image";
import Link from "next/link";
import One from "public/img/development/development03.png";

const SoftwareOne = () => {
  return (
    <div
      className="development__area pt-120 pb-60"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11">
            <div className="section__title-wrapper text-center mb-70">
              <div className="section__subtitle-3">
                <span>BUILD YOUR INNOVATIONS DIGITAL FUTURE</span>
              </div>
              <div className="section__title-3">
                <h2 style={{ fontSize: 30, color: "#399B8E" }}>
                  Streamlining QA for better performance
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row align-items-center "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="col-xl-6 col-lg-6">
            <div className="development__thumb mb-60 ">
              <Image
                src={One}
                className="StreamliningImg"
                alt="image not found"
                // style={{ width: "80%", height: "500px" }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="development__content-wrapper mb-60">
              <p className="CustomerTextCss">
                Explore ZeuZ for free, with seamless migration and live support,
                tailored for businesses of any size. Start automating now with
                no restrictions.
              </p>
              <div className="development__features-wrap">
                <div className="development__features-item">
                  <div className="development__features-icon">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="development__features-text">
                    Enhanced efficiency and reliability with our SQA services.
                  </div>
                </div>
                <div className="development__features-item">
                  <div className="development__features-icon">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <div className="development__features-text">
                    Quality, reliability, and satisfaction guaranteed.
                  </div>
                </div>
              </div>
              <div className="development__btn">
                <Link href="/trial">START 30 DAYS FREE TRAIL</Link>
              </div>
              <div className="development__bottom-text">
                <p className="CustomerTextCss">
                  Free trial, no limits. Flexible plans for all business sizes.
                  Live support, seamless test case migration. Start automating
                  effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareOne;
