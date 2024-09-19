"use client";
import Link from "next/link";
import { Bowlby_One } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import { Montserrat } from 'next/font/google';

const monserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const bowls = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const variants = {
  open: { opacity: 1, y:0 },
  closed: { opacity: 0, y:"-100px" },
};

export const NavbarComponent = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // Maneja los cambios del checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="">
      <div className=" absolute text-n w-[100%] px-4 mt-3 h-14 flex justify-between items-center  z-20">
        <Link href="/">
          <h1 className={bowls.className}>
            Kevin<strong>Rev</strong>
          </h1>
        </Link>

        <div className="flex gap-14">
          <div>EN</div>
        <label className="flex flex-col gap-2 w-8 ">
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
      </div>
      <motion.div
      
        animate={isChecked? "open" : "closed"}
        variants={variants}
        className={`${
          isChecked === false ? "hidden" : "block"
        } absolute right-6 top-14 z-50`}
        
      >
        <div className={`card2 ${monserrat.className} `}>
           <div className="flex gap-4">
           </div>
          <Link href="/about" className="flex gap-2">
            <span className="card2-title   hover:underline hover:underline-offset-8  hover:text-green-700">Conoceme</span>
          </Link>
          <Link href="/project" className="flex gap-2">
          <span  className="card2-title hover:underline hover:underline-offset-8  hover:text-green-700 ">Projectos</span>
          </Link>
          <Link href="/contact" className="flex gap-2">
            <span className="card2-title  hover:underline hover:underline-offset-8 hover:text-green-700">Contactanos</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
