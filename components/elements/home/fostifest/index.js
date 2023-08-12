import styles from "./fostifest.module.css";
import LogoFostiFest from "/assets/images/logo_fostifest.png";
import Image from "next/image";

export default function Fostifest() {
  return (
    <div className=" flex-column d-flex align-items-center justify-content-center">
      <Image src={LogoFostiFest} alt="logonavbar" height={100} width={250} className="mb-3" priority />
      <div className="mb-5 flex-column d-flex align-items-center justify-content-center">
        <div className="col text-center d-flex  justify-content-center">
          <p className={`${styles["fostifest-title-font"]} text-center fw-bold text-center mb-3 `}>
            Elevate <span className="title-span">Innovate</span> Dominate <span className="title-span">Forging</span> the Future of <span className="title-span">Web Creation</span>
          </p>
        </div>
        <div className={`${styles["fostifest-description-font"]} text-center`}>
          Webinar nasional dan perlombaan membuat Landing Page, bertutujuan menampilkan informasi dan meningkatkan kredibilitas , Webinar kali ini menghadirkan ********** sebagai Front-End Developer
        </div>
      </div>
    </div>
  );
}
