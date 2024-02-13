import { AnimatePresence, Variants, motion } from "framer-motion";
import { useMouse } from "@uidotdev/usehooks";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Cursor() {
  const [mouse, _] = useMouse();
  const navHover = useSelector((state: RootState) => state.hoverReducer);

  const cursorVariants: Variants = {
    default: {
      x: mouse.x - 16,
      y: mouse.y - 16,
      mixBlendMode: "difference",
      borderRadius: "100px",
      transition: { type: "spring", damping: 28, stiffness: 500 },
    },
    nav: {
      x: navHover.left,
      y: navHover.top,
      height: navHover.height,
      width: navHover.width,
      mixBlendMode: "difference",
      borderRadius: "6px",
      transition: { type: "spring", damping: 32, stiffness: 500 },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="pointer-events-none fixed z-[999] h-8 w-8 bg-white bg-blend-difference"
        variants={cursorVariants}
        animate={navHover.ref ? "nav" : "default"}
      ></motion.div>
    </AnimatePresence>
  );
}
