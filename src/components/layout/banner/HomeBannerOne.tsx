import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/img/shape/hero-shape-9.png";
import Two from "public/img/shape/hero-shape-10.png";
import Three from "public/img/shape/hero-shape-11.png";
import Four1 from "public/img/hero/1234.jpg";
// import Four1 from "public/img/hero/2.png";

import Four from "public/img/svg-ai/Group 4.svg";

// import Four from "public/img/hero/hero2.png";

const HomeBannerOne = () => {
  return (
    <section
      className="hero__area-3 hero__hight-3 d-flex align-items-center p-relative"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="hero__shape-9">
        <Image src={One} alt="Image" />
      </div>
      <div className="hero__shape-10">
        <Image src={Two} alt="Image" />
      </div>
      <div className="hero__shape-11">
        <Image src={Three} alt="Image" />
      </div>
      <div className="hero__wrapper mt-30 m-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="hero__content-wrapper-3">
                <div className="hero__filter">
                  <form action="#">
                    <div
                      className="hero__filter-input "
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <input
                        type="text"
                        placeholder="Enter Your Email Address"
                      />
                      <button
                        type="submit"
                        style={{ backgroundColor: "#b25291" }}
                      >
                        GET DEMO NOW
                      </button>
                    </div>
                  </form>
                </div>
                <div className="hero__content-3 ">
                  <h2
                    className=""
                    data-aos="fade-up"
                    data-aos-delay="500"
                    style={{ color: "#353935" }}
                  >
                    ZeuZ: Empowering SQA Excellence
                  </h2>

                  <p
                    className=""
                    data-aos="fade-up"
                    data-aos-delay="700"
                    style={{ fontSize: 20, color: "gray" }}
                  >
                    AI-Powered Automation Solutions for Everyone
                  </p>
                </div>
                <div className="hero__reating">
                  <div className="hero__reating-shape">
                    <Image src={Two} alt="Image" />
                  </div>
                  <span>4.9</span>
                  <div className="icon">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <h6>
                    Trusted by 200+ more
                    <br />
                    companies
                  </h6>
                  <Link
                    className="hero__reating-btn"
                    href="/service"
                    style={{ backgroundColor: "#b25291" }}
                  >
                    GET STARTED
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-5 col-lg-6" style={{paddingLeft:100}}>
              <div className="hero__thumb-wrapper-2 mb-30">
                <div className="hero__thumb-3 w-img" style={{borderColor:'black',borderWidth:'20px'}}>
                 
                  <Image
                  style={{boxShadow: "0px 4px 6px rgba(0.0, 0, 0, .5)", borderRadius: "16px", justifyContent:'center',alignItems:'center',opacity: "0.6"}}
                  src={Four} alt="image not found" />

                  
                </div>
              </div>
            </div> */}

            <div className="col-xl-5 col-lg-6">
              <div className="hero__thumb-wrapper-2 mb-60">
                <div className="hero__thumb-3 w-img">
                  <Image
                    style={{
                      boxShadow: "0px 4px 6px rgba(0.0, 0, 0, .5)",
                      borderRadius: "16px",
                      justifyContent: "center",
                      alignItems: "center",
                      opacity: "0.6",
                    }}
                    src={Four1}
                    alt="image not found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBannerOne;
