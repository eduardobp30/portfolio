"use client";

import Link from "next/link";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const currentRoute = usePathname();

  return (
    <nav className="w-full mb-10 grid grid-cols-2 gap-y-4 md:grid-cols-3 lg:text-xl lg:grid-cols-4">
      <Link
        href="/"
        className="transition ease-in-out duration-300 hover:opacity-70 lg:col-span-1"
      >
        <p className="font-bold text-xl lg:text-2xl">Eduardo Barbosa</p>
        <p>Front-end Developer</p>
      </Link>
      <div className="flex flex-row text-lg items-center gap-8 place-content-end md:order-last lg:col-span-1">
        <ul className="flex flex-row gap-4 text-xl">
          <li>
            <Link
              href="https://www.linkedin.com/in/eduardo-barbosa-pereira/"
              target="_blank"
              className="transition ease-in-out duration-300 hover:opacity-70"
            >
              <BsLinkedin />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/eduardobp30"
              target="_blank"
              className="transition ease-in-out duration-300 hover:opacity-70"
            >
              <BsGithub />
            </Link>
          </li>
          <li>
            <Link
              href="https://api.whatsapp.com/send?phone=5548991659998"
              target="_blank"
              className="transition ease-in-out duration-300 hover:opacity-70"
            >
              <BsWhatsapp />
            </Link>
          </li>
        </ul>
        <ThemeToggle />
      </div>
      <ul className="col-span-2 flex flex-row gap-4 justify-between items-center md:col-span-1 md:justify-center md:gap-14 lg:col-span-2 lg:gap-20">
        <li>
          <Link
            href="/sobre"
            className={`transition ease-in-out duration-300 hover:opacity-70 ${
              currentRoute === "/sobre" ? "font-bold" : null
            }`}
          >
            Sobre
          </Link>
        </li>
        <li>
          <Link
            href="/projetos"
            className={`transition ease-in-out duration-300 hover:opacity-70 ${
              currentRoute === "/projetos" ? "font-bold" : null
            }`}
          >
            Projetos
          </Link>
        </li>

        <li>
          <Link
            href="/contato"
            className={`transition ease-in-out duration-300 hover:opacity-70 ${
              currentRoute === "/contato" ? "font-bold" : null
            }`}
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
