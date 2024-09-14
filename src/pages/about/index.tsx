import React from 'react'
import Inner from '../inner/Inner'
import Head from 'next/head'





export default function About() {
  return (
    <>
    <Head>
        <title> Revelo</title>
    </Head>
  <Inner >

           <div className='w-[100%] h-[100vh] flex justify-center items-center'>
            <h1>About</h1>
        </div>
 </Inner>
    </>
  )
}
