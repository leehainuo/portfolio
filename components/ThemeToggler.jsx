'use client'

import { Button } from "@/components/ui/button";
import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Button variant="outline" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <LuSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all
             dark:-rotate-90 dark:scale-0"/>
            <LuMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all
             dark:rotate-0 dark:scale-100"/>
        </Button>
    )
};

export default ThemeToggler