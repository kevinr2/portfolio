"use client"
import Link from "next/link";
import { Bowlby_One,Montserrat} from 'next/font/google'

const bowls =Bowlby_One({
  weight:'400',
  subsets:["latin"],
  display:'swap'
})
const monserrat =Montserrat({
  weight:'400',
  subsets:["latin"],
  display:'swap'
})


export const NavbarComponent = () => {
  return (
    <div className="fixed  text-n w-full px-4 mt-3 h-14 flex justify-between items-center">
      <Link href="/">
        <h1 className={bowls.className}>Kevin<strong>Rev</strong></h1>
      </Link>
      <div className={`${monserrat.className} flex gap-5 text-lg justify-center`}> 
        

        <Link href="/about">About</Link>
        <Link href="/project">Project</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};
