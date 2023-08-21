import styles from "./navbar.module.css";
import LogoFostiFest from "/assets/images/logo_fostifest.png";
import TentangFosti from "/assets/images/web.png";
import RuleBook from "/assets/images/book.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow fixed-top " data-aos="fade-down">
      <div className="container">
        <Image src={LogoFostiFest} alt="logonavbar" height={50} priority />
        <button className={`navbar-toggler ${styles["burger-menu"]}`} onClick={updateMenu} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <div className={`${styles["burger-bar"]} ${isMenuClicked ? styles.clicked : styles.unclicked}`}></div>
          <div className={`${styles["burger-bar"]} ${isMenuClicked ? styles.clicked : styles.unclicked}`}></div>
          <div className={`${styles["burger-bar"]} ${isMenuClicked ? styles.clicked : styles.unclicked}`}></div>
        </button>
        <div className="collapse navbar-collapse mt-2 mb-2" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-5 fw-bold d-flex align-items-start justify-content-start ">
            <li className="nav-item me-5">
              <Link className={`${styles["li-navbar"]} nav-link d-flex align-items-center justify-content-center`} href="https://fostiums.org/">
                <Image src={TentangFosti} alt="TentangFosti" height={25} width={25} className="me-2 " />
                <h7 className={`text-dark ${styles["li-navbar-font"]}`}>Tentang FOSTI</h7>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`${styles["li-navbar"]} nav-link d-flex align-items-center justify-content-center`} href="#">
                <Image src={RuleBook} alt="TentangFosti" height={25} width={25} className="me-2 " />
                <h7 className={`text-dark ${styles["li-navbar-font"]}`}>Rule Book</h7>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
