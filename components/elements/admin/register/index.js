import styles from "./register.module.css";
import LoginGif from "/assets/gifs/login.json";
import Lottie from "lottie-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import supabase from "@/pages/api/supabase";

export default function AdminRegister() {
  const [page, setPage] = useState("first");
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [no_telp, setTelp] = useState("");
  const alamat = "";
  const instansi = "FOSTI";
  const jenis = "PANITIA";
  const [note, setNote] = useState({});
  const defaultPayment = true;
  const admin = true

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
              is_admin: admin,
            })
            .select();
          if (errorInsertUser) {
            console.log(
              "ERROR while inserting user :",
              errorInsertUser.message
            );
          }
          Cookies.set("successRegister", "true");
          router.replace("/admin/login");
        }
      }
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  function capitalizeNames(fullName) {
    const nameArray = fullName.split(' ');
    const capitalizedNames = nameArray.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
    return capitalizedNames.join(' ');
  }

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
              <div className="fw-bold my-2 text-center">Register</div>
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
                      htmlFor="noTelp"
                      className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                    >
                      No Telp
                    </label>
                    <input
                      type="number"
                      id="noTelp"
                      name="noTelp"
                      className={`form-control ${styles["input-custom"]}`}
                      onChange={(e) => setTelp(e.target.value)}
                    />
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
                href="/admin/login"
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
