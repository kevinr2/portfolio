import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const FollowCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Actualiza la posición del mouse
    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setMousePosition({
          x: event.clientX,
          y: event.clientY,
        });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
  
    return (
      <motion.div
      
        style={{
          position: "fixed",
          top:0,
          left:0,
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "#2a9d8f",
          pointerEvents: "none",
          zIndex: 9999,

        }}
        className=" hidden lg:block"

        animate={{
          x:mousePosition.x,
          y:mousePosition.y,

        }}
        transition={{
          type: "just",
          stiffness: 500,
          damping: 30,
        }}
      />
    );
  };
