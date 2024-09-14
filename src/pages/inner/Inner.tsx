import { motion, Variants } from "framer-motion";
import { perspective, slide, opacity } from "@/anim/anim";
import { NavbarComponent } from "@/components/NavbarComponent";

export default function Layout({ children }: { children: React.ReactNode }) {
  const anim = (variants: Variants) => {
    return {
      initial: "initial",

      animate: "enter",

      exit: "exit",

      variants,
    };
  };

  return (
    <>
      <div className="inner">
        <motion.div className="slide" {...anim(slide)} />

        <motion.div className="page" {...anim(perspective)}>
          <motion.div {...anim(opacity)}>
            <NavbarComponent />

            {children}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
