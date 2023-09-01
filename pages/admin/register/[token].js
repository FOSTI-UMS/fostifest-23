import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AdminRegister from '@/components/elements/admin/register';
import Link from "next/link";
import supabase from '@/pages/api/supabase';

export default function RegisterPage() {
    const router = useRouter();
    const [regToken, setSupabaseToken] = useState(null);
    const { token } = router.query;

    useEffect(() => {
        async function fetchToken() {
            const { data, error } = await supabase
                .from('token')
                .select('token')
                .eq('is_expired', false)
                .single();

            if (error) {
                console.error('Error fetching token:', error.message);
            } else {
                setSupabaseToken(data.token);
            }
        }
        fetchToken();
    });


    if (token && regToken !== token) {
        return (
            <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">401</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Token Invalid.</p>
                <p className="lead">
                    Hubungi Sie Karya untuk mendapatkan token.
                    </p>
                <Link href="/" className="btn btn-primary">Go Home</Link>
            </div>
        </div>
        );
    } else {
        return (
            <AdminRegister />
        );
    }
}