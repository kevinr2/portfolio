import Image from 'next/image'
import React from 'react'



export const SectionOne = () => {
    return (

        <div className="w-[100%]  sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
  
          <p>Scroll Perspective</p>
  
          <div className="flex gap-4">
  
            <p>Section</p>
  
            <div className="relative w-[12.5vw]">
  
              <Image 
  
                src="/2.PNG"
  
                alt="img"
  
               
  
                fill
  
              />
  
            </div>
  
            <p>Transition</p>
  
          </div>
  
        </div>
  
      )
  
  }
