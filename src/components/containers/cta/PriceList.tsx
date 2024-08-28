import Link from "next/link";

import styles from "./PriceList.module.css";
// import SinglePrice from "./SinglePrice";

const PriceList = () => {
  interface Plan {
    planName: string;
    size: string;
    monthlyPrice: number | string;
    yearlyPrice: number;
    features: string[];
    badge: string;
  }

  const plans: Plan[] = [
    {
      planName: "INTERMEDIATE",
      size: "For Team of 5-10 Members",
      monthlyPrice: 220,
      yearlyPrice: 400,
      features: [
        "ZeuZ AI Browser extension",
        "100% scriptless",
        "Web, API, cloud, iOS, Android, IoT and desktop",
        "Integration with Jira, CI/CD, DevOps",
        "Bug tracking, features, requests",
        "Project Management (beta) supported by AI",
        "Lab deployment",
        "Dev and Prod Nodes",
      ],
      badge: "",
    },
    {
      planName: "ENTERPRISE",
      size: "Customized Plan",
      monthlyPrice: "--",
      yearlyPrice: 600,
      features: [
        "ZeuZ AI Browser extension",
        "100% scriptless",
        "Web, API, cloud, iOS, Android, IoT and desktop",
        "Integration with Jira, CI/CD, DevOps",
        "Bug tracking, features, requests ",
        "Project Management (beta) supported by AI",
        "Lab deployment",
        "Dev and Prod Nodes",
      ],
      badge: "",
    },
  ];

  return (
    <section
      className="cta__area sky-bg pb-120"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container" style={{ backgroundColor: "#FAF9F6" }}>
        <div
          className="row "
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ backgroundColor: "#FAF9F6" }}
        >
          <div className="cta__wrapper text-center">
            <div className="pricing1 py-5 ">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-8 text-center">
                    <h3
                      className=" font-weight-bold mb-10"
                      style={{ fontSize: "35px", color: "#239B7E" }}
                    >
                      Pricing to make your Work Effective
                    </h3>
                    <p className="subtitle pt-2" style={{ fontSize: "16px" }}>
                      We offer 100% satisafaction and Money back Guarantee
                    </p>
                  </div>
                </div>
                {/* Row  */}
                <div className="row mt-70 ">
                  <div className="col-lg-4 col-md-6">
                    <div
                      className="card text-center card-shadow on-hover border-1 mb-4 pt-2 pb-4"
                      style={{
                        borderRadius: "30px",
                        backgroundColor: "#F8FFFB",
                      }}
                    >
                      <div className="card-body font-14">
                        <h5
                          className="mt-3 mb-1 font-weight-medium"
                          style={{ color: "#399B8E" }}
                        >
                          BASIC
                        </h5>
                        <h6 className="subtitle font-weight-normal">
                          For Team of 3-5 Members
                        </h6>
                        <div className="pricing my-3">
                          {/* <sup>$</sup> */}
                          <span className="monthly display-5">
                            <h3>
                              30-Days
                              <br />
                              Free Trial
                            </h3>
                          </span>
                          {/* <span className="yearly display-5">0</span>
                          <small className="monthly">/mo</small> */}
                          <small className="yearly">/yr</small>
                          {/* <span className="d-block">
                            Save{" "}
                            <span className="font-weight-medium">$100</span> a
                            Year
                          </span> */}
                        </div>
                        <ul className="list-inline">
                          <li className="d-block py-2">
                            ZeuZ AI Browser extension
                          </li>

                          <li className="d-block py-2">100% scriptless</li>
                          <li className="d-block py-2">
                            Web, API, cloud, iOS, Android, IoT and desktop
                          </li>
                          <li className="d-block py-2">
                            Integration with Jira, CI/CD, DevOps
                          </li>
                          <li className="d-block py-2">
                            Bug tracking, features, requests
                          </li>
                          <li className="d-block py-2">
                            Project Management (beta) supported by AI
                          </li>
                          <li className="d-block py-2">Lab deployment</li>
                          <li className="d-block py-2">Dev and Prod Nodes</li>
                        </ul>
                        <div className="bottom-btn mt-4">
                          <Link
                            className={`btn btn-success-gradiant btn-md text-white btn-block`}
                            href="/trial"
                          >
                            <span>Choose Plan</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Mapping over the plans array */}
                  {plans.map((plan, index) => (
                    // <SinglePrice key={plan.planName} plan={plan} />

                    <div key={index} className="col-lg-4 col-md-6">
                      <div
                        className="card text-center card-shadow on-hover border-1 mb-4 pt-2 pb-4"
                        style={{
                          borderRadius: "30px",
                          backgroundColor: "#F8FFFB",
                        }}
                      >
                        <div className="card-body font-14">
                          {plan.badge && (
                            <span className="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">
                              {plan.badge}
                            </span>
                          )}
                          <h5
                            className="mt-3 mb-1 font-weight-medium"
                            style={{ color: "#399B8E" }}
                          >
                            {plan.planName}
                          </h5>
                          <h6 className="subtitle font-weight-normal">
                            {plan.size}
                          </h6>
                          <div className="pricing my-3">
                            <sup>$</sup>
                            <span className="monthly display-5">
                              {plan.monthlyPrice}
                            </span>
                            <span className="yearly display-5">
                              {plan.yearlyPrice}
                            </span>
                            <small className="monthly">/mo</small>
                            <small className="yearly">/yr</small>
                            {/* <span className="d-block">
                              Save{" "}
                              <span className="font-weight-medium">
                                ${plan.yearlyPrice - plan.monthlyPrice * 12}
                              </span>{" "}
                              a Year
                            </span> */}
                          </div>
                          <ul className="list-inline">
                            {plan.features.map((feature) => (
                              <li className="d-block py-2" key={feature}>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <div className="bottom-btn mt-4">
                            <Link
                              className={`btn ${
                                plan.badge
                                  ? "btn-danger-gradiant"
                                  : "btn-success-gradiant"
                              } btn-md text-white btn-block`}
                              href="/trial"
                            >
                              <span>Choose Plan</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
