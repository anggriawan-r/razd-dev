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
    name: "Git",
    image: "/skills/git.svg",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    image: "/skills/github.svg",
    link: "https://github.com/",
  },
  {
    name: "Flutter",
    image: "/skills/flutter.svg",
    link: "https://flutter.dev/",
  },
  {
    name: "PostgreSQL",
    image: "/skills/postgresql.svg",
    link: "https://www.postgresql.org/",
  },
  {
    name: "Linux",
    image: "/skills/linux.svg",
    link: "https://www.linux.org/",
  },
];

export const projects = [
  {
    title: "Blogin",
    description:
      "A dynamic blog platform that allows users to create and share content globally. The app features a WYSIWYG (What You See Is What You Get) editor, enabling users to effortlessly format their posts with ease, ensuring the final output matches their design.",
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
    web: "https://blogin-razd.vercel.app",
  },
  {
    title: "Adadeh",
    description:
      "An e-commerce platform for footwear products, featuring a user-friendly interface for browsing, filtering, and purchasing items. Users can log in, add products to their cart, and securely complete transactions through Midtrans integration as the payment gateway.",
    image: "/projects/adadeh.jpg",
    tech: [
      "/skills/next.svg",
      "/skills/laravel.svg",
      "/skills/typescript.svg",
      "/skills/tailwind.svg",
    ],
    repo: "https://github.com/anggriawan-r/adadeh-indonesia",
    web: "https://adadeh-indonesia-fe.vercel.app",
  },
] as const;
