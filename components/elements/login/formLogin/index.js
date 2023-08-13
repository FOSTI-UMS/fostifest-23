import styles from "./login.module.css";
import Link from "next/link";

export default function FormLogin({ title, href, submit, changePage }) {
  return (
    <div className={`text-center container ${styles["form-box"]}`}>
      <p className="fw-bold pt-5">{title}</p>
      <div className="d-flex align-items-center justify-content-center flex-column mb-3">
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
      <Link href={"#"} className="text-white fw-bold text-decoration-none d-flex align-items-center justify-content-center">
        <div className={`mb-3 d-flex align-items-center justify-content-center ${styles["btn-login"]}`}>{submit}</div>
      </Link>
      <Link href={href} className="text-dark fw-bold text-decoration-none mb-5 d-flex align-items-center justify-content-center">
        <div className={`${styles["change-page"]}`}>{changePage}</div>
      </Link>
    </div>
  );
}
