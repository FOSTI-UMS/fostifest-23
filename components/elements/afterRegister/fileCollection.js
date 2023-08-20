import styles from "./style.module.css";
import { FiLogOut } from "react-icons/fi";

export default function FileCollection() {
  return (
    <div className={`${styles["content-pengumpulan"]} `} data-aos="fade">
      <div className="row mb-3">
        <div className="col d-flex justify-content-end">
          <button className={`${styles["logout-btn"]} btn rounded-4`}>
            <FiLogOut /> Logout
          </button>
        </div>
      </div>
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
  );
}
