import { squareHovered } from "@/store/hover/hoverSlice";
import { AppDispatch } from "@/store/store";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import MouseAnimation from "./MouseAnimation";
import IntroGrid from "./IntroGrid";

function Intro() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <AnimatePresence>
      <section
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
            <IntroGrid />
          </div>
          <motion.a
            href="#about"
            className="absolute bottom-[-200px] cursor-pointer sm:bottom-[-100px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
            onMouseLeave={() => dispatch(squareHovered(null))}
          >
            <MouseAnimation />
          </motion.a>
        </div>
      </section>
    </AnimatePresence>
  );
}

export default Intro;
