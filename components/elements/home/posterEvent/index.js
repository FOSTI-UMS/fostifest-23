import Image from "next/image";
import React from "react";
import Timeline from "@/assets/images/timeline.png";
import FostifestCompetition from "@/assets/images/Fostifest-Competition.png";
import FostifestSeminar from "@/assets/images/Fostifest-Seminar.png";

const PosterEvent = () => {
  return (
    <div className="container my-5">
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        <div className="col" data-aos="fade-up">
          <Image src={Timeline} alt="timeline" className="img-fluid" />
        </div>
        <div className="col" data-aos="fade-up">
          <Image
            src={FostifestCompetition}
            alt="fostifest-competition"
            className="img-fluid"
          />
        </div>
        <div className="col" data-aos="fade-up">
          <Image
            src={FostifestSeminar}
            alt="fostifest-seminar"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default PosterEvent;
