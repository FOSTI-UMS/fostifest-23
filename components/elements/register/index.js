import styles from "./register.module.css";
import LoginGif from "/assets/gifs/login_2.json";
import Lottie from "lottie-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import supabase from "@/api/supabase";
import BackgroundSide from "@/assets/images/bg_login.png";
import PendaftaranTutup from "../afterRegister/tutup";

export default function FormRegister(){ 
  const [page, setPage] = useState("first");
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [instansi, setInstansi] = useState("");
  const [jenis, setJenis] = useState("WEBINAR");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [no_telp, setTelp] = useState("");
  const [note, setNote] = useState({});
  const defaultPayment = false;

  const handleRegist = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      // alert('Password should be at least 6 characters')
      setNote((previousState) => {
        return {
          ...previousState,
          notePass: "*Password should be at least 6 characters",
        };
      });
    } else {
      setNote((previousState) => {
        return {
          ...previousState,
          notePass: null,
        };
      });
    }

    try {
      const { data } = await supabase
        .from("users")
        .select("email")
        .eq("email", email);
      if (data.length > 0) {
        // alert("Email telah digunakan, gunakan email lain!");
        setNote((previousState) => {
          return {
            ...previousState,
            noteEmail: "*Email telah digunakan, gunakan email lain!",
          };
        });
      } else {
        setNote((previousState) => {
          return {
            ...previousState,
            noteEmail: null,
          };
        });
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          console.error("Error signing in:", error.message);
        } else {
          const { data: users, error: errorInsertUser } = await supabase
            .from("users")
            .insert({
              nama,
              alamat,
              instansi,
              email,
              jenis,
              no_telp,
              payment_verif: defaultPayment,
            })
            .select();
          if (errorInsertUser) {
            console.log(
              "ERROR while inserting user :",
              errorInsertUser.message
            );
          }
          // console.log(users);
          Cookies.set("successRegister", "true");
          router.replace("/login");
          // router.push({
          //   pathname: '/profile',
          //   query: { userData: JSON.stringify(data) },
          // });
        }
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  function capitalizeNames(fullName) {
    const nameArray = fullName.split(" ");
    const capitalizedNames = nameArray.map(
      (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    );
    return capitalizedNames.join(" ");
  }

  return (
    <div className="container d-flex justify-content-center align-items-center p-0" style={{ minHeight: "100vh" }} 
    data-aos="fade"
    >
    <div className="row card container mx-3 d-flex flex-row shadow border border-none p-0" style={{ minHeight: "80vh" }}>
      <div
        className="col-md-6 d-none d-lg-block border-end rounded-start-2"
        style={{ 
          backgroundImage: `url(${BackgroundSide.src})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <div
          className="d-flex justify-content-center" 
        >
          <Lottie animationData={LoginGif} style={{ width: "75%", minHeight: "85vh" }} />
        </div>
      </div>
        <div className="col-lg-6">
          <div
            className={`${styles["card-width"]}`}
          >
            <div className="card-body">
              <div className="fs-2 my-2 text-center">Register</div>
              <form onSubmit={handleRegist}>
                <div className={page === "first" ? "d-block" : "d-none"}>
                  <div className="mb-2 d-flex justify-content-end">
                    <small className="fw-bold text-primary">Step 1</small>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="namaLengkap"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="namaLengkap"
                      name="namaLengkap"
                      className={`form-control ${styles["input-custom"]}`}
                      onChange={(e) => setNama(capitalizeNames(e.target.value))}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="alamat"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      Alamat
                    </label>
                    <input
                      type="text"
                      id="alamat"
                      name="alamat"
                      className={`form-control ${styles["input-custom"]}`}
                      onChange={(e) => setAlamat(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="noTelp"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      No Telp
                    </label>
                    <input
                      type="number"
                      id="noTelp"
                      name="noTelp"
                      inputmode="none"
                      className={`form-control ${styles["input-custom"]}`}
                      onChange={(e) => setTelp(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="instansi"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      Asal Instansi{" "}
                      <span className="text-danger">*opsional</span>
                    </label>
                    <input
                      type="text"
                      id="instansi"
                      name="instansi"
                      className={`form-control ${styles["input-custom"]}`}
                      onChange={(e) =>
                        setInstansi(e.target.value.toLowerCase())
                      }
                    />
                  </div>
                  <div className="d-grid">
                    <button
                      type="button"
                      onClick={() => setPage("second")}
                      className={`btn ${styles["btn-login"]} rounded-4`}
                    >
                      Next
                    </button>
                  </div>
                </div>
                <div className={page === "second" ? "d-block" : "d-none"}>
                  <div className="mb-2 d-flex align-items-center">
                    <a
                      onClick={() => setPage("first")}
                      className={`${styles["btn-back"]} text-decoration-none ms-2`}
                    >
                      Kembali
                    </a>
                    <small className="fw-bold ms-auto text-primary">
                      Step 2
                    </small>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="inputEmail5"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
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
                    <p
                      style={{
                        fontSize: " 10px",
                        paddingLeft: "10px",
                        paddingTop: "5px",
                      }}
                      className="text-danger"
                    >
                      {note.noteEmail}
                    </p>
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="inputPassword5"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
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
                    <p
                      style={{
                        fontSize: " 10px",
                        paddingLeft: "10px",
                        paddingTop: "5px",
                      }}
                      className="text-danger"
                    >
                      {note.notePass}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="inputChoose"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      Pilih Event
                    </label>
                    <select
                      id="inputChoose"
                      name="event"
                      value={jenis}
                      className={`form-select ${styles["input-custom"]}`}
                      onChange={(e) => setJenis(e.target.value)}
                    >
                      <option value="WEBINAR">Webinar</option>
                      <option value="LOMBA DESIGN">Lomba Landing Page</option>
                    </select>
                  </div>
                  <div className="d-grid">
                    <button
                      type="submit"
                      className={`btn ${styles["btn-login"]} rounded-4`}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>

              <Link
                href="/login"
                className="text-dark fw-bold text-decoration-none mb-5 d-flex align-items-center justify-content-center mt-3"
              >
                <div className={`${styles["change-page"]}`}>
                  Sudah punya akun?
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
