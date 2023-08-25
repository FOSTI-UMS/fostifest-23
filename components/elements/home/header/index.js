import styles from "./header.module.css";

import CountDown from "../countDown";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles["header"]}>
      <div className="container">
        <div
          className="mb-5 flex-column d-flex align-items-center justify-content-center"
          data-aos="fade-up"
        >
          <div className="col text-center d-flex justify-content-center">
            <div
              className={`${styles["fostifest-title-font"]} text-center text-center mb-4`}
            >
              <span className="title-span"> Ayo</span> Jelajahi
              <span className="title-span"> Lebih </span>Jauh{" "}
              <span className="title-span">Tentang</span> FOSTIFEST
            </div>
          </div>
          <div className="col mb-3">
            <small
              className={`${styles["fostifest-description-font"]} fw-bold text-secondary`}
            >
              Waktu Pendaftaran Akan Dimulai
            </small>
          </div>
          <CountDown />
          <div className="col mb-3">
            <small
              className={`${styles["fostifest-description-font"]} fw-bold text-secondary`}
            >
              18 September 2023,00:01 WIB
            </small>
          </div>
          <div className="col">
            <Link className={`${styles["btn-custom"]} btn`} href={"/register"}>
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
