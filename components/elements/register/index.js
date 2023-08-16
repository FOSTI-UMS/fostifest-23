import styles from "./register.module.css";
import Link from "next/link";
import LoginGif from "/assets/gifs/login.json";
import Lottie from "lottie-react";

export default function FormRegister() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="row my-5 d-flex align-items-center justify-content-center">
        <div className="col-sm">
          <div className="px-2 d-flex align-items-center justify-content-center">
            <Lottie animationData={LoginGif} className="lottie-login" data-aos="fade-right" />
          </div>
        </div>
        <div className="col-sm " data-aos="fade-left">
          <div className="px-3">
            <div className={`text-center container ${styles["form-box"]}`}>
              <div className="fw-bold mt-4 mb-5">Register</div>
              <div className="d-flex align-items-center justify-content-center flex-column mb-2">
                <label htmlFor="namaLengkap" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                  Nama Lengkap
                </label>
                <input type="text" className={`form-control ${styles["input-custom"]}`} />
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column mb-2 ">
                <label htmlFor="alamat" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                  Alamat
                </label>
                <input type="text" className={`form-control ${styles["input-custom"]}`} />
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column mb-2 ">
                <label htmlFor="noTelp" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                  No Telp
                </label>
                <input type="text" className={`form-control ${styles["input-custom"]}`} />
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column mb-2 ">
                <label htmlFor="instansi" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                  Instansi
                </label>
                <input type="text" className={`form-control ${styles["input-custom"]}`} />
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column mb-2 ">
                <label htmlFor="inputEmail5" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                  Email
                </label>
                <input type="email" className={`form-control ${styles["input-custom"]}`} aria-describedby="emailHelpBlock" />
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column mb-2">
                <label htmlFor="inputPassword5" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                  Password
                </label>
                <input type="password" className={`form-control ${styles["input-custom"]}`} aria-describedby="passwordHelpBlock" />
              </div>
              <div className={`d-flex align-items-start justify-content-start ms-4 mt-3 mb-3 ${styles["radio-btn"]}`}>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label className={`form-check-label ${styles["radio-btn"]}`} htmlFor="inlineRadio1">
                    Webinar
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className={`form-check-label ${styles["radio-btn"]}`} htmlFor="inlineRadio2">
                    Lomba
                  </label>
                </div>
              </div>
              <div className="text-white fw-bold text-decoration-none d-flex align-items-center justify-content-center">
                <button type="submit" className={`mb-3 text-white fw-bold d-flex align-items-center justify-content-center ${styles["btn-login"]}`}>
                  Register
                </button>
              </div>
              <Link href="/auth/login" className="text-dark fw-bold text-decoration-none mb-5 d-flex align-items-center justify-content-center">
                <div className={`${styles["change-page"]}`}>Sudah punya akun?</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
