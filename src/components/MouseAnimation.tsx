import { motion } from "framer-motion";

function MouseAnimation() {
  return (
    <div className="relative h-12 w-6 rounded-full border-2 bg-transparent">
      <motion.div
        className="absolute top-2 size-2 translate-x-[6px] rounded-[50%] bg-zinc-200"
        animate={{
          top: [8, 8, 28, 28],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          type: "keyframes",
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
          duration: 1,
          times: [0, 0.2, 0.8, 1],
        }}
      ></motion.div>
    </div>
  );
}

export default MouseAnimation;
