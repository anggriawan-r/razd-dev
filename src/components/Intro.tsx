import { circleHovered } from "@/store/hover/hoverSlice";
import { AppDispatch } from "@/store/store";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownCircle } from "lucide-react";
import Link from "next/link";
import { useDispatch } from "react-redux";

function Intro() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <AnimatePresence>
      <div
        id="#home"
        className="flex h-svh flex-col items-center justify-center gap-16"
      >
        <div
          key="first"
          className="container relative flex w-full flex-col items-center justify-center px-4"
        >
          <div className="grid grid-cols-5 grid-rows-4">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, ease: "circOut" }}
              className="col-start-1 col-end-4 row-start-2 select-none text-4xl font-extrabold text-zinc-200 sm:text-6xl md:text-8xl"
            >
              ANGGRIAWAN
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, ease: "circOut" }}
              className="col-start-1 col-end-4 row-start-3 select-none text-4xl font-extrabold text-zinc-200 sm:text-6xl md:text-8xl"
            >
              RAYZADMIKO
            </motion.h1>
            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                ease: "circInOut",
              }}
              className="col-start-1 col-end-5 row-start-2 border-dashed border-zinc-200/50"
            />
            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                ease: "circInOut",
              }}
              className="col-start-1 col-end-5 row-start-4 border-dashed border-zinc-200/50"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{
                duration: 1,
                ease: "circInOut",
              }}
              className="col-start-4 row-start-1 row-end-5 border-l border-dashed border-zinc-200/50"
            />
          </div>
        </div>
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <Link href="#about">
            <ChevronDownCircle
              className="h-8 w-8 cursor-pointer text-zinc-200 sm:-bottom-[144px] sm:h-10 sm:w-10"
              strokeWidth={1}
              onMouseEnter={(e) => dispatch(circleHovered(e.currentTarget))}
              onMouseLeave={() => dispatch(circleHovered(null))}
            />
          </Link>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Intro;
