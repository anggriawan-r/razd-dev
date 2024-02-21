import Image from "next/image";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { BiSolidEnvelope } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { squareHovered } from "@/store/hover/hoverSlice";

function About() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section
      id="about"
      className="container flex h-screen max-w-screen-lg flex-col items-center justify-center gap-16 px-4"
    >
      <h1 className="text-3xl font-extrabold text-zinc-200 md:text-7xl">
        ABOUT ME
      </h1>
      <div className="flex flex-col justify-center gap-16 sm:flex-row">
        <div className="flex w-full flex-col gap-8 sm:w-2/3">
          <p className="text-center text-base font-medium leading-relaxed text-zinc-200 sm:text-left sm:text-xl">
            Hello! I&apos;m Anggriawan who enjoys building websites and
            discovering new front-end perspectives. I develop websites and web
            apps with dynamic animation, responsiveness, pixel-perfect and
            satisfying looks.
          </p>
          <div className="flex items-center justify-between gap-8 sm:justify-start">
            <div className="flex gap-2">
              <a href="https://github.com/anggriawan-r" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 text-zinc-900"
                  onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
                  onMouseLeave={() => dispatch(squareHovered(null))}
                >
                  <FaGithub className="h-10 w-10" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/anggriawanr" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 text-zinc-900"
                  onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
                  onMouseLeave={() => dispatch(squareHovered(null))}
                >
                  <FaLinkedin className="h-10 w-10" />
                </Button>
              </a>
              <a href="mailto:anggriawan.net@gmail.com" target="_blank">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 text-zinc-900"
                  onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
                  onMouseLeave={() => dispatch(squareHovered(null))}
                >
                  <BiSolidEnvelope className="h-10 w-10" />
                </Button>
              </a>
            </div>
            <a href="/CV.pdf" target="_blank">
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
            </a>
          </div>
        </div>
        <div className="relative -z-10 h-72 w-full overflow-hidden rounded-lg bg-zinc-200 sm:w-1/2">
          <Image
            src="/profile.jpg"
            alt="my photo profile"
            fill
            className="absolute object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
