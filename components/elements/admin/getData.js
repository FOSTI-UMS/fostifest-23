import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export default function GetAllUser() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        const { data: usersData, error: fetchError } = await supabase
            .from('users')
            .select();

        if (fetchError) {
            setError(fetchError);
        } else {
            setUsers(usersData);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="px-5 mx-auto">
            {error && <p>Error: {error.message}</p>}
            {users.length === 0 && <p>No users found.</p>}
            {users.length > 0 && (
                <table className="table table-hover">
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
                                        <button className='btn btn-outline-success btn-sm'
                                            onClick={() => {
                                                window.location.href = `/api/verif/${user.nama}`;
                                            }}
                                        >
                                            Verifikasi Pembayaran
                                        </button>
                                        <button className='btn btn-outline-danger btn-sm'
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