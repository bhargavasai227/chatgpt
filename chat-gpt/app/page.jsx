"use client"
import { useRef, useEffect, useState } from 'react';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from "next/navigation";
import Link from 'next/link';

export default function Home() {
  const redirect = useRouter();
  const [data, setData] = useState({ name: '' });
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    redirect.push("/")
  }
  else if (!user) { redirect.push("/login") }
  console.log(user);

  let x;
  const myRef = useRef(null);
  function clicked(e) {
    x = e.target.innerText;
    myRef.current.value = `${x}`;

  }


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#343541] px-2">
      <h1 className="text-3xl text-white mb-12 ">chatGPT</h1>
      <div className="flex flex-row ">
        <div onClick={clicked} className="info direct text-gray-300 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>

          <h1>examples</h1>
          <p >Explain quantum computing in simple terms</p>
          <p>Got any creative ideas for a 10 year old’s birthday?</p>
          <p>How do I make an HTTP request in Javascript?</p>
        </div>
        <div className="info text-gray-300 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>

          <h1>limitations</h1>
          <div>
            <p>Remembers what user said earlier in the conversation</p>
            <p>Allows user to provide follow-up corrections</p>
            <p>Trained to decline inappropriate requests</p>
          </div>
        </div>
        <div className="info text-gray-300 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>

          <h1>warning</h1>
          <p>May occasionally generate incorrect information</p>
          <p>May occasionally produce harmful instructions or biased content</p>
          <p>Limited knowledge of world and events after 2021</p>
        </div>
      </div>
      <div className='flex flex-row w-full mt-16 gap-3 text-white rounded-md'>
        <input placeholder='type any thing' className='w-11/12  bg-[#40414f] px-2 pt-1 h-10 text-white focus:border-0' ref={myRef} onInput={(event) =>
          setData({
            name: event.target.value,
          })
        } />
        <Link onClick={() => { send(); }} href={{
          pathname: '/chat',
          query: data,
        }} className="hover:text-gray-200 hover:bg-slate-900 " >send</Link>
      </div>
    </div>
  )
}

