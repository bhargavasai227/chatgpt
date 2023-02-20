"use client"
import { useRouter } from "next/navigation"

function Sidebar() {
    const dir = useRouter();
    function home() {
        dir.push("/")
    }
    return (
        <div className='w-full bg-[#202123] text-white h-screen' >
            <div className='border border-white rounded-md text-center justify-center text-lg  h-12 w-10/11 m-2' onClick={home}>
                New chat
            </div>
        </div>
    )
}

export default Sidebar