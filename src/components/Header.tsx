import Link from "next/link";
import { links } from "@/lib/data";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { squareHovered } from "@/store/hover/hoverSlice";
import { motion } from "framer-motion";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <header className="z-50 flex justify-center">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "circOut", duration: 1 }}
        className="fixed top-0 flex h-16 w-full items-center justify-center border border-white border-opacity-20 bg-opacity-75 backdrop-blur-md sm:top-6 sm:h-12 sm:w-max sm:rounded-md"
      >
        <nav className="flex h-full items-center justify-center">
          <ul className="flex items-center justify-center gap-4 px-4 text-xs font-medium text-zinc-200 sm:h-full sm:gap-0 sm:px-0 sm:text-sm">
            {links.map((link) => (
              <li
                key={link.hash}
                className="flex h-full items-center justify-center rounded-sm"
                onMouseEnter={(e) => dispatch(squareHovered(e.currentTarget))}
                onMouseLeave={() => dispatch(squareHovered(null))}
              >
                <Link
                  href={link.hash}
                  className="flex h-full w-full items-center justify-center sm:px-4"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
