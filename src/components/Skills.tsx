import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import Link from "next/link";
import { skills } from "@/lib/data";
import { Button } from "./ui/button";
import Image from "next/image";
import { squareHovered } from "@/store/hover/hoverSlice";

function Skills() {
  const dispatch = useDispatch<AppDispatch>();
  const skillsSorted = skills.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div
      id="skills"
      className="container flex h-screen max-w-screen-lg flex-col items-center justify-center gap-16 px-4"
    >
      <h1 className="text-3xl font-extrabold text-zinc-200 md:text-7xl">
        SKILLS
      </h1>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
        {skillsSorted.map((skill) => (
          <Button
            key={skill.name}
            variant="outline"
            size="lg"
            asChild
            className="flex items-center gap-3 rounded-lg bg-transparent px-4 py-6 text-base text-white hover:bg-transparent hover:text-white sm:text-lg"
            onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
            onMouseLeave={() => dispatch(squareHovered(null))}
          >
            <Link href="">
              <Image
                src={skill.image}
                alt={skill.name}
                width={12}
                height={12}
                className="h-6 w-6"
              />

              <h5>{skill.name}</h5>
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Skills;
