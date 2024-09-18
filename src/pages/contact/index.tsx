import React from "react";
import Inner from "../inner/Inner";
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { motion } from "framer-motion";
import { PiMailboxDuotone } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import Link from "next/link";


export default function Contact() {
  return (
    <Inner>
      <div className="w-[100%] h-[100vh] flex-row content-center sm:flex   ml-[50px] sm:ml-0 pt-36 sm:pt-0 justify-around items-center overflow-x-hidden">

          <div
            style={{ color: "black" }}
            className="pb-[50px] w-96"
          >
            <div  className="  flex justify-around text-7xl ">
              <motion.span style={{width:'100px'}} animate={{scale:[1,0], x:[0,200]}} transition={{duration:5,type:"spring",repeat: Infinity}}>
              <IoMailOutline />
              </motion.span>
              <PiMailboxDuotone />

            </div>
            <span className="cursor-none text-4xl">¿Te gusto?, Tienes alguna Pregunta contactanos</span>
          </div> 
       
        
        <div  className="form w-80">
          <div>
            <h1 className="title">Kevinreve096@gmail.com</h1>
          </div>
          <div className="login-with">
            <Link href="www.linkedin.com/in/kevin-revelo" target="_blank">
              <div className="button-log">
                <FaLinkedin />
              </div>
            </Link>
            <Link href="https://github.com/kevinr2" target="_blank">
              <div className="button-log">
                <FaGithubSquare />
              </div>
            </Link>
            <Link href="https://www.instagram.com/kevinrevl/" target="_blank">
              <div className="button-log">
                <FaInstagram />
              </div>
            </Link>
            <Link href="https://www.instagram.com/kevinrevl/" target="_blank">
              <div className="button-log">
                <BsTwitterX />
              </div>
            </Link>
          </div>
          <button className="button-confirm">read.cv</button>
        </div>
      </div>
    </Inner>
  );
}
