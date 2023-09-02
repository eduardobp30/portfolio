import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";

const Repos = ({ repos }) => {
  return (
    <div className="flex flex-col mb-10 md:mt-10">
      <div className="w-full flex flex-col items-center justify-center mb-6 md:grid md:grid-cols-3 md:place-items-center md:mb-14 lg:mb-20">
        <h1 className="text-5xl font-bold text-center mb-8 w-3/5 md:col-span-2 md:text-6xl md:m-0 lg:text-8xl">
          Últimos Códigos
        </h1>
        <button className="w-48 mb-8 bg-gray-300 shadow-md rounded-md md:m-0 hover:bg-[#B0BEC5] dark:bg-[#282828] dark:hover:bg-[#3d3d3d] transition ease-in-out duration-300">
          <Link
            href="https://github.com/eduardobp30"
            target="_blank"
            className="flex flex-row justify-center items-center p-2 gap-2"
          >
            <LiaExternalLinkSquareAltSolid />
            <p className="font-bold text-lg ">Veja Github</p>
          </Link>
        </button>
      </div>
      <ul className="flex flex-col gap-10 px-4 md:grid md:grid-cols-2 md:gap-14 lg:grid-cols-3">
        {repos.slice(0, 6).map((repo) => (
          <li className="flex flex-col gap-3" key={repo.id}>
            <h2 className="font-bold">{repo.name}</h2>
            <p>{repo.description}</p>
            <Link
              href={repo.html_url}
              target="_blank"
              className="flex flex-row items-center font-bold gap-2"
            >
              <p>Veja o repositório</p>
              <FiArrowRight />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Repos;
