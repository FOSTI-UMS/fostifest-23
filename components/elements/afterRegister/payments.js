import Link from "next/link";
import styles from "./style.module.css";

export default function Payments() {
  return (
    <div className="container" data-aos="fade-up">
      <div className={`${styles["content"]}`}>
        <div className="row mb-3">
          <h3 className="fw-bold">Petunjuk Pembayaran</h3>
        </div>
        <div className="row mb-3">
          <p className={styles["description"]}>
            1. Peserta Membayar 35.000 (Lomba) dan 15.000 (Seminar) <br />
            2. Metode pembayaran yang di sediakan : <br />
            • Rekening : Transfer Bank BRI dengan No Rekening :
            0182-01-058297-50-0 AN HANIFAH EKA CAHYANI <br />
            • E-Wallet : Kirim Shopeepay dengan No Telp : +62 812-4963-9524
            <br />
            • E-Wallet : Kirim Sea Bank dengan No : 901979030610 AN HANIFAH
            <br />
            3. Setelah melakukan pembayaran harap menghubungi admin kami untuk
            validasi pembayaran : <br />• Admin 1 +62 812-4653-1544 (Viki)
          </p>
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
    </div>
  );
}

// <div className={`${styles["content"]}`}>
//   <div
//     className={`fw-bold text-center mb-5 d-flex justify-content-center align-items-center ${styles["title"]}`}
//   >
//     Langkah - Langkah Mendaftar FOSTIFEST 3.0
//   </div>
//   <div className={`${styles["description"]}`}>
//     1. Registrasi dengan E-Wallet ataupun Rekening <br /> <br />
//     2. Metode pembayaran yang di sediakan : <br /> <br />
//     • Rekening : Transfer Bank BSI dengan No Rekening : ****************** /
//     AN Dizzo <br /> <br />• E-Wallet : Kirim DANA dengan No Telp :
//     ****************** / AN Dizzo <br /> <br />
//     3. Setelah melakukan pembayaran harap menghubungi admin kami untuk
//     validasi pembayaran :<br /> <br />• Admin 1 +628********** ( Rekening ){" "}
//     <br />• Admin 2 +628********** ( E-Wallet )
//   </div>
// </div>
