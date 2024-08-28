import React from "react";
import Link from "next/link";
import Image from "next/image";
import One from "public/img/service/serviceImg04.svg";
import Two from "public/img/service/serviceImg02.svg";
import Three from "public/img/service/serviceImg01.svg";

const OurServicesPage = () => {
  return (
    <div
      className="service__area service__bg z-index-1 pt-80 service-bg-two"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container">
        <div className="row serviceBannerCss">
          <div className="col-12">
            <div className=" text-center">
              <span className="section__subtitle" style={{ fontSize: "18px" }}>
                <span style={{ color: "#16b99b" }}>What</span> we do
              </span>
              <h2 className="section__title" style={{ color: "#239B7E" }}>
                Our Professional Services
                <span className="down__mark-middle"></span>
              </h2>
              <p
                className="mt-4"
                style={{ fontSize: 18, color: "gray", fontWeight: "300" }}
              >
                Welcome to our world of seamless software testing solutions! At
                Automation Solutionz, we pride ourselves on offering an
                extensive array of testing services tailored to your every need
                throughout the software development journey.
              </p>
            </div>
          </div>
        </div>

        <div className="row serviceCss">
          <div className="col-xl-7 col-lg-7 allTextSize">
            <p
              className="CustomerTextCss"
              style={{
                fontSize: 16,
                color: "#504F47",
                paddingTop: 20,
                letterSpacing: 1,
                lineHeight: 2,
                fontWeight: "300",
              }}
            >
              Our diverse range of services spans the entire software
              development life cycle, ensuring that every aspect of your project
              receives the attention it deserves. From Manual/Functional testing
              to cutting-edge Automated testing, we have got you covered. We
              specialize in setting up CI/CD pipelines to streamline your
              development process, and our Performance/Load testing ensures your
              software performs flawlessly under any circumstances.
              Additionally, we offer expert QA consultancy to enhance your
              projects quality assurance processes.
            </p>
          </div>

          <div className="col-xl-5 col-lg-5">
            <div className="feedback__right ">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content d-flex justify-content-center">
                      <Image
                        src={One}
                        width={500}
                        height={400}
                        alt="image not found"
                        style={{
                          width: "70%",
                          // height: "350px",
                        }}
                      />
                    </div>
                    {/* <div className="col-xl-7 col-lg-7 mb-4 allTextSize"> */}
                    <p
                      className="CustomerTextCss"
                      style={{
                        fontSize: 16,
                        color: "#504F47",
                        paddingTop: 20,
                        letterSpacing: 1,
                        lineHeight: 2,
                        fontWeight: "300",
                      }}
                    >
                      Our expertise is not limited to a single platform – we
                      excel in testing across various environments, including
                      Web, Desktop, Mobile, and API
                    </p>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row serviceCss">
          <div className="col-xl-5 col-lg-5">
            <div className="feedback__right">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content d-flex justify-content-center">
                      <Image
                        src={Two}
                        width={500}
                        height={400}
                        alt="image not found"
                        style={{
                          width: "55%",
                          // height: "350px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row serviceCss">
          <div className="col-xl-7 col-lg-7 mb-4 allTextSize">
            <p
              className="CustomerTextCss"
              style={{
                fontSize: 16,
                color: "#504F47",
                paddingTop: 20,
                letterSpacing: 1,
                lineHeight: 2,
                fontWeight: "300",
              }}
            >
              But it does not end there. We understand that every client is
              unique, which is why we offer customizable engagement models to
              suit your specific requirements. Whether you need fully managed
              services, skilled professionals to augment your team, QA as a
              Service, or project/solution-based QA, we have the flexibility to
              adapt to your needs seamlessly.
            </p>
          </div>

          <div className="col-xl-5 col-lg-5">
            <div className="feedback__right mb-60">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content d-flex justify-content-center">
                      <Image
                        src={Three}
                        width={500}
                        height={400}
                        alt="image not found"
                        style={{
                          width: "55%",
                          // height: "300px",
                        }}
                      />
                    </div>

                    <p
                      className="CustomerTextCss"
                      style={{
                        marginTop: "60px",
                        fontSize: 16,
                        fontWeight: "300",
                      }}
                    >
                      At Automation Solutionz, we are not just another testing
                      provider – we are your trusted partner in ensuring the
                      quality and success of your software!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServicesPage;
