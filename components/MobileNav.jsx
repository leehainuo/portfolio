import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ThemeToggler from '@/components/ThemeToggler'
const links = [
    { path: "/", name: "home" },
    { path: "/projects", name: "my projects" },
    { path: "/contact", name: "contact" },
  ];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen,setIsOpen] = useState(false)

  return (
    <div>
        <div
         className={`flex flex-col cursor-pointer ${isOpen ? "gap-[14.5px]" : "gap-2" }`}
         onClick={() => setIsOpen((e) => !e)} >
            <div className={`w-[22px] h-[2px] bg-primary rounded-sm ${isOpen ? "rotate-45 h-[1.5px]" : "" } origin-left ease-in-out duration-300` } />
            <div className={`w-[22px] h-[2px] bg-primary rounded-sm ${isOpen ? "-rotate-45 h-[1.5px]" : "" } origin-left ease-in-out duration-300` } />
        </div>
        {/* 判断是否开启Nav */}
        {isOpen && (
            <div className="absolute flex flex-col bg-[#fafafa] dark:bg-[#18181b] left-0 top-[68px] w-full h-[calc(100vh-68px)]
             px-8 pt-4 text-[#666] dark:text-[#a1a1a1]">
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} onClick={() => setIsOpen((e) => !e)}
                         className={` ${link.path === pathname && "text-primary font-semibold" }
                          capitalize py-[10px] px-4 text-base hover:text-primary transition-all` }>
                            {link.name}
                        </Link>
                    )
                })}
                {/* ThemeToggler */}
                <ThemeToggler/>
            </div>   
        )}
    </div>
  )
}

export default MobileNav