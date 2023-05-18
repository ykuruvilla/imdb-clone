"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => {
            setTheme("light");
          }}
        />
      ) : (
        <MdDarkMode
          className="text-xl cursor-pointer hover:text-amber-500"
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </>
  );
};

export default DarkModeSwitch;
