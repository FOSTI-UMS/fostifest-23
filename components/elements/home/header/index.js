import styles from "./header.module.css";
import LogoFostiFest from "/assets/images/logo_fostifest.png";
import Image from "next/image";

export default function Fostifest() {
  return (
    <div className={styles["header"]}>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center mb-4">
            <Image src={LogoFostiFest} alt="logonavbar" height={100} width={250} data-aos="fade-up" />
          </div>
        </div>
        <div className="mb-5 flex-column d-flex align-items-center justify-content-center" data-aos="fade-up">
          <div className="col text-center d-flex justify-content-center">
            <div className={`${styles["fostifest-title-font"]} text-center fw-bold text-center mb-4`}>
              {/* Creative Exploration in Frontend: Building web design with Bootstrap for the Digital Generation */}
              Creative <span className="title-span">Exploration</span> In Frontend: <span className="title-span">Building </span>Web <span className="title-span">Design</span> with <span className="title-span">Bootstrap </span>for the{" "}
              <span className="title-span"> Digital </span> Generation
            </div>
          </div>
          <div className={`${styles["fostifest-description-font"]} text-center`}>
            Webinar nasional dan perlombaan membuat Landing Page, bertujuan untuk mengusung semangat eksplorasi kreatif dalam pengembangan frontend dengan fokus pada membangun desain web menggunakan kerangka kerja Bootstrap yang sesuai
            dengan generasi digital saat ini.
          </div>
        </div>
      </div>
    </div>
  );
}
