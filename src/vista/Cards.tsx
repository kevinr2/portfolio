"use client";
import { useTransform, motion,  MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Props {
  i: number;
  title: string;
  description: string;
  key: string;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
  src: string;
}

const Card = ({

  title,
  description,
  progress,
  range,
  targetScale,
  src,
}: Props) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer   ">
      <motion.div
        whileHover={{ boxShadow: "none" }}
        style={{
          backgroundColor: "white",
          scale,
          top: `25px`,
          boxShadow: "12px 8px black",
          border: "solid black",
        }}
        className="card"
      >
        <h2>{title}</h2>

        <div className="body ">
          <div className="description">
            <p className="ralative sm:fixed">{description}</p>
          </div>

          <div className="imageContainer   md:contents lg:block ">
            <div className="inner ">
              <Image
                fill
                src={`${src}`}
                alt="image"

              />
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Card;
