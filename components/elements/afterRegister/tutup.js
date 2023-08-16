import styles from "./style.module.css";

export default function PendaftaranTutup({ page }) {
  return (
    <div className={`${styles["content-tutup"]}`}>
      <div className={`fw-bold text-center mb-5 d-flex justify-content-center align-items-center ${styles["title"]}`}>Pendaftaran {page} FOSTIFEST 3.0 Telah Ditutup</div>
      <div className={`${styles["description"]} text-center d-flex justify-content-center align-items-center `}>Terima Kasih Atas Partisipasinya Sampai Jumpa di Event FOSTI Selanjutnya</div>
    </div>
  );
}
