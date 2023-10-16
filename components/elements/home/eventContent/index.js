import Lottie from "lottie-react";
import styles from "./eventContent.module.css";
import WebinarAnimation from "/assets/gifs/webinar.json";
import Link from "next/link";

export default function EventContent() {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 ">
            <Lottie
              animationData={WebinarAnimation}
              autoPlay={true}
              loop={true}
              className="img-fluid"
              data-aos="fade-up"
            />
          </div>
          <div className="col-12 col-md-7 mt-5" data-aos="fade">
            <div className={`${styles["title-font"]}`}>
              Creative <span className="title-span">Exploration</span> In
              Frontend : <span className="title-span">Building </span>Web{" "}
              <span className="title-span">Design</span> with{" "}
              <span className="title-span">Bootstrap </span>for the{" "}
              <span className="title-span"> Digital </span> Generation
            </div>
            <div className={`${styles["description-font"]}`}>
              Seminar nasional merupakan Salah satu kegiatan dalam FOSTIFEST
              2023 dengan mengusung tema "Creative Exploration in Frontend:
              Building web design with Bootstrap for the Digital Generation".
              Menghadirkan pembicara yang ahli dan professional untuk
              meningkatkan kemampuan di bidang IT untuk masyarakat umum. Seminar
              ini diselenggarakan secara hybrid dengan kouta peserta offline
              diestimasi sebanyak 100 peserta.
            </div>
            <Link href={"/register"} className="text-decoration-none">
              <div className={`${styles["btn-custom-2"]} mt-3`}>
                Daftar Seminar
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
