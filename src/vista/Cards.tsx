"use client";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

interface Props {
  i: number;
  title: string;
  description: string;
  key: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

const Card = ({
  i,
  title,
  description,
  progress,
  range,
  targetScale,
}: Props) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  scrollYProgress;

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer sheet">
      <div className="margin"></div>
      <motion.div
        style={{ backgroundColor: scale, top: `calc(-10vh + ${i * 25}px)` }}
        className="card"
      >
        <h2>{title}</h2>
        <div className="body">
          <div className="description">
            <p>{description}</p>
            <span></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
