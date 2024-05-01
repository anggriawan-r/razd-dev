import Image from "next/image";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa6";
import { BiLink } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { squareHovered } from "@/store/hover/hoverSlice";
import { projects } from "@/lib/data";
import Link from "next/link";

function Projects() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section
      id="projects"
      className="container flex min-h-screen max-w-screen-lg flex-col items-center justify-center gap-16 px-4 sm:scroll-m-8"
    >
      <h1 className="text-3xl font-extrabold text-zinc-200 md:text-7xl">
        PROJECTS
      </h1>

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex h-full w-full flex-col items-center gap-6"
          >
            <div className="overflow-hidden rounded-md">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={600}
                className="w-full rounded-md object-cover transition duration-500 ease-out hover:scale-110"
              />
            </div>
            <div className="flex w-full items-center justify-between">
              <h2 className="text-3xl font-bold text-zinc-200">
                {project.title}
              </h2>
              <div className="flex gap-2">
                {project.tech.map((tech) => (
                  <Image
                    key={tech}
                    src={tech}
                    alt={tech}
                    width={12}
                    height={12}
                    className="h-6 w-6"
                  />
                ))}
              </div>
            </div>
            <p className="font-normal text-zinc-200">{project.description}</p>
            <div className="flex w-full gap-2">
              <Button
                variant="outline"
                className="flex w-full items-center gap-2 text-zinc-900"
                asChild
                onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
                onMouseLeave={() => dispatch(squareHovered(null))}
              >
                <Link href={project.repo} target="_blank">
                  <FaGithub className="h-6 w-6" />
                  Visit Repository
                </Link>
              </Button>

              <Button
                variant="outline"
                className="flex w-full items-center gap-2 text-zinc-900"
                asChild
                onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
                onMouseLeave={() => dispatch(squareHovered(null))}
              >
                <Link href={project.web} target="_blank">
                  <BiLink className="h-6 w-6" />
                  Visit Website
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
