'use client'
import { auth, googleHandler } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button';
import { useRouter } from "next/navigation"

function page() {
    const redirect = useRouter();
    const [user, loading, error] = useAuthState(auth);
    if (user) {
        redirect.push("/")
    }
    return (
        <div className='bg-[#343541] h-screen flex items-center justify-center flex-col gap-7 text-white'>
            <GoogleButton onClick={() => { googleHandler(); }} />
            <div>signin with google for validating your page</div>
        </div>

    )
}

export default page