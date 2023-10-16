import Maps from "/assets/gifs/maps.json";
import styles from "./roadShow.module.css";
import Lottie from "lottie-react";

const RoadShow = () => {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 d-md-none d-block ">
            <Lottie
              animationData={Maps}
              autoPlay={true}
              loop={true}
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
          <div className="col-12 col-md-7 mt-5" data-aos="fade">
            <div className={`${styles["btn-custom"]} mb-3`}>Road Show</div>
            <div className={`${styles["title-font"]}`}>
              <span className="title-span">FostiFest</span> Road Show
            </div>
            <div className={`${styles["description-font"]}`}>
              Fostifest roadshow adalah salah satu rangkaian acara seminar dan
              sosialisasi kompetisi yang diselenggarakan setiap tahunnya oleh
              UKM FOSTI UMS. Pada Tahun 2023 ini, Fostifest hadir berkolaborasi
              bersama beberapa SMK di Solo Raya dalam membantu para siswa
              meningkatkan skill dan pengetahuan di bidang front-end dengan
              memberikan materi yang menarik oleh anggota FOSTI UMS.
            </div>
          </div>
          <div className="col-12 col-md-5 d-md-block d-none ">
            <Lottie
              animationData={Maps}
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

export default RoadShow;
