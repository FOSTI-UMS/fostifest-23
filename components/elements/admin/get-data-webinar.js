import { useEffect, useState } from "react";
import supabase from "@/api/supabase";
import styles from "./admin.module.css";

export default function GetDataWebinar() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(users);

  const fetchUsers = async () => {
    const { data: usersData, error: fetchError } = await supabase
      .from("users")
      .select()
      .eq("jenis", "webinar");
    if (fetchError) {
      setError(fetchError);
    } else {
      setUsers(usersData);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    const sortedUser = users.filter((row) => {
      return row.nama.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setSearch(sortedUser);
  };

  return (
    <div className="pt-3 mt-3 px-5 mx-auto">
      <p className="fw-bold">Data User Webinar</p>
      <div className={`mb-3 ${styles["search-box"]}`}>
        <input
          type="text"
          placeholder="Search User's Name"
          onChange={handleSearch}
        />
      </div>
      {search.length === 0 && (
        <p className="text-danger">
          Maaf, Tidak/Belum Ada Data Peserta Webinar
        </p>
      )}
      {search.length > 0 && (
        <table className={`table table-striped ${styles["table"]}`}>
          <thead>
            <tr>
              <th>NO</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Instansi</th>
              <th>Email</th>
              <th>Jenis</th>
              <th>No Telp</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {search.map((user, index) => (
              <tr
                key={index}
                style={{
                  fontSize: "14px",
                }}
              >
                <td data="NO">{index + 1}</td>
                <td data="Nama">{user.nama}</td>
                <td data="Alamat">{user.alamat}</td>
                <td data="Instansi">{user.instansi}</td>
                <td data="Email">{user.email}</td>
                <td data="Jenis">{user.jenis}</td>
                <td data="No Telp">{user.no_telp}</td>
                <td data="Aksi">
                  <div className="d-flex gap-3">
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => {
                        window.location.href = `/api/verif/${user.nama}`;
                      }}
                    >
                      Verifikasi Pembayaran
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => {
                        window.location.href = `/api/hapus/${user.nama}`;
                      }}
                    >
                      Hapus User
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
