import Link from "next/link";
import styles from "./style.module.css";
import CloseImage from "@/assets/gifs/closed.json";
import Lottie from "lottie-react";

export default function PendaftaranTutup() {
  return (
    <div className={`${styles["close-register"]}`}>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <Lottie
              animationData={CloseImage}
              autoPlay={true}
              loop={true}
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <h3 className="fw-bold">
              Selamat! FOSTIFEST 2023 Telah Menyelesaikan Babak Pendaftaran
            </h3>
            <p className="fw-bolder text-secondary">
              Terima kasih telah mengikuti FOSTIFEST 2023
            </p>
            <div className="row">
              <div className="col">
                <Link className="btn btn-secondary me-2 rounded-4" href={"/"}>
                  Kembali
                </Link>
                <Link className="btn btn-primary rounded-4" href={"/login"}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
