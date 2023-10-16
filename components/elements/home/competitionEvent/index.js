import LombaAnimation from "/assets/gifs/lomba.json";
import styles from "./competitionEvent.module.css";
import Lottie from "lottie-react";
import Link from "next/link";

const CompetitionEvent = () => {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 d-md-none d-block ">
            <Lottie
              animationData={LombaAnimation}
              autoPlay={true}
              loop={true}
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
          <div className="col-12 col-md-7 mt-5" data-aos="fade">
            <div className={`${styles["title-font"]}`}>
              Create <span className="title-span">A Company</span> Profile{" "}
              <span className="title-span">Website</span> : Nusantara
            </div>
            <div className={`${styles["description-font"]}`}>
              Lomba landing page merupakan salah satu rangkaian kegiatan pada
              FOSTIFEST 2023 yang diselenggarakan oleh Forum Open Source Teknik
              Informatika (FOSTI) Universitas Muhammadiyah Surakarta. Lomba
              landing page ini diselenggarakan untuk masyarakat umum di seluruh
              Indonesia. Lomba ini menguji peserta dalam merancang dan
              mengembangkan halaman awal (landing page) yang menarik dan
              efektif. Tujuan lomba ini adalah untuk memungkinkan peserta untuk
              menunjukkan keterampilan desain, pemahaman tentang pengalaman
              pengguna, dan kemampuan mengkomunikasikan pesan yang kuat melalui
              desain web..
            </div>
            <Link href={"/register"} className="text-decoration-none">
              <div className={`${styles["btn-custom-2"]} mt-3`}>
                Daftar Lomba
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-5 d-md-block d-none ">
            <Lottie
              animationData={LombaAnimation}
              autoPlay={true}
              loop={true}
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionEvent;
