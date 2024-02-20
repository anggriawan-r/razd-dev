export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skills = [
  {
    name: "JavaScript",
    image: "/skills/javascript.svg",
  },
  {
    name: "TypeScript",
    image: "/skills/typescript.svg",
  },
  {
    name: "React",
    image: "/skills/react.svg",
  },
  {
    name: "NextJS",
    image: "/skills/next.svg",
  },
  {
    name: "NodeJS",
    image: "/skills/node.svg",
  },
  {
    name: "PHP",
    image: "/skills/php.svg",
  },
  {
    name: "Laravel",
    image: "/skills/laravel.svg",
  },
  {
    name: "Firebase",
    image: "/skills/firebase.svg",
  },
  {
    name: "TailwindCSS",
    image: "/skills/tailwind.svg",
  },
  {
    name: "Prisma",
    image: "/skills/prisma.svg",
  },
  {
    name: "MongoDB",
    image: "/skills/mongodb.svg",
  },
  {
    name: "MySQL",
    image: "/skills/mysql.svg",
  },
  {
    name: "Figma",
    image: "/skills/figma.svg",
  },
  {
    name: "Python",
    image: "/skills/python.svg",
  },
  {
    name: "shadcn/ui",
    image: "/skills/shadcn.svg",
  },
  {
    name: "Git",
    image: "/skills/git.svg",
  },
  {
    name: "GitHub",
    image: "/skills/github.svg",
  },
];

export const projects = [
  {
    title: "blogin",
    description:
      "A blog web app. Users can post blogs here and share them across the world. This blog is What You See Is What You Get kind of blogs.",
    image: "/projects/blogin.jpg",
    tech: [
      "/skills/typescript.svg",
      "/skills/next.svg",
      "/skills/tailwind.svg",
      "/skills/mongodb.svg",
      "/skills/firebase.svg",
      "/skills/prisma.svg",
    ],
  },
] as const;
