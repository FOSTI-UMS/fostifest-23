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

  useEffect(() => {
    getUser();
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
          <h4 className="fw-bold">Hallo {identitas.nama}</h4>
          {admon ? (
            <div>
              Email: {identitas.email}
              <br />
              Instansi: {identitas.instansi ? identitas.instansi : "-"}
              <br />
              Kontak Superadmin: //no.wa CO Sie Karya//
            </div>
          ) : (
            <div>
              Email: {identitas.email}
              <br />
              Instansi: {identitas.instansi ? identitas.instansi : "-"}
              <br />
              Jenis: {identitas.jenis}
              <br />
              Status Pembayaran:{" "}
              {identitas.payment_verif ? "Sudah Bayar" : "Belum Bayar"}
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
