import { useEffect, useState } from "react";
import supabase from "@/api/supabase";
import Lottie from "lottie-react";
import profileImage from "@/assets/gifs/profile.json";
import Logout from "@/components/elements/logout";
import Link from "next/link";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const [identitas, setIds] = useState({});

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
      }
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <div
        className="row row-cols-1 row-cols-md-2 g-4 align-items-center"
        style={{ minHeight: "80vh" }}
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
          <p>
            Email: {identitas.email}
            <br />
            Instansi: {identitas.instansi ? identitas.instansi : "-"}
            <br />
            Jenis: {identitas.jenis}
            <br />
            Status Pembayaran:{" "}
            {identitas.payment_verif ? "Sudah Bayar" : "Belum Bayar"}
          </p>
          <div className="d-flex">
            <Logout />
            {!identitas.payment_verif ? (
              <Link
                href="/payments"
                className="mb-3 ms-3 btn btn-outline-primary d-flex align-items-center justify-content-center"
              >
                Cara Pembayaran
              </Link>
            ) : (
              <Link
                href="/file-collection"
                className="mb-3 ms-3 btn btn-outline-primary d-flex align-items-center justify-content-center"
              >
                Cara Pengumpulan
              </Link>
            )}
          </div>
          {identitas.jenis === "LOMBA DESIGN" ? ( <a href="/profile/upload">Upload File Lomba</a> ) : ("")}
        </div>
      </div>
    </div>
  );
}
