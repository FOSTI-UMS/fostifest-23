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
              <span className="title-span"> The Art</span> of Frontend<span className="title-span"> Proficiency </span>and <span className="title-span">Landing</span> Page <span className="title-span">Allure </span>
            </div>
          </div>
          <div className={`${styles["fostifest-description-font"]} text-center`}>
            Memahami seni dan menguasai aspek frontend dalam pengembangan web, sambil mempelajari cara menghadirkan pesona yang kuat melalui halaman landing untuk mencapai hasil yang lebih efektif dan memuaskan.
          </div>
        </div>
      </div>
    </div>
  );
}
