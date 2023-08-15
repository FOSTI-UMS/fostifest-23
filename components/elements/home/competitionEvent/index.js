import LombaAnimation from "/assets/gifs/lomba.json";
import styles from "./competitionEvent.module.css";
import Lottie from "lottie-react";
import Link from "next/link";

const CompetitionEvent = () => {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 d-md-none d-block ">
            <Lottie animationData={LombaAnimation} autoPlay={true} loop={true} className="img-fluid" data-aos="fade-up" />
          </div>
          <div className="col-12 col-md-7 mt-5" data-aos="fade">
            <div className={`${styles["btn-custom"]} mb-3`}>Lomba</div>
            <div className={`${styles["title-font"]}`}>
              {/* Create A Company Profile Website : Archipelago */}
              Create <span className="title-span">A Company</span> Profile <span className="title-span">Website</span> : Nusantara
            </div>
            <div className={`${styles["description-font"]}`}>
              Mengundang anda untuk mengeksplorasi langkah-langkah untuk menciptakan sebuah website Company Profile yang menggambarkan kekayaan budaya dan keindahan alam Indonesia. 
            </div>
            <Link href={"/auth/register"} className="text-decoration-none">
              <div className={`${styles["btn-custom-2"]} mt-3`}>Daftar</div>
            </Link>
          </div>
          <div className="col-12 col-md-5 d-md-block d-none ">
            <Lottie animationData={LombaAnimation} autoPlay={true} loop={true} className="img-fluid" data-aos="fade-up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionEvent;
