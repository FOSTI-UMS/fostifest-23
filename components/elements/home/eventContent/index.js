import Lottie from "lottie-react";
import styles from "./eventContent.module.css";
import WebinarAnimation from "/assets/gifs/webinar.json";
import Link from "next/link";

export default function EventContent() {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 ">
            <Lottie animationData={WebinarAnimation} autoPlay={true} loop={true} className="img-fluid" data-aos="fade-up" />
          </div>
          <div className="col-12 col-md-7 mt-5" data-aos="fade">
            <div className={`${styles["btn-custom"]} mb-3`}>Webinar</div>
            <div className={`${styles["title-font"]}`}>
              Creative <span className="title-span">Exploration</span> In Frontend : <span className="title-span">Building </span>Web <span className="title-span">Design</span> with <span className="title-span">Bootstrap </span>for the{" "}
              <span className="title-span"> Digital </span> Generation
            </div>
            <div className={`${styles["description-font"]}`}>
              Webinar nasional dan perlombaan membuat Landing Page, bertujuan untuk mengusung semangat eksplorasi kreatif dalam pengembangan frontend dengan fokus pada membangun desain web menggunakan kerangka kerja Bootstrap yang sesuai
              dengan generasi digital saat ini.
            </div>
            <Link href={"/auth/register"} className="text-decoration-none">
              <div className={`${styles["btn-custom-2"]} mt-3`}>Daftar</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
