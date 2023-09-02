"use client";

import { useContext } from "react";
import { ThemeContext } from "@contexts/ThemeContext";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const ThemeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <button onClick={toggle}>
      {mode === "light" ? (
        <BiSolidMoon className="text-yellow-400 text-xl" />
      ) : (
        <BiSolidSun className="text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
