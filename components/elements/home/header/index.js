import styles from "./header.module.css";
import LogoFostiFest from "/assets/images/logo_fostifest.png";
import Image from "next/image";

export default function Fostifest() {
  return (
    <div className={styles["header"]}>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center mb-4">
            <Image
              src={LogoFostiFest}
              alt="logonavbar"
              height={100}
              width={250}
              data-aos="fade-up"
            />
          </div>
        </div>
        <div
          className="mb-5 flex-column d-flex align-items-center justify-content-center"
          data-aos="fade-up"
        >
          <div className="col text-center d-flex  justify-content-center">
            <div
              className={`${styles["fostifest-title-font"]} text-center fw-bold text-center mb-4 `}
            >
              Elevate <span className="title-span">Innovate</span> Dominate{" "}
              <span className="title-span">Forging</span> the Future of{" "}
              <span className="title-span">Web Creation</span>
            </div>
          </div>
          <div
            className={`${styles["fostifest-description-font"]} text-center`}
          >
            Webinar nasional dan perlombaan membuat Landing Page, bertutujuan
            menampilkan informasi dan meningkatkan kredibilitas , Webinar kali
            ini menghadirkan ********** sebagai Front-End Developer
          </div>
        </div>
      </div>
    </div>
  );
}
