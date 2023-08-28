import LogoFostiFest from "/assets/images/logo_fostifest.png";
import Image from "next/image";
import Style from "./fostiFest.module.css";

const FostiFest = () => {
  return (
    <div className={`${Style["fosti-fest"]}`}>
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <Image
              src={LogoFostiFest}
              alt="logonavbar"
              height={100}
              width={250}
              data-aos="fade-up"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p
              className={`${Style["description-font"]}  text-center w-75 mx-auto`}
              data-aos="fade-up"
            >
              FOSTIFEST (FOSTI Festival) merupakan kegiatan tahunan yang
              diselenggarakan oleh Forum Open Source Teknik Informatika (FOSTI)
              UMS. FOSTIFEST 2023 merupakan ajang yang keempat dengan mengusung
              tema "The Art of Proficiency and Landing Page Allure". Acara
              FOSTIFEST tahun ini memiliki serangkaian kegiatan berupa roadshow
              ke SMK yang berada di Solo Raya, lomba landing page, dan seminar
              nasional yang dikemas secara menarik.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FostiFest;
