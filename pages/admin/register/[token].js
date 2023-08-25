import { useRouter } from 'next/router';
import AdminRegister from '@/components/elements/admin/register';

export default function RegisterPage() {
    const router = useRouter();
    const regToken = "69f039b9-9d49-49f0-80b4-dabd36c35a70"
    const { token } = router.query;

    if (regToken === token) {
        return (
            <AdminRegister />
        );
    }else{
        return (
            <div>
                <h1>404</h1>
            </div>
        );
    }
}