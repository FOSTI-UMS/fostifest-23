import Image from "next/image";
import UmsLogo from "@/assets/images/ums-logo.png";
import RapmaFmLogo from "@/assets/images/rapma-logo.png";
import FinicLogo from "@/assets/images/finic-logo.PNG";
import HimakomLogo from "@/assets/images/himakom-logo.jpg";
import InformatikaLogo from "@/assets/images/informatika-logo.png";
import HMPLogo from "@/assets/images/HMP.png";
import KineLogo from "@/assets/images/kine-logo.PNG";

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
          <Image src={FinicLogo} alt="finic" className="w-75 h-50" />
        </div>
        <div className="col d-flex justify-content-center ">
          <Image src={UmsLogo} alt="ums" className="w-75 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={HimakomLogo} alt="himakom" className="w-75 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image
            src={InformatikaLogo}
            alt="informatika"
            className="w-75 h-50"
          />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={HMPLogo} alt="hmp" className="w-75 h-50" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={KineLogo} alt="kine" className="w-75 h-50" />
        </div>
      </div>
    </div>
  );
}
