import { useEffect, useState } from "react";
import styles from "./admin.module.css";
import supabase from "@/api/supabase";
import Lottie from "lottie-react";
import paymentsImage from "@/assets/gifs/payments.json";
import deleteImage from "@/assets/gifs/delete.json";

export default function Manager() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState([]);
    const [verif, setVerif] = useState();

    const fetchUsers = async () => {
        const { data: usersData, error: fetchError } = await supabase.from("users").select().ilike("instansi", "panitia");
        if (fetchError) {
            setError(fetchError);
        } else {
            setUsers(usersData);
            setSearch(usersData);
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

    const handlePromote = async (id) => {
        try {
            const { error } = await supabase.from("users").update({ is_admin: true }).eq("id_user", id);

            if (error) {
                throw new Error(error.message);
            }

            window.location.reload();
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    const handleDemote = async (id) => {
        try {
            const { error } = await supabase.from("users").update({ is_admin: false }).eq("id_user", id);

            if (error) {
                throw new Error(error.message);
            }

            window.location.reload();
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="container pb-3">
            <p className="fw-bold">Data Administrator</p>
            <div className={`mb-3 ${styles["search-box"]}`}>
                <input type="text" placeholder="Search User's Name" onChange={handleSearch} />
            </div>
            {search.length === 0 && <p className="text-danger">Maaf, Tidak/Belum Ada Data Peserta Lomba</p>}
            {search.length > 0 && (
                <div>
                    <div className="table-responsive">
                        <table className={`table table-striped ${styles["table"]}`} style={{ whiteSpace: "nowrap" }}>
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>Nama</th>
                                    <th>Instansi</th>
                                    <th>Email</th>
                                    <th>No Telp</th>
                                    <th>Status</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {search.map((user, index) => (
                                    <tr
                                        key={user.id_user}
                                        style={{
                                            fontSize: "14px",
                                        }}
                                    >
                                        <td data="NO">{index + 1}</td>
                                        <td data="Nama">{user.nama}</td>
                                        <td data="Instansi" className="text-uppercase">{user.instansi}</td>
                                        <td data="Email">{user.email}</td>
                                        <td data="No Telp">{user.no_telp}</td>
                                        <td data="Status">{user.is_admin ? (
                                            user.super_admin ? ('Super Admin') : ('Admin')
                                        ) : ('User')}</td>
                                        <td data="Aksi">
                                            <div className="d-flex gap-3">
                                                {user.super_admin ? ("Anti Demote") : user.is_admin ? (
                                                    <button className="btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target={`#modal-demote`} onClick={() => setVerif({ name: user.nama, id: user.id_user })}>
                                                        Demote Admin
                                                    </button>
                                                ) : (
                                                    <button className="btn btn-outline-warning btn-sm" data-bs-toggle="modal" data-bs-target={`#modal-promote`} onClick={() => setVerif({ name: user.nama, id: user.id_user })}>
                                                        Promote Admin
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="modal fade" id={`modal-promote`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                                        Promote Role
                                    </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {verif && (
                                        <div className="container-fluid">
                                            <div className="d-flex justify-content-center">
                                                <Lottie animationData={deleteImage} autoPlay={true} loop={true} className="w-50" />
                                            </div>
                                            <div className="my-4 text-center">
                                                <small className="fw-bold">Promote Role Atas Nama {verif.name} ?</small>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-success rounded-4" onClick={() => handlePromote(verif.id)}>
                                                    Confirm
                                                </button>
                                                <button type="button" className="btn btn-danger ms-3 rounded-4" data-bs-dismiss="modal">
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id={`modal-demote`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                                        Demote Role
                                    </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {verif && (
                                        <div className="container-fluid">
                                            <div className="d-flex justify-content-center">
                                                <Lottie animationData={deleteImage} autoPlay={true} loop={true} className="w-50" />
                                            </div>
                                            <div className="my-4 text-center">
                                                <small className="fw-bold">Demote Role Atas Nama {verif.name} ?</small>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <button type="button" className="btn btn-success rounded-4" onClick={() => handleDemote(verif.id)}>
                                                    Confirm
                                                </button>
                                                <button type="button" className="btn btn-danger ms-3 rounded-4" data-bs-dismiss="modal">
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}