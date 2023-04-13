import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

export default function SignBtn() {
  const { data: session } = useSession();

  return (
    <div className='flex pt-20  justify-center pb-10 items-center'>
      {session ? (
        <button onClick={signOut} className='btnSıgn flex items-center justify-center'>
          Sign out
        </button>
      ) : (
        <button onClick={signIn} className='btnSıgn flex items-center justify-center'>
          Sign in
        </button>
      )}
    </div>
  )
}
