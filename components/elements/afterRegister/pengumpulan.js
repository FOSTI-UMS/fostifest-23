import styles from "./style.module.css";

export default function Pengumpulan() {
  return (
    <div className={`${styles["content-pengumpulan"]} `}>
      <div className={`fw-bold text-center mb-5 d-flex justify-content-center align-items-center  ${styles["title"]}`}>Pengumpulan Hasil Desain Landing Page</div>
      <div className={`input-group ${styles["input-box"]}`}>
        <input type="file" className={`form-control ${styles["input"]}`} id="inputGroupFile02" />
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
