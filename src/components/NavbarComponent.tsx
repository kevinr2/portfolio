"use client"
import Link from "next/link";
import { Bowlby_One} from 'next/font/google'

const bowls =Bowlby_One({
  weight:'400',
  subsets:["latin"],
  display:'swap'
})


export const NavbarComponent = () => {
  return (
    <div className="fixed  text-n w-full  mt-6 h-14 flex justify-evenly items-center">
      <Link href="/">
      <div className="triangulo">
      </div>
      </Link>
      <div className={`${bowls.className} flex gap-5 text-lg justify-center`}> 
        

        <Link href="/about">About</Link>
        <Link href="/project">Project</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};
