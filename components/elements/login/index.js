import styles from "./login.module.css";
import Link from "next/link";
import LoginGif from "/assets/gifs/login.json";
import SuccesImage from "@/assets/gifs/succesfully.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { useRouter } from "next/router";
import supabase from "@/api/supabase";

export default function FormLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert("Error signing in: " + error.message);
      } else {
        router.push("/profile");
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
              <form onSubmit={handleLogin}>
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
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
      {showModal && (
        <div>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-hidden="true"
            onClick={closeModal}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="container-fluid">
                    <div className="d-flex justify-content-center">
                      <Lottie
                        animationData={SuccesImage}
                        autoPlay={true}
                        loop={true}
                        className="w-75"
                      />
                    </div>
                    <div className="mb-4 text-center">
                      <h3 className="fw-bold mb-3">Yeayy Selamat !</h3>
                      <small className="text-secondary">
                        Anda Telah Berhasil Mendaftar Silahkan Login
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </div>
      )}
    </div>
  );
}
