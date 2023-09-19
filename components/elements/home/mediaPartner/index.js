import Image from "next/image";
import UmsLogo from "@/assets/images/ums-logo.png";
import RapmaFmLogo from "@/assets/images/rapma-logo.png";
import FinicLogo from "@/assets/images/finic-logo.PNG";
import HimakomLogo from "@/assets/images/himakom-logo.jpg";
import InformatikaLogo from "@/assets/images/informatika-logo.png";
import HMPLogo from "@/assets/images/HMP.png";
import KineLogo from "@/assets/images/kine-logo.PNG";
import RadikLogo from "@/assets/images/radik-logo.png";
import SkimLogo from "@/assets/images/skim-logo.png";
import LaosLogo from "@/assets/images/laos-logo.png";
import HimatifLogo from "@/assets/images/himatif-logo.png";
import InfoLombaLogo from "@/assets/images/infolomba-logo.png";

export default function MediaPartner() {
  return (
    <div
      className="container text-center"
      style={{ marginTop: "100px", marginBottom: "100px" }}
      data-aos="fade-up"
    >
      <h3 className="fw-bold mb-5">Media Partner</h3>
      <div className="row row-cols-3 row-cols-md-4 align-items-center justify-content-center g-4">
        <div className="col d-flex justify-content-center">
          <Image src={FinicLogo} alt="finic" className="w-50 h-50" />
        </div>
        <div className="col d-flex justify-content-center ">
          <Image src={UmsLogo} alt="ums" className="w-50 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={HimakomLogo} alt="himakom" className="w-50 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image
            src={InformatikaLogo}
            alt="informatika"
            className="w-50 h-50"
          />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={HMPLogo} alt="hmp" className="w-50 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={KineLogo} alt="kine" className="w-50 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={RadikLogo} alt="radik" className="w-50 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={SkimLogo} alt="skim" className="w-50 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={LaosLogo} alt="laos" className="w-50 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={RapmaFmLogo} alt="rampma" className="w-50 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={HimatifLogo} alt="himatif" className="w-50 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={InfoLombaLogo} alt="infolomba" className="w-50 h-50" />
        </div>
      </div>
    </div>
  );
}
