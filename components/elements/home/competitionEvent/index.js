import LombaAnimation from "/assets/gifs/lomba.json";
import styles from "./competitionEvent.module.css";
import Lottie from "lottie-react";

const CompetitionEvent = () => {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 d-md-none d-block ">
            <Lottie
              animationData={LombaAnimation}
              autoPlay={true}
              loop={true}
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
          <div className="col-12 col-md-7 mt-5" data-aos="fade">
            <div className={`${styles["btn-custom"]} mb-3`}>Lomba</div>
            <div className={`${styles["title-font"]}`}>
              Futuristic <span className="title-span">Landing</span> Page{" "}
              <span className="title-span">Desain</span>
            </div>
            <div className={`${styles["description-font"]}`}>
              Webinar nasional dan perlombaan membuat Landing Page, bertutujuan
              menampilkan informasi dan meningkatkan kredibilitas , Webinar kali
              ini menghadirkan ********** sebagai Front-End Developer
            </div>
            <div className={`${styles["btn-custom-2"]} mt-3`}>Daftar</div>
          </div>
          <div className="col-12 col-md-5 d-md-block d-none ">
            <Lottie
              animationData={LombaAnimation}
              autoPlay={true}
              loop={true}
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionEvent;
