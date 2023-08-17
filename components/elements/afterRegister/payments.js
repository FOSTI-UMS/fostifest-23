import styles from "./style.module.css";

export default function Payments() {
  return (
    <div className={`${styles["content"]}`}>
      <div
        className={`fw-bold text-center mb-5 d-flex justify-content-center align-items-center ${styles["title"]}`}
      >
        Langkah - Langkah Mendaftar FOSTIFEST 3.0
      </div>
      <div className={`${styles["description"]}`}>
        1. Registrasi dengan E-Wallet ataupun Rekening <br /> <br />
        2. Metode pembayaran yang di sediakan : <br /> <br />
        • Rekening : Transfer Bank BSI dengan No Rekening : ****************** /
        AN Dizzo <br /> <br />• E-Wallet : Kirim DANA dengan No Telp :
        ****************** / AN Dizzo <br /> <br />
        3. Setelah melakukan pembayaran harap menghubungi admin kami untuk
        validasi pembayaran :<br /> <br />• Admin 1 +628********** ( Rekening ){" "}
        <br />• Admin 2 +628********** ( E-Wallet )
      </div>
    </div>
  );
}
