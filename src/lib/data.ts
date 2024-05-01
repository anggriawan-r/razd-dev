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
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    image: "/skills/typescript.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    image: "/skills/react.svg",
    link: "https://react.dev/",
  },
  {
    name: "NextJS",
    image: "/skills/next.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "NodeJS",
    image: "/skills/node.svg",
    link: "https://nodejs.org/",
  },
  {
    name: "PHP",
    image: "/skills/php.svg",
    link: "https://www.php.net/",
  },
  {
    name: "Laravel",
    image: "/skills/laravel.svg",
    link: "https://laravel.com/",
  },
  {
    name: "Firebase",
    image: "/skills/firebase.svg",
    link: "https://firebase.google.com/",
  },
  {
    name: "TailwindCSS",
    image: "/skills/tailwind.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Prisma",
    image: "/skills/prisma.svg",
    link: "https://www.prisma.io/",
  },
  {
    name: "MongoDB",
    image: "/skills/mongodb.svg",
    link: "https://www.mongodb.com/",
  },
  {
    name: "MySQL",
    image: "/skills/mysql.svg",
    link: "https://www.mysql.com/",
  },
  {
    name: "Figma",
    image: "/skills/figma.svg",
    link: "https://www.figma.com/",
  },
  {
    name: "Python",
    image: "/skills/python.svg",
    link: "https://www.python.org/",
  },
  {
    name: "shadcn/ui",
    image: "/skills/shadcn.svg",
    link: "https://ui.shadcn.com/",
  },
  {
    name: "Git",
    image: "/skills/git.svg",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    image: "/skills/github.svg",
    link: "https://github.com/",
  },
];

export const projects = [
  {
    title: "Blogin",
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
    repo: "https://github.com/anggriawan-r/blogin",
    web: "https://razd-dev.vercel.app",
  },
  {
    title: "Adadeh",
    description:
      "Footwear e-commerce website with midtrans integration as payment gateway. User can login and buy our footwear products.",
    image: "/projects/adadeh.jpg",
    tech: [
      "/skills/next.svg",
      "/skills/laravel.svg",
      "/skills/typescript.svg",
      "/skills/tailwind.svg",
    ],
    repo: "https://github.com/Adadeh-Commerce/adadeh",
    web: "https://adadeh-indonesia.vercel.app",
  },
] as const;
