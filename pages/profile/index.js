import Logout from '@/components/elements/logout';
import Profile from '@/components/elements/user/profile';


export default function HomeProfile() {

    return (
        <div className='mt-5 pt-5'>
            <Profile />
            <Logout />
        </div>
    );
}