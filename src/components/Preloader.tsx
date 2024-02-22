import { motion } from "framer-motion";

type PreloaderType = {
  setShowPreloader: (arg0: boolean) => void;
};

const loaderText = ["Eat.", "Sleep.", "Code."];

const Container = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      delayChildren: 0.75,
    },
  },
};

const Items = {
  initial: {
    y: 25,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 100,
  },
  exit: {
    y: 25,
    opacity: 0,
  },
};

export default function Preloader({ setShowPreloader }: PreloaderType) {
  return (
    <div className="flex h-svh items-center justify-center bg-zinc-900">
      <motion.div
        className="flex w-full items-center justify-center gap-4"
        variants={Container}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationComplete={() => setShowPreloader(false)}
      >
        {loaderText.map((text) => (
          <motion.div
            key={text}
            variants={Items}
            className="text-2xl font-bold text-zinc-200"
          >
            {text}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
