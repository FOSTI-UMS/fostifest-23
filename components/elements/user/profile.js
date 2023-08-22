import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const supabase = createClientComponentClient();

export default function Profile() {
    const [users, setUsers] = useState([]);
    const [identitas, setIds] = useState({});

    const getUser = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        const { data: usersData, error: fetchError } = await supabase.from("users").select().eq("email", user.email);
        if (fetchError) {
            alert(fetchError.message);
        } else {
            setUsers(user);
            if (usersData.length > 0) {
                setIds(usersData[0]);
            }
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <h4>Profil Kamu</h4>
            <p>Nama: {identitas.nama}<br />
                Email: {identitas.email}<br />
                Instansi: {identitas.instansi ? identitas.instansi : "-"}<br />
                Jenis: {identitas.jenis}<br />
                Status Pembayaran: {identitas.payment_verif ? "Sudah Bayar" : "Belum Bayar"}</p>
            {!identitas.payment_verif ? (
                <p className='fst-italic'>
                    Silahkan menuju ke{" "}
                    <a href="/cara-bayar">Sini</a> Untuk petunjuk pembayaran
                </p>
            ) : (
                ""
            )}
        </div>
    )
}