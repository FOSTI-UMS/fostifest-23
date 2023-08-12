import Lottie from "lottie-react";
import styles from "./eventContent.module.css";
import WebinarAnimation from "/assets/gifs/webinar.json";

export default function EventContent() {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 ">
            <Lottie
              animationData={WebinarAnimation}
              autoPlay={true}
              loop={true}
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
          <div className="col-12 col-md-7 mt-5" data-aos="fade">
            <div className={`${styles["btn-custom"]} mb-3`}>Webinar</div>
            <div className={`${styles["title-font"]}`}>
              Exploring <span className="title-span">Modern</span> Web{" "}
              <span className="title-span">Frameworks</span>
            </div>
            <div className={`${styles["description-font"]}`}>
              Webinar nasional dan perlombaan membuat Landing Page, bertutujuan
              menampilkan informasi dan meningkatkan kredibilitas , Webinar kali
              ini menghadirkan ********** sebagai Front-End Developer
            </div>
            <div className={`${styles["btn-custom-2"]} mt-3`}>Daftar</div>
          </div>
        </div>
      </div>
    </div>
  );
}
