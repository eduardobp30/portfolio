import Image from "next/image";
import { repos } from "@app/services/requestAPI";
import Repos from "@components/Repos";
import FavProjects from "@components/FavProjects";

const Home = async () => {
  return (
    <main className="flex flex-col items-center lg:text-xl">
      <div className="w-full flex flex-col items-center m-8 gap-6 md:flex-row md:justify-center md:px-6 md:gap-12 lg:px-14">
        <Image
          src="/assets/profile.jpg"
          width={700}
          height={700}
          className="rounded-full w-64 md:flex-1 lg:flex-1"
        />
        <h1 className="text-xl font-bold text-center md:text-2xl md:flex-1 md:leading-loose lg:flex-2 lg:text-4xl lg:leading-loose">
          Olá, eu sou o Eduardo.
          <br />
          Desenvolvedor front-end.
        </h1>
      </div>
      <FavProjects />
      <Repos repos={repos} />
    </main>
  );
};

export default Home;
