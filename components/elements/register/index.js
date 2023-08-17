import styles from "./register.module.css";
import Link from "next/link";

export default function FormRegister() {
  return (
    <div className="container py-3">
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-8">
          <div className="card rounded-4 shadow">
            <div className="card-body">
              <div className="fw-bold my-2  text-center">Register</div>
              <form>
                <div className="mb-2">
                  <label
                    htmlFor="namaLengkap"
                    className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className={`form-control ${styles["input-custom"]}`}
                  />
                </div>
                <div className="mb-2 ">
                  <label
                    htmlFor="alamat"
                    className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                  >
                    Alamat
                  </label>
                  <input
                    type="text"
                    className={`form-control ${styles["input-custom"]}`}
                  />
                </div>
                <div className="mb-2 ">
                  <label
                    htmlFor="noTelp"
                    className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                  >
                    No Telp
                  </label>
                  <input
                    type="number"
                    className={`form-control ${styles["input-custom"]}`}
                  />
                </div>
                <div className="mb-2 ">
                  <label
                    htmlFor="inputEmail5"
                    className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${styles["input-custom"]}`}
                    aria-describedby="emailHelpBlock"
                  />
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
                    className={`form-control ${styles["input-custom"]}`}
                    aria-describedby="passwordHelpBlock"
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="inputChoose"
                    className={`fw-bold form-label me-auto ms-2 ${styles["label-custom"]}`}
                  >
                    Pilih Event
                  </label>
                  <select className={`form-select ${styles["input-custom"]}`}>
                    <option value={"webinar"}>Webinar</option>
                    <option value={"lomba"}>Lomba Landing Page</option>
                  </select>
                </div>
                <div className="text-white fw-bold text-decoration-none d-flex align-items-center justify-content-center">
                  <button
                    type="submit"
                    className={`my-3 text-white fw-bold d-flex align-items-center justify-content-center ${styles["btn-login"]}`}
                  >
                    Register
                  </button>
                </div>
              </form>
              <Link
                href="/login"
                className="text-dark fw-bold text-decoration-none mb-5 d-flex align-items-center justify-content-center"
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
