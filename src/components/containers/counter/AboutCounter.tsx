import React from "react";
import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutCounter = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section
      className="fact__area pt-40 pb-20"
      style={{ backgroundColor: "#FAF9F6" }}
    >
      <div className="container">
        <div className="row ">
          <div className="col-xl-4">
            <div className="fact__item mb-30">
              <div className="fact__count">
                <div className="fact__number aboutNumberText">
                  <span
                    className="counter"
                    ref={ref}
                    style={{ color: "#2C3539" }}
                  >
                    {inView && <CountUp start={0} end={45} duration={3} />}
                  </span>
                </div>
                <div className="fact__letter aboutNumberText">
                  <span style={{ color: "#2C3539" }}>k</span>
                  <span className="plus" style={{ color: "#16b99b" }}>
                    +
                  </span>
                </div>
              </div>
              <div className="fact__content">
                <h3 style={{ color: "gray" }}>Succeeded projects</h3>
                {/* <p>Projects Completed</p> */}
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="fact__item mb-30">
              <div className="fact__count">
                <div className="fact__number aboutNumberText">
                  <span
                    className="counter"
                    ref={ref}
                    style={{ color: "#2C3539" }}
                  >
                    {inView && <CountUp start={0} end={7140} duration={3} />}
                  </span>
                </div>
                <div className="fact__letter aboutNumberText">
                  <span style={{ color: "#2C3539" }}>k</span>
                  <span className="plus" style={{ color: "#16b99b" }}>
                    +
                  </span>
                </div>
              </div>
              <div className="fact__content">
                <h3 style={{ color: "gray" }}>Automated tests run</h3>
                {/* <p>Projects Completed</p> */}
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="fact__item mb-30">
              <div className="fact__count">
                <div className="fact__number aboutNumberText">
                  <span
                    className="counter"
                    ref={ref}
                    style={{ color: "#2C3539" }}
                  >
                    {inView && <CountUp start={0} end={15} duration={3} />}
                  </span>
                </div>
                <div className="fact__letter aboutNumberText">
                  <span> </span>
                  <span className="plus" style={{ color: "#16b99b" }}>
                    {" "}
                    +
                  </span>
                </div>
              </div>
              <div className="fact__content">
                <h3 style={{ color: "gray" }}>Cross Channels</h3>
                {/* <p>Projects Completed</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCounter;
