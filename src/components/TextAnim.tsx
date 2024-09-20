import { Letras } from "./Letras";
import { motion } from "framer-motion";

export const TextAnim = ({ palabras }: { palabras: Array<string> }) => {
  return (
    <>
      {palabras.map((palabra, i) => (
        <motion.p
          animate={{
            y: [-100, 0],
            opacity: [0, 1],
            scale: [0, 1],
            transition: {
              ease: "easeInOut",
              duration: 2,
              delay: 0.7,
              type: "spring",
              staggerChildren: 0.5,
              delayChildren: 0.5,
            },
          }}
          key={i}
          style={{ display: "inline-flex" }}
        >
          <Letras palabra={palabra} />
        </motion.p>
      ))}
    </>
  );
};
