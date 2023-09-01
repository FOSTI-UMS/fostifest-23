import Link from "next/link";
import SoonImage from "@/assets/gifs/coming_soon.json";
import Lottie from "lottie-react";
import CountDown from "../home/countDown";
import styles from "./soon.module.css";

export default function Soon() {
  return (
    <div className="container">
        <div className="row justify-content-center align-items-center" style={{minHeight: "100vh"}}>
          <div className="col-lg">
            <Lottie
              animationData={SoonImage}
              autoPlay={true}
              loop={true}
              className={`img-fluid ${styles.lottie}`}
              data-aos="fade-up"
            />
          </div>
          <div className="col-lg text-center" data-aos="fade-up">
            <h3 className="fw-bold fs-2">
              Pendaftaran Belum Dibuka
            </h3>
            <br/>
            <p className="fw-bolder text-secondary">
            Waktu Pendaftaran Akan Dimulai
            </p>
            <CountDown />
            <p className="fw-bolder text-secondary">
            18 September 2023,00:01 WIB
            </p>
            <div className="row">
              <div className="col">
                <Link className="btn btn-primary rounded-4" href={"/"}>
                  Kembali
                </Link>
              </div>
            </div>
          </div>
        </div>
        </div>   
  );
}
