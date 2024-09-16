import { Montserrat } from "next/font/google";
import React from "react";
const monserrat =Montserrat({
    weight:'400',
    subsets:["latin"],
    display:'swap'
  })

export const Footer = () => {
  return (
    <>
      <div style={{position:'absolute',bottom:0,left:10, fontWeight:'bold'}} className={`${monserrat.className} cursor-default`}>
        <ol className=" flex gap-9">
          <li>Web</li>
          <li>Mobil</li>
          <li>testing</li>
        </ol>
      </div>
    </>
  );
};
