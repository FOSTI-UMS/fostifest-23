import { useEffect, useState } from "react";
import supabase from "@/api/supabase";
import Lottie from "lottie-react";
import profileImage from "@/assets/gifs/profile-blue.json";
import Logout from "@/components/elements/logout";
import Link from "next/link";
import styles from "./profile.module.css";
import Image from "next/image";
import EmailImg from "@/assets/images/email.png";
import BackgroundSide from "@/assets/images/bg_profile.png";
import InstansiImg from "@/assets/images/school.png";
import JenisImg from "@/assets/images/internet.png";
import StatusImg from "@/assets/images/verified.png";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const [identitas, setIds] = useState({});
  const [admon, setAdmon] = useState();
  const [greetz, setGreeting] = useState();

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data: usersData, error: fetchError } = await supabase.from("users").select().eq("email", user.email);
    if (fetchError) {
      alert(fetchError.message);
    } else {
      setUsers(user);
      if (usersData.length > 0) {
        setIds(usersData[0]);
        setAdmon(usersData[0].is_admin);
      }
    }
  };

  const greet = () => {
    const date = new Date();
    const hour = date.getHours();
    if (hour < 12 && hour >= 5) {
      setGreeting("Selamat Pagi 🌞");
    } else if (hour < 15 && hour >= 12) {
      setGreeting("Selamat Siang 🌤️");
    } else if (hour >= 15 && hour < 19) {
      setGreeting("Selamat Sore 🌇");
    } else {
      setGreeting("Selamat Malam 🌕");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    greet();
  }, []);

  console.log(identitas);

  return (
    <div className="container-sm">
      <div
        className="card container col-lg-8 z-2 shadow rounded-4"
        style={{
          margin: "170px auto",
        }}
      >
        <div className="card-body text-center d-flex flex-column justify-content-center align-items-center">
          <Lottie className={`position-absolute ${styles.lottie}`} animationData={profileImage} autoPlay={true} loop={true} />
          <div
            className="card-title fs-2 fw-bold"
            style={{
              marginTop: "100px",
            }}
          >
            {identitas && identitas.nama ? identitas.nama.toUpperCase() : ""}
          </div>
          <div className=" card-text text-secondary d-flex align-items-center gap-2 mb-3 ">
            <Image src={EmailImg} height={20} width={20} alt="email" />
            {identitas.email}
          </div>
        </div>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                <div className="d-flex align-items-center gap-2">
                  <Image src={InstansiImg} height={25} width={25} alt="instansi" />
                  Instansi
                </div>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">{identitas.instansi ? identitas.instansi.toUpperCase() : "-"}</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                <div className="d-flex align-items-center gap-2">
                  <Image src={JenisImg} height={25} width={25} alt="jenis" />
                  Jenis
                </div>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
                {identitas.jenis === "WEBINAR" ? (
                  <span className="badge text-bg-primary">Webinar</span>
                ) : (
                  <span>
                    <span className="badge text-bg-primary me-1">Webinar</span>
                    <h3 className="badge text-bg-info">Lomba Design</h3>
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                <div className="d-flex align-items-center gap-2">
                  <Image src={StatusImg} height={20} width={20} alt="status" />
                  Status Pembayaran
                </div>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body">{!identitas.payment_verif ? <span className="badge rounded-pill text-bg-danger">Belum Bayar</span> : <span className="badge rounded-pill text-bg-success">Sudah Bayar</span>}</div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-3 mb-3">
          <Logout />
          {admon ? (
            <Link href="/admin" className="mb-3 ms-3 btn btn-outline-warning d-flex align-items-center justify-content-center">
              Halaman Admin
            </Link>
          ) : !identitas.payment_verif ? (
            <Link href="/payments" className="mb-3 ms-3 btn btn-outline-primary d-flex align-items-center justify-content-center">
              Cara Pembayaran
            </Link>
          ) : identitas.jenis === "LOMBA DESIGN" ? (
            <Link href="/file-collection" className="mb-3 ms-3 btn btn-outline-primary d-flex align-items-center justify-content-center">
              Pengumpulan File
            </Link>
          ) : (
            <Link href="/webinar" className="mb-3 ms-3 btn btn-outline-primary disabled d-flex align-items-center justify-content-center">
              Halaman Webinar
            </Link>
          )}
        </div>
      </div>
      <div
        className={`fixed-top z-1 ${styles["profile-background"]}`}
        style={{
          backgroundImage: `url(${BackgroundSide.src})`,
        }}
      ></div>
      <div className={`bg-white shadow-lg fixed-bottom position-fixed z-1 ${styles["bottom-container"]}`}></div>
    </div>
  );
}

// return (
//   <div className={`${styles["profile-box"]}`}>
//     <div className={`row row-cols-1 row-cols-lg-2 align-items-start ${styles["profile-in-box"]}`}>
//       <div
//         className={`col d-flex justify-content-center align-items-center ${styles["lottie"]}`}
//         style={{
//           backgroundImage: `url(${BackgroundSide.src})`,
//         }}
//       >
//         <Lottie
//           animationData={profileImage}
//           autoPlay={true}
//           loop={false}
//           style={{
//             height: "100%",
//           }}
//         />
//       </div>
//       <div className={`col ${styles.profile}`}>
//         <div className={`${styles["profile-title"]} fw-bold d-flex flex-column justify-content-center align-items-center text-center`}>
//           <span className="fs-1">Hallo</span>
//           <span
//             style={{
//               color: "#04697c",
//             }}
//           >
//             {identitas.nama} <Image src={HalloImg} className={styles["image-hallo"]} alt="hallo" />
//           </span>
//           <div>{greetz}</div>
//         </div>
//         <hr className="mb-4" />
// {admon ? (
//   // <div>
//   //   Email: {identitas.email}
//   //   <br />
//   //   Instansi: {identitas.instansi ? identitas.instansi.toUpperCase() : "-"}
//   //   <br />

//   // FRONT-END
//   <div className={styles["profile-data"]}>
//     <div className="d-flex align-items-center gap-2 mb-3 ">
//       <Image src={EmailImg} height={20} width={20} alt="email" />
//       <span> Email : {identitas.email}</span>
//     </div>
//     <div className="d-flex align-items-center gap-2 mb-3">
//       <Image src={InstansiImg} height={20} width={20} alt="instansi" />
//       Instansi: {identitas.instansi ? identitas.instansi.toUpperCase() : "-"}
//     </div>

//     {/* Kontak Superadmin: //no.wa CO Sie Karya// */}
//   </div>
// ) : (
//           <div className={styles["profile-data"]}>
//             <div className="d-flex align-items-center gap-2 mb-3 ">
//               <Image src={EmailImg} height={20} width={20} alt="email" />
//               <span> Email : {identitas.email}</span>
//             </div>
//             <div className="d-flex align-items-center gap-2 mb-3">
//               <Image src={InstansiImg} height={20} width={20} alt="instansi" />
//               Instansi: {identitas.instansi ? identitas.instansi.toUpperCase() : "-"}
//             </div>
//             <div className="d-flex align-items-center gap-2 mb-3">
//               <Image src={JenisImg} height={20} width={20} alt="jenis" />
//               Jenis:
//               {identitas.jenis === "WEBINAR" ? (
//                 <span className="badge text-bg-primary">Webinar</span>
//               ) : (
//                 <span>
//                   <span className="badge text-bg-primary me-1">Webinar</span>
//                   <span className="badge text-bg-info">Lomba Design</span>
//                 </span>
//               )}
//             </div>
//             <div className="d-flex align-items-center gap-2 mb-4">
//               <Image src={StatusImg} height={20} width={20} alt="status" />
//               Status Pembayaran: {!identitas.payment_verif ? <span className="badge rounded-pill text-bg-danger">Belum Bayar</span> : <span className="badge rounded-pill text-bg-success">Sudah Bayar</span>}
//             </div>
//           </div>
//         )}
//         <div className="d-flex mt-3">
//           <Logout className={styles.logout} />
//           {admon ? (
//             <Link href="/admin" className="mb-3 ms-3 btn btn-outline-warning d-flex align-items-center justify-content-center">
//               Halaman Admin
//             </Link>
//           ) : !identitas.payment_verif ? (
//             <Link href="/payments" className="mb-3 ms-3 btn btn-outline-primary d-flex align-items-center justify-content-center">
//               Cara Pembayaran
//             </Link>
//           ) : identitas.jenis === "LOMBA DESIGN" ? (
//             <Link href="/file-collection" className="mb-3 ms-3 btn btn-outline-primary d-flex align-items-center justify-content-center">
//               Pengumpulan File
//             </Link>
//           ) : (
//             <Link href="/webinar" className="mb-3 ms-3 btn btn-outline-primary disabled d-flex align-items-center justify-content-center">
//               Halaman Webinar
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   </div>
// );
