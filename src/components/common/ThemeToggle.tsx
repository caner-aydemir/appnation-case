"use client";

import { Moon, Sun1 } from "iconsax-reactjs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 flex justify-center items-center
       rounded-full hover:cursor-pointer border border-gray-300 dark:border-white text-black dark:text-white
       
       "
    >
      {theme === "dark" ? (
        <Moon color="#ffffff" variant="Bold" size={22} />
      ) : (
        <Sun1 color="#edc001" variant="Bold" size={22} />
      )}
    </button>
  );
}
