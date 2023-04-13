import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'
import SignBtn from '@/components/SignBtn'

export default function layout({children}) {
  return (
    <>
         <Header/>
        {children}
        <SignBtn/>
            <footer className=''>
        <Footer/>
            </footer>
    </>
  )
}
