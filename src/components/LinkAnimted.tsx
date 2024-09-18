import { useMotionValue, useSpring, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {  useRef } from "react";
import { FiArrowRight } from 'react-icons/fi';
import { Montserrat } from 'next/font/google';

const monserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface Props{
    heading:string
    imgSrc:string
    subheading:string
    href:string
}


export const LinkAnimted = ({ heading, imgSrc, subheading, href }:Props) => {
const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {



    if (ref.current) {
        // Asegúrate de que ref.current no es null
        const rect = ref.current.getBoundingClientRect();
  
        const width = rect.width;
        const height = rect.height;
  
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
  
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
  
        x.set(xPct);
        y.set(yPct);
      }
  };
  return (
    <Link href={href} target="_blank">
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove }
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-[#514423] py-4 transition-colors duration-500 hover:border-l-pink-950 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold #514423 transition-colors duration-500 group-hover:text-[#606c38] md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          ))}
        </motion.span>
        <span className={`${monserrat.className} relative z-10 mt-2 block text-base #514423 transition-colors duration-500 group-hover:text-gray-600`}>
          {subheading}
        </span>
      </div>

      <motion.div
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64" 
      >
       <Image src={imgSrc} alt='porfolio' width={200} height={200} />
      </motion.div>

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-[#514423]" />
      </motion.div>
    </motion.div>
    </Link>
  );
};