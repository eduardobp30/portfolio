import Image from "next/image";
import Link from "next/link";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

const FavProjects = () => {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="w-full flex flex-col justify-center md:grid md:grid-cols-3 md:place-items-center">
        <h1 className="text-5xl font-bold text-center my-14 md:text-6xl md:col-span-2 lg:text-8xl">
          Projetos Favoritos
        </h1>
        <button className="m-auto w-48 mb-10 bg-gray-300 shadow-md rounded-md md:m-0 hover:bg-[#B0BEC5] dark:bg-[#282828] dark:hover:bg-[#3d3d3d] transition ease-in-out duration-500">
          <Link
            href="/projetos"
            className="flex flex-row justify-center items-center p-2 gap-2"
          >
            <LiaExternalLinkSquareAltSolid />
            <p className="font-bold text-lg ">Veja todos</p>
          </Link>
        </button>
      </div>
      <ul className="w-full flex flex-col justify-center gap-6 overflow-hidden md:grid md:grid-cols-2 md:gap-10">
        <li className="relative overflow-hidden cursor-pointer md:col-span-2">
          <Link href="https://countries-api-jade.vercel.app" target="_blank">
            <Image
              src="/assets/countries-api.png"
              width={500}
              height={250}
              alt="project homepage"
              className="block transition duration-1000 h-auto w-full max-w-full max-h-full ease-in-out hover:scale-125"
            ></Image>
            <h2 className="absolute top-6 left-8 px-2 py-1 bg-red-500 text-center text-lg text-white font-bold rounded-md">
              Countries API
            </h2>
            <p className="absolute bottom-6 left-8 text-white text-lg font-bold">
              01
            </p>
          </Link>
        </li>
        <li className="relative overflow-hidden cursor-pointer">
          <Link href="https://pokedex-indol-ten.vercel.app" target="_blank">
            <Image
              src="/assets/pokedex.png"
              width={500}
              height={250}
              alt="project homepage"
              className="block transition duration-1000 h-full w-full max-w-full max-h-full ease-in-out hover:scale-125"
            ></Image>
            <h2 className="absolute top-6 left-8 px-2 py-1 bg-red-500 text-center text-lg text-white font-bold rounded-md">
              Pokédex
            </h2>
            <p className="absolute bottom-6 left-8 text-white text-lg font-bold">
              02
            </p>
          </Link>
        </li>
        <li className="relative overflow-hidden cursor-pointer">
          <Link href="/">
            <Image
              src="/assets/portfolio-page.png"
              width={500}
              height={250}
              alt="Picture of the author"
              className="block transition duration-1000 h-full w-full max-w-full max-h-full ease-in-out hover:scale-125"
            ></Image>
            <h2 className="absolute top-6 left-8 px-2 py-1 bg-red-500 text-center text-lg text-white font-bold rounded-md">
              Portfolio
            </h2>
            <p className="absolute bottom-6 left-8 text-white text-lg font-bold">
              03
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FavProjects;
