import React from 'react'
import Inner from '../inner/Inner'
import Head from 'next/head'
import { TextAnim } from '@/components/TextAnim'
import { ComponenteX } from '@/vista/ComponenteX'



const texto =[
  "Conoceme"
]


export default function About() {

  return (
    <>
    <Head>
        <title> Revelo</title>
    </Head>
      <Inner >
        <div className=' h-[100vh] flex  justify-center items-center'>
          <h1 className='min-[319px]:text-5xl sm:text-5xl md:text-5xl text-[#ffb703] cursor-default lg:text-7xl box-border font-extrabold tracking-tight'>
            <TextAnim palabras={texto} />
          </h1>
        </div>
        <ComponenteX />
    </Inner>
    </>
  )
}
