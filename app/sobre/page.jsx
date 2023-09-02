import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const Sobre = () => {
  return (
    <div className="flex flex-col mt-20 gap-14 lg:text-xl">
      <div>
        <h1 className="text-center font-bold text-5xl mb-20 md:text-7xl">
          Sobre mim
        </h1>
        <p>
          Sou formado em Engenharia de Produção Mecânica pela Universidade
          Federal de Santa Catarina e atualmente trabalho como Coordenador de
          PCP em uma indústria de cosméticos. Me apaixonei pelo mundo da
          tecnologia e estou buscando fazer uma transição de carreira para a
          área de desenvolvimento front-end.
        </p>

        <p></p>
      </div>

      <div className="flex flex-col gap-14 md:grid md:grid-cols-5 md:gap-8">
        <div className="flex flex-col gap-14 md:col-span-2">
          <div>
            <h2 className="font-bold text-2xl mb-6">
              Oportunidade de trabalho
            </h2>
            <p>
              No momento estou a procura de um emprego de desenvolvedor
              front-end. Se você possui uma oportunidade de trabalho nessa área,
              confira o meu{" "}
              <strong className="underline underline-offset-2">CV</strong>.{" "}
              <br />
              Se o meu perfil se encaixa com o que você está buscando, me mande
              um{" "}
              <strong>
                <a
                  href="mailto:eduardobarbosa@outlook.com?subject=Mensagem do site"
                  className="underline underline-offset-2"
                >
                  e-mail
                </a>
              </strong>
              .
            </p>
          </div>

          <div>
            <h2 className="font-bold text-2xl mb-6">Redes Sociais</h2>
            <ul className="ml-4 flex flex-col gap-3">
              <li>
                <Link
                  href="https://api.whatsapp.com/send?phone=5548991659998"
                  target="_blank"
                >
                  <BsArrowRightShort className="text-xl inline" /> WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/eduardo-barbosa-pereira/"
                  target="_blank"
                >
                  <BsArrowRightShort className="text-xl inline" /> LinkedIn
                </Link>{" "}
              </li>
              <li>
                <Link href="https://github.com/eduardobp30" target="_blank">
                  <BsArrowRightShort className="text-xl inline" /> Github
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-bold text-4xl mb-8 bg-red-500 text-white w-fit px-4 py-2 rounded-md">
            Tech Stack
          </h2>
          <ul className="flex flex-row flex-wrap items-center gap-12">
            {/* <ul className="grid grid-cols-3 justify-self-center auto-rows-fr self-center gap-12"> */}
            <li>
              <Image
                src="/assets/html.png"
                width={50}
                height={50}
                alt="HTML logo"
                className="md:w-[100px]"
              />
            </li>
            <li>
              <Image
                src="/assets/css.png"
                width={50}
                height={50}
                alt="CSS logo"
                className="w-16 md:w-32"
              />
            </li>
            <li>
              <Image
                src="/assets/javascript.svg"
                width={50}
                height={50}
                alt="JavaScript logo"
                className="md:w-24"
              />
            </li>
            <li>
              <Image
                src="/assets/react.svg"
                width={50}
                height={50}
                alt="React logo"
                className="md:w-24"
              />
            </li>
            <li>
              <Image
                src="/assets/nextjs.svg"
                width={50}
                height={50}
                alt="Nextjs logo"
                className="md:w-24"
              />
            </li>
            <li>
              <Image
                src="/assets/tailwind.svg"
                width={50}
                height={50}
                alt="Tailwind CSS logo"
                className="md:w-24"
              />
            </li>
            <li>
              <Image
                src="/assets/git.svg"
                width={50}
                height={50}
                alt="Git logo"
                className="md:w-24"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
