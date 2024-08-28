import React from "react";
import Link from "next/link";
import Image from "next/image";
import One from "public/img/QaTesting/QaTestingDetailsImg1.svg";
import Two from "public/img/QaTesting/QaTestingDetailsImg2.svg";
import Three from "public/img/QaTesting/QaTestingDetailsImg3.svg";
import Four from "public/img/QaTesting/QaTestingDetailsImg4.svg";
import Five from "public/img/QaTesting/QaTestingDetailsImg5.svg";

const QAServicesDetailsPage = () => {
  return (
    <div
      className="service__area service__bg z-index-1 pt-80 pb-120 service-bg-two"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container">
        <div className="row QaServiceCss align-items-center" id="QaTesting01">
          <div className="col-xl-5 col-lg-5">
            <div className="feedback__right">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content d-flex justify-content-center">
                      <Image
                        src={One}
                        width={500}
                        height={400}
                        className="QaImageCss"
                        alt="image not found"
                        style={{
                          width: "90%",
                          // height: "350px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 QaTextSize">
            <h2 className="" style={{ color: "#20695F" }}>
              Fully Managed QA
            </h2>

            <p
              className="CustomerTextCss"
              style={{
                fontSize: 16,
                color: "#49857D",
                paddingTop: 20,
                letterSpacing: 1,
                lineHeight: 2,
                fontWeight: "300",
              }}
            >
              Elevate your operational efficiency with our Fully Managed QA
              service, designed to seamlessly integrate into your business
              workflow. Entrust our expert team to meticulously handle every
              facet of your quality assurance process, from rigorous testing
              protocols to comprehensive reporting. By delegating this critical
              task to us, you can reallocate your resources and attention
              towards driving innovation and growth in your core business areas.
              Experience the peace of mind that comes with our professional
              expertise, ensuring that your operations run smoothly and your
              goals are achieved with precision and reliability.
            </p>
          </div>
        </div>

        <div className="row QaServiceCss align-items-center" id="QaTesting02">
          <div className="col-xl-5 col-lg-5">
            <div className="feedback__right ">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content d-flex justify-content-center">
                      <Image
                        src={Two}
                        width={500}
                        height={400}
                        className="QaImageCss"
                        alt="image not found"
                        style={{
                          width: "85%",
                          // height: "350px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 QaTextSize">
            <h2 className="" style={{ color: "#20695F" }}>
              Team Augmentation
            </h2>

            <p
              className="CustomerTextCss"
              style={{
                fontSize: 16,
                color: "#49857D",
                paddingTop: 20,
                letterSpacing: 1,
                lineHeight: 2,
                fontWeight: "300",
              }}
            >
              Maximize your teams potential with our Team Augmentation service,
              strategically deploying skilled QA professionals to complement
              your existing workforce. Our adept specialists seamlessly
              integrate into your operations, fortifying your projects quality
              assurance framework with their expertise. By leveraging our
              augmentation solutions, you can amplify your teams capabilities,
              ensuring optimal performance and adherence to rigorous standards.
              Count on our dedicated professionals to seamlessly blend with your
              team, empowering you to navigate challenges and achieve success
              with unparalleled efficiency and agility.
            </p>
          </div>
        </div>
        <div className="row QaServiceCss align-items-center" id="QaTesting03">
          <div className="col-xl-5 col-lg-5">
            <div className="feedback__right ">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content d-flex justify-content-center">
                      <Image
                        src={Three}
                        width={500}
                        height={400}
                        className="QaImageCss"
                        alt="image not found"
                        style={{
                          width: "90%",
                          // height: "350px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 QaTextSize">
            <h2 className="" style={{ color: "#20695F" }}>
              QA as a Service
            </h2>

            <p
              className="CustomerTextCss"
              style={{
                fontSize: 16,
                color: "#49857D",
                paddingTop: 20,
                letterSpacing: 1,
                lineHeight: 2,
                fontWeight: "300",
              }}
            >
              Experience the convenience and effectiveness of QA as a Service,
              where quality assurance solutions are tailored precisely to your
              project requirements. Enjoy the flexibility of scaling resources
              as needed, ensuring that your QA needs are met efficiently without
              overburdening your team. With this on-demand model, you can rely
              on timely and reliable QA support, allowing you to focus on
              delivering exceptional results for your projects.
            </p>
          </div>
        </div>
        <div className="row QaServiceCss align-items-center" id="QaTesting04">
          <div className="col-xl-5 col-lg-5">
            <div className="feedback__right ">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content d-flex justify-content-center">
                      <Image
                        src={Four}
                        width={500}
                        height={400}
                        className="QaImageCss"
                        alt="image not found"
                        style={{
                          width: "90%",
                          // height: "350px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 QaTextSize">
            <h2 className="" style={{ color: "#20695F" }}>
              Tap into QA Wisdom
            </h2>

            <p
              className="CustomerTextCss"
              style={{
                fontSize: 16,
                color: "#49857D",
                paddingTop: 20,
                letterSpacing: 1,
                lineHeight: 2,
                fontWeight: "300",
              }}
            >
              Tap into a wealth of QA wisdom with our Consulting and Audit
              Services, led by seasoned experts in the field. Benefit from
              comprehensive evaluations and tailored guidance tailored to your
              unique needs. Our team will conduct thorough audits of your QA
              processes, identifying strengths, weaknesses, and opportunities
              for improvement. Receive actionable insights and recommendations
              to optimize your quality assurance strategies and ensure the
              highest standards of quality and efficiency in your projects. With
              our support, you can confidently navigate QA challenges and
              achieve greater success in your endeavors.
            </p>
          </div>
        </div>
        <div className="row QaServiceCss align-items-center" id="QaTesting05">
          <div className="col-xl-5 col-lg-5">
            <div className="feedback__right ">
              <div className="feedbacK__thumb">
                <div className=" ">
                  <div className="feedback__active">
                    <div className="feedbacK__content d-flex justify-content-center">
                      <Image
                        src={Five}
                        width={500}
                        height={400}
                        className="QaImageCss"
                        alt="image not found"
                        style={{
                          width: "85%",
                          // height: "350px",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7 QaTextSize">
            <h2 className="" style={{ color: "#20695F" }}>
              Project-Based QA
            </h2>

            <p
              className="CustomerTextCss"
              style={{
                fontSize: 16,
                color: "#49857D",
                paddingTop: 20,
                letterSpacing: 1,
                lineHeight: 2,
                fontWeight: "300",
              }}
            >
              Choose our Project-Based QA solution to address your immediate
              testing needs with precision and efficiency. Tailored specifically
              to each project, our comprehensive QA testing ensures that your
              deliverables meet the highest standards of quality and
              reliability. Our experienced QA team meticulously analyzes project
              requirements to develop customized testing strategies, focusing on
              areas crucial to your projects success. With a flexible approach,
              we adapt to your timeline and budget constraints, providing
              cost-effective solutions without compromising on quality. Trust us
              to seamlessly integrate into your project workflow, delivering
              thorough testing results and actionable insights to help you
              achieve your project goals with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAServicesDetailsPage;
