import { motion } from "framer-motion";

export const Letras = ({ palabra }: { palabra: string }) => {
  return (
    <>
      {palabra.split("").map((letra, j) => (
        <motion.span
          drag
          animate={{x:[-100,0],opacity:[0,1],scale:[0,1],transition:{
            ease:"easeInOut",
            duration:2,
            delay:0.8,
            type: "spring",
            staggerChildren: 0.5,
            delayChildren: 0.5,
          }}}

          whileTap={{
            textShadow: "none",
            transition: { duration: 0.1, ease:"easeInOut" },
          }}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          key={j}
          whileHover={{
            textShadow: "none",
            y:-10,
            transition: {
              delay:0,
              duration: 0.2,
              ease: "easeInOut",
              type: "spring",
              stiffness: 500,
              damping: 30,
            },
          }}
          style={{
            display: "inline-block",
            textShadow: "6px 4px gray",
          }}
        >
          {letra === " " ? "\u00A0" : letra}
        </motion.span>
      ))}
    </>
  );
};
