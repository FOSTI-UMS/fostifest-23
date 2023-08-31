import styles from "./header.module.css";
import CountDown from "../countDown";
import Link from "next/link";
import timer from "@/api/timer";
import { useEffect, useState } from "react";

export default function Header() {
  const [timerData, setTimerData] = useState({});
  const time_strt = new Date(timerData.time_start).getTime();
  const time_ends = new Date(timerData.time_end).getTime();
  const sekarang = new Date().getTime();

  useEffect(() => {
    async function fetchTimerData() {
      const data = await timer("pendaftaran");
      setTimerData(data);
    }

    fetchTimerData();
  }, []);

  return (
    <div className={styles["header"]}>
      <div className="container">
        <div
          className="mb-5 flex-column d-flex align-items-center justify-content-center"
          data-aos="fade-up"
        >
          <div className=" col text-center d-flex justify-content-center">
            <div
              className={`${styles["fostifest-title-font"]} text-center text-center mb-4`}
            >
              <span className="title-span"> Ayo</span> Jelajahi
              <span className="title-span"> Lebih </span>Jauh{" "}
              <span className="title-span">Tentang</span> FOSTIFEST
            </div>
          </div>
          <div className="col mb-3">
            <small
              className={`${styles["fostifest-description-font"]} fw-bold text-secondary`}
            >
              {
                time_strt > sekarang ? (
                  "Waktu Pendaftaran Akan Dimulai"
                ) : (
                  time_ends > sekarang ? (
                    "Waktu Pendaftaran Akan Berakhir"
                  ) : (
                    "Waktu Pendaftaran Telah Berakhir"
                  )
                )
              }
            </small>
          </div>
          <CountDown />
          <div className="col mb-3">
            <small
              className={`${styles["fostifest-description-font"]} fw-bold text-secondary`}
            >
              {
                time_strt > sekarang ? (
                  timerData.time_start &&
                  new Date(timerData.time_start).toLocaleString('id-ID', {
                    timeZone: 'Asia/Jakarta',
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                  })
                ) : (
                  timerData.time_end &&
                  new Date(timerData.time_end).toLocaleString('id-ID', {
                    timeZone: 'Asia/Jakarta',
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                  })
                )
              }
            </small>
          </div>
          <div className="col">
            <Link className={`${styles["btn-custom"]} btn`} href={"/register"}>
              Daftar Sekarang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
