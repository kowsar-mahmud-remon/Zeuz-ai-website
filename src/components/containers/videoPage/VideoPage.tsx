import React from "react";
import Image from "next/image";

import YoutubeEmbed from "../youtube/YoutubeEmbed";

const VideoPage = () => {
  return (
    <div className="boost__area pb-25">
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <div
            className="col-xl-6 col-lg-6 d-flex align-items-center"
            style={{ minHeight: "300px" }}
          >
            <div className="">
              <h2 className="">Introducing ZeuZ</h2>
              <p>End-to-End Software Testing</p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <YoutubeEmbed embedId="6PJ-vveaT4k" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
