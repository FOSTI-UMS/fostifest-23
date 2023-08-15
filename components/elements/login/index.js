import styles from "./login.module.css";
import Link from "next/link";
import LoginGif from "/assets/gifs/login.json";
import Lottie from "lottie-react";

export default function FormLogin() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      <div className="row pb-5 d-flex align-items-center justify-content-center">
        <div className="col-sm">
          <div className={`px-2 d-flex align-items-center justify-content-center ${styles["gif-login"]} `}>
            <Lottie animationData={LoginGif} className="lottie-login" data-aos="fade-right" />
          </div>
        </div>
        <div className="col-sm" data-aos="fade-left">
          <div className="px-3">
            <div className={`text-center container ${styles["form-box"]}`}>
              <div className="fw-bold pt-5">Login</div>
              <div className="d-flex align-items-center justify-content-center flex-column mb-3 ">
                <label htmlFor="inputEmail5" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                  Email
                </label>
                <input type="email" id="inputEmail5" className={`form-control ${styles["input-custom"]}`} aria-describedby="emailHelpBlock" />
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column mb-5">
                <label htmlFor="inputPassword5" className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}>
                  Password
                </label>
                <input type="password" id="inputPassword5" className={`form-control ${styles["input-custom"]}`} aria-describedby="passwordHelpBlock" />
              </div>
              <div className="text-white fw-bold text-decoration-none d-flex align-items-center justify-content-center">
                <button type="submit" className={`mb-3 text-white fw-bold d-flex align-items-center justify-content-center ${styles["btn-login"]}`}>
                  Login
                </button>
              </div>
              <Link href="/auth/register" className="text-dark fw-bold text-decoration-none mb-5 d-flex align-items-center justify-content-center">
                <div className={`${styles["change-page"]}`}>Belum punya akun?</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
