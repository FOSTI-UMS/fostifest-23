import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./admin.module.css";
import supabase from '@/api/supabase';

export default function GetDataLomba() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState(users);
    const router = useRouter()

    const fetchUsers = async () => {
        const { data: usersData, error: fetchError } = await supabase.from("users").select().eq("jenis", "LOMBA DESIGN");
        if (fetchError) {
            setError(fetchError);
        } else {
            setUsers(usersData);
        }
    };

    const fetchUseridLomba = async () => {
        // soon, buat checker user udh upload file/blm
    }

    useEffect(() => {
        fetchUsers();
    }, []);


    useEffect(() => {
        fetchUseridLomba();
    }, []);

    const handleSearch = (event) => {
        const sortedUser = users.filter((row) => {
            return row.nama.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setSearch(sortedUser);
    };

    const verif = async (id) => {
        const { error } = await supabase
            .from('users')
            .update({ payment_verif: true })
            .eq('id_user', id)
        if (error) {
            alert(error.message);
        }
        router.refresh();
    }
    const hapus = async (id) => {
        const { error } = await supabase
            .from('users')
            .delete()
            .eq('id_user', id)
        if (error) {
            alert(error.message);
        }
        router.refresh();
    }

    return (
        <div className="pt-3 mt-3 px-5 mx-auto">
            <p className='fw-bold'>Data User Lomba</p>
            {/* Dari Frontend:
            <div className={`mb-3 ${styles["search-box"]}`}>
              <input type="text" placeholder="Search User's Name" onChange={handleSearch} />
            </div>
            {search.length === 0 && <p className="text-danger">Maaf, Tidak/Belum Ada Data Peserta Lomba</p>}
            {search.length > 0 && ( */}
            {users.length === 0 && <p className='text-danger'>Maaf, Tidak/Belum Ada DataPeserta Lomba</p>}
            {users.length > 0 && (
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
                        {users.map(user => (
                            <tr key={user.id_user}>
                                <td>{user.id_user}</td>
                                <td>{user.nama}</td>
                                <td>{user.alamat}</td>
                                <td>{user.instansi}</td>
                                <td>{user.email}</td>
                                <td>{user.jenis}</td>
                                <td>{user.no_telp}</td>
                                <td>
                                    <div className="d-flex gap-3">
                                        {
                                            user.payment_verif ?
                                                <button className='btn btn-success btn-disabled btn-sm'>Pembayaran Terverifikasi</button>
                                                :
                                                <button className='btn btn-outline-success btn-sm'
                                                    onClick={() => {
                                                        verif(user.id_user);
                                                    }}
                                                >
                                                    Verifikasi Pembayaran
                                                </button>
                                        }
                                        <button className='btn btn-outline-danger btn-sm'
                                            onClick={() => {
                                                hapus(user.id_user);
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