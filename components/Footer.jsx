import Link from "next/link";
import { BiCopyright } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full flex flex-row items-center justify-between mt-20 text-lg font-bold">
      <div className="flex flex-row gap-1 items-center">
        <BiCopyright />
        <p>Eduardo Barbosa</p>
      </div>
      <ul className="flex flex-row gap-4">
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
    </footer>
  );
};

export default Footer;
