import { AnimatePresence, Variants, motion } from "framer-motion";
import { useMouse } from "@uidotdev/usehooks";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function Cursor() {
  const [mouse, _] = useMouse();
  const hover = useSelector((state: RootState) => state.hoverReducer);

  const cursorVariants: Variants = {
    default: {
      x: mouse.x - 16,
      y: mouse.y - 16,
      mixBlendMode: "difference",
      borderRadius: "100px",
      transition: { type: "spring", damping: 28, stiffness: 500 },
    },
    square: {
      x: hover.left,
      y: hover.top,
      height: hover.height,
      width: hover.width,
      mixBlendMode: "difference",
      borderRadius: "6px",
      transition: { type: "spring", damping: 32, stiffness: 500 },
    },
    circle: {
      x: hover.left! - 2,
      y: hover.top! - 2,
      height: hover.height! + 4,
      width: hover.width! + 4,
      borderRadius: "50%",
      mixBlendMode: "difference",
      transition: { type: "spring", damping: 32, stiffness: 500 },
    },
  };

  const variantsSwitch = (variants: any) => {
    switch (variants) {
      case "square":
        return "square";
      case "circle":
        return "circle";
      default:
        return "default";
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="pointer-events-none fixed z-[999] hidden h-8 w-8 bg-white bg-blend-difference sm:block"
        variants={cursorVariants}
        animate={variantsSwitch(hover.hoveredType)}
      ></motion.div>
    </AnimatePresence>
  );
}
