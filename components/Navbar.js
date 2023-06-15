import React from "react";
import { CgProfile } from "react-icons/cg"
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const renderThemeChanger = () => {
        const currentTheme = theme === "system" ? systemTheme : theme;
    
        if (currentTheme === "dark") {
          return (
            <BsSun
              className="w-7 h-7"
              role="button"
              onClick={() => setTheme("light")}
            />
          );
        } else {
          return (
            <BsMoon
              className="w-7 h-"
              role="button"
              onClick={() => setTheme("dark")}
            />
          );
        }
      };
    
      useEffect(() => {
        setMounted(true);
      }, []);
      if (!mounted) return null;


  return ( 
  <nav className="fixed w-full flex justify-between items-center bg-green-500 top-0 z-20 py-3 px-4">
    <div>
        <Link href="/" className="text-lg font-bold">Logo
        </Link>
    </div>
    <div className="flex items-center">
        <div>
        {renderThemeChanger()}
        </div>
        <div>
            <CgProfile size={30}/>
        </div>
    </div>
  </nav>
  )
}

export default Navbar;
