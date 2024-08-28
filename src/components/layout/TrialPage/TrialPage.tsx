import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import emailjs from "emailjs-com";

const TrialPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = {
      firstname: event.target.elements.firstName.value,
      lastname: event.target.elements.lastName.value,
      phonenumber: event.target.elements.phone.value,
      companyname: event.target.elements.companyName.value,
      website: event.target.elements.companyWebsite.value,
      companysize: event.target.elements.companySize.value,
      role: event.target.elements.role.value,
      email: event.target.elements.email.value,
      message: event.target.elements.aboutUs.value,
    };

    const templateParams = {
      subject_name: "Demo Request",
      first_name: formData.firstname,
      last_name: formData.lastname,
      phone_number: formData.phonenumber,
      company_website: formData.website,
      company_name: formData.companyname,
      company_size: formData.companysize,
      role: formData.role,
      email: formData.email,
      message: formData.message,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token 58f9f84eb16ce4961ab917fcee33da1188315d09",
      },
      body: JSON.stringify(formData),
    };

    if (!isChecked) {
      toast.error("Please accept the terms and conditions.");
      return;
    }

    fetch(
      "https://qwikmart.pythonanywhere.com/zeuzRequestDemo/new",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        console.log("User Created");
        // toast.success("Successfully!");

        emailjs
          .send(
            "service_4gcrauu",
            "template_g7derxb",
            templateParams,
            "F9wEgPQvivHcEBTOk"
          )
          .then(
            (response) => {
              console.log("Email sent successfully:", response);
              toast.success("Successfully Send");
            },
            (error) => {
              console.error("Email sending failed:", error);
              toast.error("Failed to submit the form. Please try again later.");
            }
          );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section
      className="touch__arae touch-bg include__bg pt-120 pb-60"
      data-background="assets/img/shape/touch-shape.png"
    >
      <div className="newBannerContainer bannerPadding">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div
              className="touch__contact p-relative"
              style={{ paddingTop: "40px" }}
            >
              {/* <div className="touch__carcle"></div> */}

              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="touch__input">
                      <input
                        className="border"
                        type="text"
                        name="firstName"
                        required
                        placeholder="First Name"
                        style={{ color: "#494F55" }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="touch__input">
                      <input
                        className="border"
                        type="text"
                        required
                        name="lastName"
                        placeholder="Last Name"
                        style={{ color: "#494F55" }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="touch__input">
                      <input
                        className="border"
                        type="text"
                        required
                        name="phone"
                        placeholder="Phone Number"
                        style={{ color: "#494F55" }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="contact__select mb-20">
                      <select
                        className="border"
                        name="role"
                        required
                        style={{ color: "#494F55", fontWeight: "normal" }}
                      >
                        <option
                          value="Role"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          Role
                        </option>
                        <option
                          value="Manual Tester"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          Manual Tester
                        </option>
                        <option
                          value="Tester"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          Automation Tester
                        </option>
                        <option
                          value="Developer"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          Developer
                        </option>
                        <option
                          value="Engineer"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          Engineer
                        </option>
                        <option
                          value="Project Manager"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          Project Manager
                        </option>
                        <option
                          value="Business Analyst"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          Business Analyst
                        </option>
                        <option
                          value="Executive"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          Executive
                        </option>
                        <option
                          value="Other"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="touch__input">
                      <input
                        className="border"
                        type="text"
                        required
                        name="companyName"
                        placeholder="Company Name"
                        style={{ color: "#494F55" }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="touch__input">
                      <input
                        className="border"
                        type="text"
                        required
                        name="companyWebsite"
                        placeholder="Company Website"
                        style={{ color: "#494F55" }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="contact__select mb-20">
                      <select
                        className="border"
                        name="companySize"
                        required
                        style={{ color: "#494F55", fontWeight: "normal" }}
                      >
                        <option
                          value="0"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          Company Size
                        </option>
                        <option
                          value="1-10"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          1-10
                        </option>
                        <option
                          value="11-20"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          11-20
                        </option>
                        <option
                          value="21-50"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          21-50
                        </option>
                        <option
                          value="51-100"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          51-100
                        </option>
                        <option
                          value="101-500"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          101-500
                        </option>
                        <option
                          value="500+"
                          style={{ color: "#494F55", fontWeight: "normal" }}
                        >
                          500+
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="touch__input">
                      <input
                        className="border"
                        type="email"
                        required
                        name="email"
                        placeholder="Your Email"
                        style={{ color: "#494F55" }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="touch__input">
                      <input
                        className="border"
                        type="text"
                        required
                        name="aboutUs"
                        placeholder="How did you hear about us?"
                        style={{ color: "#494F55" }}
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-4">
                    <div className="col-12 mt-4">
                      <div className="touch__submit">
                        <div className="sign__action">
                          <input
                            className="e-check-input"
                            type="checkbox"
                            id="sing-up"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                          />

                          <label className="sign__check" htmlFor="sing-up">
                            Accept Our{" "}
                            <span>
                              <Link href="/terms-of-service">Terms & Conditions</Link>
                            </span>
                          </label>
                        </div>
                        <div className="touch__btn">
                          <button
                            className={`border__btn ${
                              isChecked ? "" : "disabled"
                            }`}
                            style={{
                              height: "50px",
                              cursor: isChecked ? "pointer" : "not-allowed",
                            }}
                            type="submit"
                            disabled={!isChecked}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 mt-4 mt-lg-0">
            <h3 className="mb-4 fs-3">Your 30 days trail comes with</h3>

            <p style={{ color: "#71706e" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut porro
              repellendus officiis laboriosam esse nobis.
            </p>
            <p style={{ color: "#71706e" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut porro
              repellendus officiis laboriosam esse nobis.
            </p>
            <p style={{ color: "#71706e" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut porro
              repellendus officiis laboriosam esse nobis.
            </p>
            <p style={{ color: "#71706e" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut porro
              repellendus officiis laboriosam esse nobis.
            </p>
            <p style={{ color: "#71706e" }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut porro
              repellendus officiis laboriosam esse nobis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialPage;
