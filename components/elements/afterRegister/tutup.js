import Link from "next/link";
import styles from "./style.module.css";

export default function PendaftaranTutup() {
  return (
    <div className={`${styles["close-register"]}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3 className="fw-bold">
              Selamat! FOSTIFEST 2023 Telah Menyelesaikan Babak Pendaftaran
            </h3>
            <p>Terima kasih telah mengikuti FOSTIFEST 2023</p>
            <Link className="btn btn-primary rounded-4" href={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
