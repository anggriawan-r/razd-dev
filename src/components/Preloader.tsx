import { motion } from "framer-motion";

type PreloaderType = {
  setShowPreloader: (arg0: boolean) => void;
};

const loaderText = ["Eat.", "Sleep.", "Code."];

const Container = {
  animate: {
    opacity: 100,
    transition: {
      ease: "easeOut",
      staggerChildren: 0.25,
    },
  },
  exit: {
    transition: {
      opacity: 0,
      delayChildren: 1,
    },
  },
};

const Items = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    duration: 3,
    opacity: 100,
    y: -25,
  },
  exit: {
    opacity: 0,
    y: 0,
  },
};

export default function Preloader({ setShowPreloader }: PreloaderType) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900">
      <motion.div
        className="flex w-full items-center justify-center gap-4"
        variants={Container}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationComplete={() => setShowPreloader(false)}
      >
        {loaderText.map((text) => (
          <motion.h1
            key={text}
            variants={Items}
            className="text-2xl font-bold text-zinc-200"
          >
            {text}
          </motion.h1>
        ))}
      </motion.div>
    </div>
  );
}
