import { motion } from "framer-motion";

function IntroGrid() {
  return (
    <>
      <motion.hr
        initial={{
          width: 0,
        }}
        animate={{
          width: ["0%", "100%", "100%"],
          borderColor: [
            "rgb(228 228 231/0.7)",
            "rgb(228 228 231/0.7)",
            "rgb(228 228 231/0.5)",
          ],
        }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
          times: [0, 0.8, 1],
        }}
        className="col-start-2 col-end-5 row-start-2 border-dashed border-zinc-200/50"
      />
      <motion.hr
        initial={{
          width: 0,
        }}
        animate={{
          width: ["0%", "100%", "100%"],
          borderColor: [
            "rgb(228 228 231/0.7)",
            "rgb(228 228 231/0.7)",
            "rgb(228 228 231/0.5)",
          ],
        }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
          times: [0, 0.8, 1],
        }}
        className="col-start-1 col-end-4 row-start-4 border-dashed border-zinc-200/50"
      />
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: ["0%", "100%", "100%"],
          borderColor: [
            "rgb(228 228 231/0.7)",
            "rgb(228 228 231/0.7)",
            "rgb(228 228 231/0.5)",
          ],
        }}
        transition={{
          duration: 0.5,
          ease: "circInOut",
          times: [0, 0.8, 1],
        }}
        className="col-start-4 row-start-1 row-end-5 border-l border-dashed border-zinc-200/50"
      />
    </>
  );
}

export default IntroGrid;
