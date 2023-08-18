import styles from "./login.module.css";
import Link from "next/link";
import LoginGif from "/assets/gifs/login.json";
import Lottie from "lottie-react";

export default function FormLogin() {
  return (
    <div className="container">
      <div className="row align-items-center" style={{ minHeight: "100vh" }}>
        <div className="col-md-6 d-none d-md-block">
          <div className="d-flex justify-content-center" data-aos="fade">
            <Lottie animationData={LoginGif} style={{ width: "60%" }} />
          </div>
        </div>
        <div className="col-md-6">
          <div
            className={`card rounded-4 shadow ${styles["card-width"]}`}
            data-aos="fade"
          >
            <div className="card-body">
              <div className="fw-bold pt-5 text-center">Login</div>
              <form>
                <div className="d-flex align-items-center justify-content-center flex-column mb-3 ">
                  <label
                    htmlFor="inputEmail5"
                    className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="inputEmail5"
                    name="email"
                    className={`form-control ${styles["input-custom"]}`}
                    aria-describedby="emailHelpBlock"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column mb-5">
                  <label
                    htmlFor="inputPassword5"
                    className={`fw-bold form-label me-auto ms-4 ${styles["label-custom"]}`}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="inputPassword5"
                    name="password"
                    className={`form-control ${styles["input-custom"]}`}
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
                <div className="text-white fw-bold text-decoration-none d-flex align-items-center justify-content-center">
                  <button
                    type="submit"
                    className={`mb-3 text-white fw-bold d-flex align-items-center justify-content-center ${styles["btn-login"]}`}
                  >
                    Login
                  </button>
                </div>
              </form>

              <Link
                href="/register"
                className="text-dark fw-bold text-decoration-none mb-5 d-flex align-items-center justify-content-center"
              >
                <div className={`${styles["change-page"]}`}>
                  Belum punya akun?
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
