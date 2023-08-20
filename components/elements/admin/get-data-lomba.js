import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';


const supabase = createClientComponentClient();

export default function GetDataLomba() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const router = useRouter()


    const fetchUsers = async () => {
        const { data: usersData, error: fetchError } = await supabase
            .from('users')
            .select()
            .eq('jenis', 'web design');

        if (fetchError) {
            setError(fetchError);
        } else {
            setUsers(usersData);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const verif = async (id) => {
        const { error } = await supabase
            .from('users')
            .update({ payment_verif: true })
            .eq('id_user', id)
            if(error) {
                alert(error.message);
            }
            router.refresh();
    }
    const hapus = async (id) => {
        const { error } = await supabase
            .from('users')
            .delete()
            .eq('id_user', id)
            if(error) {
                alert(error.message);
            }
            router.refresh();
    }

    return (
        <div className="pt-3 mt-3 px-5 mx-auto">
            <p className='fw-bold'>Data User Lomba</p>
            {users.length === 0 && <p className='text-danger'>Maaf, Tidak/Belum Ada DataPeserta Lomba</p>}
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
                                        {
                                            user.payment_verif ?
                                            <button className='btn bg-success btn-sm'>Terverifikasi</button> 
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