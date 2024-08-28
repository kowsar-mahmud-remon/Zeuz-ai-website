import React from "react";
import Image from "next/image";
import Link from "next/link";

import One from "public/img/hero/hero-section-2.png";

const ServiceBanner = () => {
  return (
    <section className="" style={{ marginTop: "150px", marginBottom: "50px" }}>
      <div className="mt-30 m-auto">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="">
                <div className="mb-60">
                  <h2 className="" data-aos="fade-up" data-aos-delay="500">
                    Services
                  </h2>

                  <p className="mt-2" data-aos="fade-up" data-aos-delay="700">
                    We enable you to scale and focus on what you do best:
                    bringing the best product and services to market.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="mb-60">
                <div className="">
                  <Image
                    style={{ width: "100%", height: "300px" }}
                    src={One}
                    width={500}
                    height={500}
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

export default ServiceBanner;