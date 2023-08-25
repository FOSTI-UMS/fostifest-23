import { useEffect, useState } from "react";
import supabase from "@/api/supabase";
import Lottie from "lottie-react";
import profileImage from "@/assets/gifs/profile.json";
import Logout from "@/components/elements/logout";
import Link from "next/link";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const [identitas, setIds] = useState({});
  const [admon, setAdmon] = useState();
  const [greetz, setGreeting] = useState();

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { data: usersData, error: fetchError } = await supabase
      .from("users")
      .select()
      .eq("email", user.email);
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
    } else if (hour >= 15 && hour < 19){
      setGreeting("Selamat Sore 🌇");
    } else {
      setGreeting("Selamat Malam 🌕");
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    greet();
  }, []);

  console.log(identitas);

  return (
    <div className="container">
      <div
        className="row row-cols-1 row-cols-md-2 g-4 align-items-center"
        style={{ minHeight: "70vh" }}
      >
        <div className="col d-flex justify-content-center" data-aos="fade-up">
          <Lottie
            animationData={profileImage}
            autoPlay={true}
            loop={true}
            className="w-50"
          />
        </div>
        <div className="col" data-aos="fade-up">
          <h4 className="fw-bold">Hallo, {identitas.nama}.</h4>
          <h4 className="fw-bold">{greetz}</h4>
            {admon ? (
              <div>
                Email: {identitas.email}
                <br />
                Instansi: {identitas.instansi ? (identitas.instansi).toUpperCase() : "-"}
                <br />
                Kontak Superadmin: //no.wa CO Sie Karya//
              </div>
            ) : (
              <div>
                Email: {identitas.email}
                <br />
                Instansi: {identitas.instansi ? (identitas.instansi).toUpperCase() : "-"}
                <br />
                Jenis: {identitas.jenis === "WEBINAR" ? (<span class="badge text-bg-primary">Webinar</span>) : (<span><span class="badge text-bg-primary me-1">Webinar</span><span class="badge text-bg-info">Lomba Design</span></span>)}
                <br />
                Status Pembayaran: {!identitas.payment_verif ? (<span class="badge rounded-pill text-bg-danger">Belum Bayar</span>) : (<span class="badge rounded-pill text-bg-success">Sudah Bayar</span>)}
              </div>
            )}
          <div className="d-flex mt-3">
            <Logout />
            {admon ? (
              <Link
                href="/admin"
                className="mb-3 ms-3 btn btn-outline-warning d-flex align-items-center justify-content-center"
              >
                Halaman Admin
              </Link>
            ) : !identitas.payment_verif ? (
              <Link
                href="/payments"
                className="mb-3 ms-3 btn btn-outline-primary d-flex align-items-center justify-content-center"
              >
                Cara Pembayaran
              </Link>
            ) : identitas.jenis === "LOMBA DESIGN" ? (
              <Link
                href="/file-collection"
                className="mb-3 ms-3 btn btn-outline-primary d-flex align-items-center justify-content-center"
              >
                Pengumpulan File
              </Link>
            ) : (
              <Link
                href="/webinar"
                className="mb-3 ms-3 btn btn-outline-primary disabled d-flex align-items-center justify-content-center"
              >
                Halaman Webinar
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
