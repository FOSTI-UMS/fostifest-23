import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/router';

const supabase = createClientComponentClient();

export default function Logout() {
    const router = useRouter();

    const handleLogout = async (e) => {
        e.preventDefault();

        try {
            const { error } = await supabase.auth.signOut();

            if (error) {
                console.error('Error signing out:', error.message);
            } else {
                router.push({
                    pathname: '/',
                });
            }
        } catch (error) {
            console.error('Error signing out:', error.message);
        }
    }

    return (
        <div className='mt-1'>
            <div className="d-flex align-items-center justify-content-center">
              <button className={`mb-3 btn btn-outline-danger d-flex align-items-center justify-content-center`} onClick={handleLogout}>
                Logout
              </button>
            </div>
        </div>
    )

}

