import styles from "./login.module.css";
import Link from "next/link";
import LoginGif from "/assets/gifs/login_2.json";
import SuccesImage from "@/assets/gifs/succesfully.json";
import Lottie from "lottie-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import supabase from "@/pages/api/supabase";
import Cookies from "js-cookie";
import BackgroundSide from "@/assets/images/bg_login.png";

export default function FormLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        alert("Error signing in: " + error.message);
        setLoading(false);
      } else {
        router.push("/profile");
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
      setLoading(false);
    }
  };

  const openModal = () => {
    const checkCookies = Cookies.get("successRegister");
    if (checkCookies) {
      setShowModal(true);
      Cookies.remove("successRegister");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    openModal();
  }, []);

  return (
    <div
      className="container d-flex justify-content-center align-items-center p-0"
      style={{ minHeight: "100vh" }}
      data-aos="fade"
    >
      <div
        className="row card container mx-3 d-flex flex-row shadow border border-none p-0"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="col-md-6 d-none d-lg-block border-end rounded-start-2"
          style={{
            backgroundImage: `url(${BackgroundSide.src})`,
            backgroundSize: "cover",
            height: "100%",
          }}
        >
          <div className="d-flex justify-content-center">
            <Lottie
              animationData={LoginGif}
              style={{ width: "75%", minHeight: "80vh" }}
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className={`${styles["card-width"]}`}>
            <div className="card-body">
              <div className="my-5 fs-2 text-center">ADMIN LOGIN</div>
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
                    className={`mb-3 rounded-5 text-white d-flex align-items-center justify-content-center ${styles["btn-login"]}`}
                    onClick={() => setLoading(true)}
                  >
                    {loading ? (
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                    ) : (
                      <span>Login</span>
                    )}
                  </button>
                </div>
              </form>
              <Link
                href="/"
                className="text-dark fw-bold text-decoration-none mb-5 d-flex align-items-center justify-content-center"
              >
                <div className={`${styles["change-page"]}`}>
                  Hubungi Sie Karya untuk membuat akun Admin
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
                        Anda Telah Berhasil Mendaftar Silahkan Check Email Anda
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
