import Link from "next/link";
import { links } from "@/lib/data";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { isHovered } from "@/store/hover/hoverSlice";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const hover = useSelector((state: RootState) => state.hoverReducer.ref);

  return (
    <header className="relative z-50 flex justify-center">
      <div className="fixed top-6 flex h-12 w-max items-center justify-center rounded-md border border-white border-opacity-20 bg-opacity-75 backdrop-blur-md">
        <nav className="flex h-full items-center justify-center">
          <ul className="flex h-full items-center justify-center text-sm font-medium text-zinc-200">
            {links.map((link) => (
              <li
                key={link.hash}
                className="relative flex h-full items-center justify-center rounded-sm"
                onMouseEnter={(e) => dispatch(isHovered(e.currentTarget))}
                onMouseLeave={() => dispatch(isHovered(null))}
              >
                <Link
                  href={link.hash}
                  className="flex h-full w-full items-center justify-center px-4 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
