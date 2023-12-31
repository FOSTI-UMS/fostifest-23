import DicodingLogo from "@/assets/images/dicoding-logo.png";
import GrabLogo from "@/assets/images/grab-logo.png";
import OdamaLogo from "@/assets/images/odama-logo.png";

import Image from "next/image";
export default function SupportedBy() {
  return (
    <div className="container text-center mb-5 " data-aos="fade-up">
      <h3 className="fw-bold mb-4">Supported By</h3>
      <div className="row row-cols-3 row-cols-md-4 align-items-center justify-content-center g-4">
        <div className="col d-flex justify-content-center">
          <Image src={DicodingLogo} alt="dicoding" className="w-75 h-75" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={GrabLogo} alt="grab" className="w-75 h-75" />
        </div>
        <div className="col d-flex justify-content-center">
          <Image src={OdamaLogo} alt="odama" className="w-75 h-75 rounded-4" />
        </div>
      </div>
    </div>
  );
}
