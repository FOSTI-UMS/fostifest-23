import { useEffect, useState } from "react";
import styles from "./admin.module.css";
import supabase from "@/pages/api/supabase";
import Lottie from "lottie-react";
import deleteImage from "@/assets/gifs/delete.json";
import { uuid } from 'uuidv4';
import Link from "next/link";

export default function Manager() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState([]);
    const [verif, setVerif] = useState();
    const [token, setToken] = useState([]);
    const [pendaftaran, setPendaftaran] = useState({
        startDate: "",
        endDate: ""
    });
    const [pengumpulan, setPengumpulan] = useState({
        startDate: "",
        endDate: ""
    });

    const fetchUsers = async () => {
        const { data: usersData, error: fetchError } = await supabase.from("users").select().ilike("jenis", "panitia");
        if (fetchError) {
            setError(fetchError);
        } else {
            setUsers(usersData);
            setSearch(usersData);
        }
    };

    const fetchToken = async () => {
        const { data: tokenData, error: fetchError } = await supabase.from("token").select();
        if (fetchError) {
            setError(fetchError);
        } else {
            setToken([tokenData[0].id, tokenData[0].token, tokenData[0].is_expired]);
        }
    }

    const generateToken = async (id) => {
        try {
            const { error } = await supabase.from("token").update({ token: uuid() }).eq("id", id);
            fetchToken();
        }
        catch (error) {
            alert("Error: " + error.message);
        }
    }

    const getTimeDaftar = async () => {
        const { data: waktuPendaftaran, error: fetchError } = await supabase.from("timer").select("time_start, time_end").eq("codename", 'pendaftaran');
        if (fetchError) {
            alert(fetchError);
        } else {
            setPendaftaran({
                startDate: waktuPendaftaran[0].time_start,
                endDate: waktuPendaftaran[0].time_end
            });
        }
    }

    const getTimeUpload = async () => {
        const { data: waktuPengumpulan, error: fetchError } = await supabase.from("timer").select("time_start, time_end").eq("codename", 'pengumpulan');
        if (fetchError) {
            alert(fetchError);
        } else {
            setPengumpulan({
                startDate: waktuPengumpulan[0].time_start,
                endDate: waktuPengumpulan[0].time_end
            });
        }
    }

    const handleWaktuDaftar = (e) => {
        const { id, value } = e.target;
        setPendaftaran((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleWaktuUpload = (e) => {
        const { id, value } = e.target;
        setPengumpulan((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };

    const syncDaftar = async (e) => {
        e.preventDefault();
        const {data, error} = await supabase.from("timer").update({
            time_start: pendaftaran.startDate,
            time_end: pendaftaran.endDate
        }).eq("codename", 'pendaftaran');
        if (error) {
            alert(error);
        }
        window.location.reload();
    };

    const syncUpload = async (e) => {
        e.preventDefault();
        const {data, error} = await supabase.from("timer").update({
            time_start: pengumpulan.startDate,
            time_end: pengumpulan.endDate
        }).eq("codename", 'pengumpulan');
        if (error) {
            alert(error);
        }
        window.location.reload();
    };


    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        fetchToken();
    }, []);

    useEffect(() => {
        getTimeDaftar();
    }, []);

    useEffect(() => {
        getTimeUpload();
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
            <div className="mt-2">
                <p className="fw-bold">Setting Waktu</p>
                <hr />
                <form onSubmit={syncDaftar}>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="startDate" className="form-label">
                                Pendaftaran Dibuka
                            </label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="startDate"
                                value={pendaftaran.startDate}
                                onChange={handleWaktuDaftar} />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="endDate" className="form-label">
                                Pendaftaran Ditutup
                            </label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="endDate"
                                value={pendaftaran.endDate}
                                onChange={handleWaktuDaftar} />
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            <button type="submit" className="btn btn-outline-primary btn-sm">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
                <hr />
                <form onSubmit={syncUpload}>
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="startDate" className="form-label">
                                Pengumpulan File Dibuka
                            </label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="startDate"
                                value={pengumpulan.startDate}
                                onChange={handleWaktuUpload} />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="endDate" className="form-label">
                                Pengumpulan File Ditutup
                            </label>
                            <input
                                type="datetime-local"
                                className="form-control"
                                id="endDate"
                                value={pengumpulan.endDate}
                                onChange={handleWaktuUpload} />
                        </div>
                        <div className="col-md-3 d-flex align-items-center">
                            <button type="submit" className="btn btn-outline-primary btn-sm">
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <hr />
            <div className="mt-5">
                <p className="fw-bold">Register Token</p>
                <div className="table-responsive">
                    <table className={`table table-striped ${styles["table"]}`} style={{ whiteSpace: "nowrap" }}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Token</th>
                                <th>Status Token</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                style={{
                                    fontSize: "14px",
                                }}
                            >
                                <td data="NO">1</td>
                                <td data="Token">{token[1]}</td>
                                <td data="Status">{token[2] ? ('Expired') : ('Active')}</td>
                                <td data="Link Register" className="w-25">
                                    <Link href={`/admin/register/${token[1]}`} className="btn btn-sm btn-outline-primary">
                                        Link Daftar
                                    </Link>
                                    <div className="d-flex gap-3 mt-2">
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => generateToken(token[0])}>
                                            Reset Token
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <hr />
            <div className="mt-5">
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
        </div>
    );
}
