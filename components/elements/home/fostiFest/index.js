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
            <p className="fw-bold text-center">
              Memahami seni dan menguasai aspek frontend dalam pengembangan web,
              sambil mempelajari cara menghadirkan pesona yang kuat melalui
              halaman landing untuk mencapai hasil yang lebih efektif dan
              memuaskan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FostiFest;
