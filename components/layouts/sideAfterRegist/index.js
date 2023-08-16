import { useRouter } from "next/router";
import Image from "next/image";
import BackgroundSide from "/assets/images/background_side.png";
import InstagramLogo from "/assets/images/instagram.png";
import GithubLogo from "/assets/images/github-logo.png";
import WaLogo from "/assets/images/wa.png";
import LogoFostiFest from "/assets/images/logo_fostifest_2.png";
import Link from "next/link";
import styles from "./side_content.module.css";
import { useEffect, useState } from "react";

// page yang ada side contentnya
const enableSide = ["/webinar", "/competition", "/pengumpulan"];

export default function SideContentAfterRegist(props) {
  const { children } = props;
  const { pathname } = useRouter();
  const [isSideVisible, setIsSideVisible] = useState(true);
  // fungsi buat pas layar mobile, side content nya hilang
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1025) {
        setIsSideVisible(false);
      } else {
        setIsSideVisible(enableSide.includes(pathname));
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  return (
    <main>
      {/*buat page yang ada side contentnya dan buat pas layar mobile, side content nya hilang */}
      {enableSide.includes(pathname) && isSideVisible && (
        <div
          className="m-0 p-0 d-flex flex-row overflow-hidden align-items-center justify-content-start"
          style={{
            height: "100vh",
          }}
        >
          <div className={`d-flex flex-row ${styles["context-box"]} align-items-center justify-content-start`}>
            <div
              className={`d-flex bg-primary flex-row align-items-center justify-content-center `}
              style={{
                backgroundImage: `url(${BackgroundSide.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "445px",
                height: "100vh",
                boxShadow: "5px 0px 10px rgba(0, 0, 0, 0.2)",
                marginRight: "50px",
              }}
            >
              <div className={`d-flex flex-column align-items-center justify-content-center ${styles["logo-fostifest"]}`}>
                <Image src={LogoFostiFest} height={200} width={200} alt="fostifest_logo" />
                <div className={`d-flex justify-content-center align-items-center fw-bold text-light mb-4 ${styles["find-us-on"]}`}>Find Us On</div>
                <div className={`d-flex justify-content-center align-items-center fw-bold text-light ${styles["social-media"]}`}>
                  <div className="d-flex flex-row">
                    <Link href="#" className="me-3" >
                      <Image src={InstagramLogo} width={40} height={40} alt="ig"/>
                    </Link>
                    <Link href="#" className="me-3" >
                      <Image src={GithubLogo} width={40} height={40} alt="github"/>
                    </Link>
                    <Link href="#">
                      <Image src={WaLogo} width={40} height={40}  alt="wa"/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">{children}</div>
          </div>
        </div>
      )}
      {!isSideVisible && <div className="m-4 d-flex flex-column align-items-center justify-content-center ">{children}</div>}
    </main>
  );
}
