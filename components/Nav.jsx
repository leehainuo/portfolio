'use client'
// Components
import Link from "next/link";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Data
const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

const Nav = ({ linkStyles, underlineStyles }) => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-x-8 items-center">
      {links.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={`capitalize ${pathname ===item.path?'text-primary':'text-[#666] dark:text-[#a1a1a1]'} ${linkStyles}`}
          >
            {pathname === item.path && (
                <motion.span
                 initial={{y: '-100%'}}
                 animate={{y: 0}}
                 transition={{type: 'tween'}}
                 layoutId="underline"
                 className={`${underlineStyles}`}
                />
            )}
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
