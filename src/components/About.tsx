import Image from "next/image";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiSolidEnvelope } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { squareHovered } from "@/store/hover/hoverSlice";
import { useInView, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

function About() {
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const controller = useAnimation();

  useEffect(() => {
    if (isInView) {
      controller.start("visible");
    }
  }, [isInView, controller]);

  const showVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 1 } },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="container flex h-screen max-w-screen-lg flex-col items-center justify-center gap-16 px-4"
    >
      <motion.h1
        className="text-3xl font-extrabold text-zinc-200 md:text-7xl"
        variants={showVariants}
        initial="hidden"
        animate={controller}
      >
        ABOUT ME
      </motion.h1>
      <div className="flex flex-col justify-center gap-16 sm:flex-row">
        <div className="flex w-full flex-col gap-8 sm:w-2/3">
          <motion.p
            className="text-center text-base font-medium leading-relaxed text-zinc-200 sm:text-left sm:text-xl"
            variants={showVariants}
            initial="hidden"
            animate={controller}
          >
            Hello! I&apos;m Anggriawan who enjoys building websites and
            discovering new front-end perspectives. I develop websites and web
            apps with dynamic animation, responsiveness, pixel-perfect and
            satisfying looks.
          </motion.p>
          <div className="flex items-center justify-between gap-8 sm:justify-start">
            <motion.div
              className="flex gap-2"
              variants={containerVariants}
              initial="hidden"
              animate={controller}
            >
              <motion.a
                variants={itemVariants}
                href="https://github.com/anggriawan-r"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 text-zinc-900"
                  onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
                  onMouseLeave={() => dispatch(squareHovered(null))}
                >
                  <FaGithub className="h-10 w-10" />
                </Button>
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="https://linkedin.com/in/anggriawanr"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 text-zinc-900"
                  onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
                  onMouseLeave={() => dispatch(squareHovered(null))}
                >
                  <FaLinkedin className="h-10 w-10" />
                </Button>
              </motion.a>
              <motion.a
                variants={itemVariants}
                href="mailto:anggriawan.net@gmail.com"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 text-zinc-900"
                  onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
                  onMouseLeave={() => dispatch(squareHovered(null))}
                >
                  <BiSolidEnvelope className="h-10 w-10" />
                </Button>
              </motion.a>
            </motion.div>

            <motion.a
              variants={showVariants}
              initial="hidden"
              animate={controller}
              transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
              href="/CV.pdf"
              target="_blank"
            >
              <Button
                variant="outline"
                size="icon"
                className="flex h-12 w-full gap-2 px-4 text-base font-semibold text-zinc-900"
                onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
                onMouseLeave={() => dispatch(squareHovered(null))}
              >
                Download CV
                <HiDownload />
              </Button>
            </motion.a>
          </div>
        </div>
        <motion.div
          className="relative -z-10 h-72 w-full overflow-hidden rounded-lg bg-zinc-200 sm:w-1/2"
          variants={showVariants}
          initial="hidden"
          animate={controller}
          transition={{
            delay: 2,
          }}
        >
          <Image
            src="/profile.jpg"
            alt="my photo profile"
            fill
            className="absolute object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
