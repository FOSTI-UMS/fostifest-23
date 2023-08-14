import { useRouter } from 'next/router';
import Logout from '@/components/elements/logout';

export default function Profile() {
    const router = useRouter();
    const { userData } = router.query;
    const email = userData ? JSON.parse(userData).user.email : '';
    const userid = userData ? JSON.parse(userData).user.id : '';

    return (
        
        <div className='mt-5 pt-5 w-50'>
            <h2>Profile Page</h2>
            <p>Welcome, {email} <br/> Ini adalah ID User kamu: {userid}</p>
            <br/>
            <Logout />
        </div>
    );
}