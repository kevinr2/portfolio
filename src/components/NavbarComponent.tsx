"use client";
import Link from "next/link";
import { Bowlby_One } from "next/font/google";
import { useState } from "react";
import {  motion } from 'framer-motion';

const bowls = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


export const NavbarComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // Maneja los cambios del checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    console.log(isChecked)
  };

  return (
    <div className="">
      <div className="fixed  text-n w-full px-4 mt-3 h-14 flex justify-between items-center mb-20">
        <Link href="/">
          <h1 className={bowls.className}>
            Kevin<strong>Rev</strong>
          </h1>
        </Link>

        <label className="flex flex-col gap-2 w-8 mr-7">
          <input
            className="peer hidden"
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
          <div className="rounded-2xl h-[3px] w-full bg-black duration-500 peer-checked:-rotate-45"></div>
          <div className="rounded-2xl h-[3px] w-1/2 bg-black duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
        </label>
      </div>


      <motion.div  className={`${isChecked === false ?"hidden":"block"} fixed right-0 top-14`} style={{ width: 200, height: 200 }}>
        <Link  href="/about">
           <button className="button2 mb-3"><span>About</span></button>
        </Link>
        <Link href="/project">
           <button className="button2 mb-3"><span>Project</span></button>
        </Link>
        <Link href="/contact">
           <button className="button2"><span>Contact</span></button>
        </Link>
      </motion.div>
 
    </div>
  );
};
