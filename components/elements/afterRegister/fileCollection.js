import styles from "./style.module.css";
import Link from "next/link";

export default function FileCollection() {
  return (
    <div className={`${styles["content-pengumpulan"]} `} data-aos="fade">
      <div className="mb-3">
        <div
          className={`fw-bold text-center mb-5 d-flex justify-content-center align-items-center  ${styles["title"]}`}
        >
          Pengumpulan Hasil Desain Landing Page
        </div>
        <div className={`input-group ${styles["input-box"]}`}>
          <input
            type="file"
            className={`form-control ${styles["input"]}`}
            id="inputGroupFile02"
          />
        </div>
        <div className={`${styles["description"]}`}>
          <div>
            Note : <br />
            1. Format File Zip <br />
            2. Nama File ( contoh : Nama Kalian_Judul Karya)
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link
            href="/profile"
            className="btn btn-primary rounded-4"
            style={{ fontSize: "12px" }}
          >
            Kembali Ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
