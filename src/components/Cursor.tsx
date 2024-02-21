"use client";

import { AnimatePresence, Variants, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";

export default function Cursor() {
  const hover = useSelector((state: RootState) => state.hoverReducer);
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setX(clientX - 16);
    setY(clientY - 16);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  const cursorVariants: Variants = {
    default: {
      x: x,
      y: y,
      mixBlendMode: "difference",
      borderRadius: "50%",
      transition: { type: "spring", damping: 28, stiffness: 500 },
    },
    square: {
      x: hover.left! - 3,
      y: hover.top! - 3,
      height: hover.height! + 8,
      width: hover.width! + 8,
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
    nav: {
      x: hover.left,
      y: hover.top,
      height: hover.height!,
      width: hover.width!,
      mixBlendMode: "difference",
      borderRadius: "6px",
      transition: { type: "spring", damping: 32, stiffness: 500 },
    },
  };

  const variantsSwitch = (variants: any) => {
    switch (variants) {
      case "square":
        return "square";
      case "circle":
        return "circle";
      case "nav":
        return "nav";
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
