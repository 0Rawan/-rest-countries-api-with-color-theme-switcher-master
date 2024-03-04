"use client";
import { useState, useEffect, useContext } from "react";
import { useTheme } from "next-themes";



export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

  }, []);


  if (!mounted) {
    return null;
  }
  return (
  <>
    <nav className="dark:bg-sub-dark dark:text-white  bg-gray-50 text-dark flex justify-between shadow-md text-sm px-5 py-8 sm:px-10 sm:text-base ">
        <div className="font-semibold">Where in the wrold?</div>
        <div className="flex justify-between">
            <div className="me-2 cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>icon</div>
            <div> {theme === "light" ? "Light" : "Dark"} Mode </div>
        </div>
    </nav>
  

  </>
  )
}
