import React from "react";
import { IoIosStar } from "react-icons/io";
import One from "public/img/testimonial/testimonial-icon.svg";
import Img01 from "public/img/testimonial/testimonial-img-01.svg";
import Img02 from "public/img/testimonial/testimonial-img-02.svg";
import Img03 from "public/img/testimonial/testimonial-img-03.svg";
import Image from "next/image";

const TestimonialsTwo = () => {
  return (
    <section
      className="feedback__area pb-60 pt-60"
      style={{ backgroundColor: "#FDFDF9" }}
    >
      <div className="container">
        <div className="testimonialMainMargin">
          <div className="testimonialsTwoPadding shadow rounded-4 testimonialsTwoText">
            <p className="text-dark fw-bold">
              {"Finally found an end to end solution"}
            </p>
            <p className="text-dark">
              <span className="fw-bold">Pros: </span>Our software products have
              web applications plus native iOS and Android that all needs to
              talk together. We struggled to find a tool that would integrate
              across the entire stack until we found zeuz. We’ve been using it
              for two years and found their service to be very good, and when we
              evolved our products and needed new functions they helped us find
              them or worked with us to add them. Have and would recommend
              trying zeuz if you want to harness the power of automation in your
              QA team.
            </p>
            <p className="text-dark">
              <span className="fw-bold">Cons: </span>As we were new to
              automation we struggled at first but I don’t think that was the
              fault of the tool.
            </p>
            <p className="text-dark">
              <span className="fw-bold">Reasons for Choosing ZeuZ: </span>Best
              solution that fit all of our needs.
            </p>
          </div>
          <div className="row align-items-center" style={{ marginTop: "50px" }}>
            <div className="col-xl-6 col-lg-6 mb-4 ">
              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  Overall Rating
                </p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  Customer SERVICE
                </p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>Ease of Use</p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>FEATURES</p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  VALUE FOR MONEY
                </p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>
              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  Likelihood to recommend
                </p>
                <div className="ms-3">
                  <Image
                    style={{ width: "30px" }}
                    className=""
                    src={One}
                    width={500}
                    height={500}
                    alt="image not found"
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 testimonialImageStyle">
              <div className="d-flex justify-content-center">
                <Image
                  style={{ width: "150px" }}
                  className=""
                  src={Img01}
                  width={500}
                  height={500}
                  alt="image not found"
                />
              </div>
              <div className="text-center mt-3 testimonialsTwoText">
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  Adam K.
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  Head of Product & Development
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  Information Technology and Services, 11-50 employees
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  Used the software for: 2+ years
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonialMainMargin">
          <div className="testimonialsTwoPadding shadow rounded-4 testimonialsTwoText">
            <p className="text-dark fw-bold">
              {"Fantastic software at a great price"}
            </p>
            <p className="text-dark">
              <span className="fw-bold">Overall: </span>Zeuz has helped and is
              helping us transform our testing capabilities from a fully manual
              set up to an automated approach. This helped us improve the
              quality of our software and safe valuable resource time on other
              tasks. Zeuz also provides fully trained testing experts at an
              additional cost that is definitely worth it as the resource is
              highly capable and provides great extra coverage to our testing
              needs. The produce is very easy to use and best of all it can do
              so much - it really is a comprehensive tool that can cater to all
              possible testing needs of a company.
            </p>
            <p className="text-dark">
              <span className="fw-bold">Pros: </span>wide range of features/uses
              - built to be used in the most smart/efficient way - lots of
              integrations and possibilities - works for web, mobile and native
              apps - extremely competent staff
            </p>
            <p className="text-dark">
              <span className="fw-bold">Cons: </span> The software keeps
              improving and I have seen several updates whilst working with Zeuz
              already.
            </p>
            <p className="text-dark">
              <span className="fw-bold">Alternatives Considered: </span>
              Kualitee, mabl, Applitools, TestProject and Perfecto
            </p>
            <p className="text-dark">
              <span className="fw-bold">Reasons for Choosing ZeuZ: </span>Wide
              range of coverage for platforms, devices, browsers Price
              Additional options.
            </p>
          </div>
          <div className="row align-items-center" style={{ marginTop: "50px" }}>
            <div className="col-xl-6 col-lg-6 mb-4 ">
              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  Overall Rating
                </p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  Customer SERVICE
                </p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>Ease of Use</p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>FEATURES</p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  VALUE FOR MONEY
                </p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>
              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  Likelihood to recommend
                </p>
                <div className="ms-3">
                  <Image
                    style={{ width: "30px" }}
                    className=""
                    src={One}
                    width={500}
                    height={500}
                    alt="image not found"
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 testimonialImageStyle">
              <div className="d-flex justify-content-center">
                <Image
                  style={{ width: "150px" }}
                  className=""
                  src={Img02}
                  width={500}
                  height={500}
                  alt="image not found"
                />
              </div>
              <div className="text-center mt-3 testimonialsTwoText">
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  Zoheil K.
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  QA & Release Manager
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  Automotive, 51-200 employees
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  Used the software for: Less than 6 months
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonialMainMargin">
          <div className="testimonialsTwoPadding shadow rounded-4 testimonialsTwoText">
            <p className="text-dark fw-bold">
              {"Except, reliable and creative partner"}
            </p>
            <p className="text-dark">
              <span className="fw-bold">Overall: </span>Overall the experience
              was wonderful and would highly recommend ZeuZ for all your testing
              automation needs.
            </p>
            <p className="text-dark">
              <span className="fw-bold">Pros: </span>Loved the solution
              flexibility to be able to integrate various systems and create
              scale to automate complex test cases scenarios. The technical and
              leadership team their is very engaged and committed to delivering
              business results through automation. Excellent experience and
              partnership.
            </p>
            <p className="text-dark">
              <span className="fw-bold">Cons: </span>Nothing. There is really
              nothing that I can think of
            </p>
          </div>
          <div className="row align-items-center" style={{ marginTop: "50px" }}>
            <div className="col-xl-6 col-lg-6 mb-4 ">
              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  Overall Rating
                </p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  Customer SERVICE
                </p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>Ease of Use</p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>FEATURES</p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>

              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  VALUE FOR MONEY
                </p>
                <div className="ms-3">
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                  <IoIosStar
                    className="me-1"
                    style={{ color: "#FF9D28", fontSize: "20px" }}
                  />
                </div>
              </div>
              <div className="d-flex testimonialMarginStyle">
                <p style={{ color: "#1E4840", fontWeight: 600 }}>
                  Likelihood to recommend
                </p>
                <div className="ms-3">
                  <Image
                    style={{ width: "30px" }}
                    className=""
                    src={One}
                    width={500}
                    height={500}
                    alt="image not found"
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 testimonialImageStyle">
              <div className="d-flex justify-content-center">
                <Image
                  style={{ width: "150px" }}
                  className=""
                  src={Img03}
                  width={500}
                  height={500}
                  alt="image not found"
                />
              </div>
              <div className="text-center mt-3 testimonialsTwoText">
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  Ali M.
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  VP Transformation
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  Financial Services, 1,001-5,000 employees
                </p>
                <p
                  className=""
                  style={{
                    fontWeight: 600,
                    marginBottom: "0px",
                    color: "black",
                  }}
                >
                  Used the software for: 1-2 years
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTwo;
