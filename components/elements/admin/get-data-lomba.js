import { useEffect, useState } from "react";
import styles from "./admin.module.css";
import supabase from "@/api/supabase";

export default function GetDataLomba() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(users);

  const fetchUsers = async () => {
    const { data: usersData, error: fetchError } = await supabase
      .from("users")
      .select()
      .eq("jenis", "web design");
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
    <div className="container pt-3 mt-3">
      <p className="fw-bold">Data User Lomba</p>
      <div className={`mb-3 ${styles["search-box"]}`}>
        <input
          type="text"
          placeholder="Search User's Name"
          onChange={handleSearch}
        />
      </div>
      {search.length === 0 && (
        <p className="text-danger">Maaf, Tidak/Belum Ada Data Peserta Lomba</p>
      )}
      {search.length > 0 && (
        <table className={`table table-striped ${styles["table"]}`}>
          <thead>
            <tr>
              <th>ID</th>
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
            {search.map((user) => (
              <tr
                key={user.id_user}
                style={{
                  fontSize: "14px",
                }}
              >
                <td data="ID">{user.id_user}</td>
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
