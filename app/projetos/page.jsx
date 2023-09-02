import Image from "next/image";
import Link from "next/link";

const Projetos = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center font-bold text-5xl mb-20 md:text-7xl">
        Projetos
      </h1>
      <ul className="grid grid-cols-1 gap-10 auto-rows-fr md:grid-cols-2">
        <li className="relative overflow-hidden cursor-pointer shadow-lg">
          <Link href="https://countries-api-jade.vercel.app" target="_blank">
            <Image
              src="/assets/countries-api.png"
              width={1000}
              height={500}
              alt="Picture of the author"
              className="block transition duration-[2000ms] w-full h-full max-w-full max-h-full ease-in-out hover:scale-125"
            ></Image>
            <h2 className="absolute top-8 left-8 px-2 py-1 bg-red-500 text-center text-md text-white font-bold rounded-md md:text-lg">
              Countries API
            </h2>
          </Link>
        </li>
        <li className="relative overflow-hidden cursor-pointer shadow-lg">
          <Link href="https://pokedex-indol-ten.vercel.app" target="_blank">
            <Image
              src="/assets/pokedex.png"
              width={1000}
              height={500}
              alt="Picture of the author"
              className="block transition duration-[2000ms] w-full h-full max-w-full max-h-full ease-in-out hover:scale-125"
            ></Image>
            <h2 className="absolute top-8 left-8 px-2 py-1 bg-red-500 text-center text-md text-white font-bold rounded-md md:text-lg">
              Pokédex
            </h2>
          </Link>
        </li>
        <li className="relative overflow-hidden cursor-pointer shadow-lg">
          <Link href="/" target="_blank">
            <Image
              src="/assets/portfolio-page.png"
              width={1000}
              height={500}
              alt="Picture of the author"
              className="block transition duration-[2000ms] w-full h-full max-w-full max-h-full ease-in-out hover:scale-125"
            ></Image>
            <h2 className="absolute top-8 left-8 px-2 py-1 bg-red-500 text-center text-md text-white font-bold rounded-md md:text-lg">
              Portfolio
            </h2>
          </Link>
        </li>
        <li className="relative overflow-hidden cursor-pointer shadow-lg">
          <Link
            href="https://newsletter-sign-up-page.vercel.app/"
            target="_blank"
          >
            <Image
              src="/assets/newsletter.png"
              width={1000}
              height={500}
              alt="Picture of the author"
              className="block transition duration-[2000ms] w-full h-full max-w-full max-h-full ease-in-out hover:scale-125"
            ></Image>
            <h2 className="absolute top-8 left-8 px-2 py-1 bg-red-500 text-center text-md text-white font-bold rounded-md md:text-lg">
              Newsletter Sign Up
            </h2>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Projetos;
