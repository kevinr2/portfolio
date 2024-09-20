import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";

const monserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const LoaderPage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Inicia el cronómetro, se actualiza cada 100ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-[100%] h-[100vh] flex justify-center items-center bg-white"
      >
        <div className="loader"></div>
        <div
          className={`${monserrat} fixed bottom-0 left-0`}
          style={{ fontSize: 45 }}
        >
          <h1>{`${progress} %`}</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
