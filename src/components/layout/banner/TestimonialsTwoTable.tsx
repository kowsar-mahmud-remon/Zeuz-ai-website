import React from "react";

const TestimonialsTwoTable = () => {
  return (
    <section
      className="feedback__area pb-60 pt-120"
      style={{ backgroundColor: "#FDFDF9", marginTop: "50px" }}
    >
      <div className="container">
        <div className="d-flex justify-content-center">
          <h2 className="tableHeaderTitle">VERTICALS</h2>
        </div>
        <div className="testimonialMainMargin" style={{ overflowX: "auto" }}>
          <table className="table">
            <thead>
              <tr className="tableTitle tableHeader">
                <th scope="col" className="border-end">
                  <h5>Types</h5>
                </th>
                <th scope="col" className="border-end">
                  <h5>Telecom Industry</h5>
                </th>
                <th scope="col" className="border-end">
                  <h5>Financial Industry</h5>
                </th>
                <th scope="col" className="border-end">
                  <h5>Rental platform</h5>
                </th>
                <th scope="col">
                  <h5>AI in HR Performance</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="tableTitle">
                <th scope="row" className="border-end">
                  Clients
                </th>
                <td className="border-end">
                  One of the top 3 Telecommunication Providers in Canada
                </td>
                <td className="border-end">
                  Alternative financial services, ~$1.5 b market cap, 2200+
                  employees in Canada
                </td>
                <td className="border-end">
                  Cloud-based rental platform to increase productivity (Canada,
                  US, Germany)
                </td>
                <td>
                  Fast growing technology company with a disruptive product
                  (Singapore)
                </td>
              </tr>
              <tr className="tableTitle">
                <th scope="row" className="border-end">
                  Business Challenges
                </th>
                <td className="border-end">
                  Improving performance of the online buying process
                </td>
                <td className="border-end">
                  Development & maintenance of complex & fragile tests with
                  significant costs
                </td>
                <td className="border-end">
                  Cost effective solution to improve quality & reduce release
                  cycle
                </td>
                <td>Quality challenge is impacting time to market</td>
              </tr>
              <tr className="tableTitle">
                <th scope="row" className="border-end">
                  Engagement Types
                </th>
                <td className="border-end">Managed Services</td>
                <td className="border-end">
                  Built modular, data-driven, inter-dependent tests using no
                  code, AI powered ZeuZ
                </td>
                <td className="border-end">
                  Multiple: Testers, Developers, Validators (Based on the
                  respective department’s needs).
                </td>
                <td>Staff augmentation + Consulting</td>
              </tr>
              <tr className="tableTitle">
                <th scope="row" className="border-end">
                  Results
                </th>
                <td className="border-end">
                  • Automated critical customer journeys & buying process is
                  scheduled to run 24x7
                  <br />• Client’s dashboard Automated with notification &
                  reports to identify trends
                </td>
                <td className="border-end">
                  • Robust test cases reduced the maintenance cost by 60%.
                  <br />• Testing cycle shortened from 4 weeks to 1 week
                </td>
                <td className="border-end">
                  • Mobile test suite automated & maintained with minimal
                  effort.
                  <br />• Functional tester is supporting the scrum team in the
                  same time zone. # Supporting “Live validation” complementing
                  client’s team in Mexico
                </td>
                <td>
                  • Critical test suite (Sanity) is automated
                  <br />
                  • Test runs into CI/CD pipeline to detect the issues earlier
                  in the lifecycle
                  <br />
                  • Working directly with the dev team in their time zone
                  (India)
                  <br />• Quality Assessment
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTwoTable;
