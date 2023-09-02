"use client";

import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "@components/ContactForm";

const Contato = () => {
  return (
    <div className="mt-20 lg:text-xl">
      <h1 className="mb-20 text-center font-bold text-5xl md:text-7xl">
        Contato
      </h1>
      <div className="md:grid md:grid-cols-2 md:gap-4 md:p-4 lg:gap-20">
        <div>
          <p className="font-bold mb-2">Entre em contato, vamos conversar.</p>
          <p>Me mande uma mensagem que eu responderei assim que possível.</p>

          <ul className="my-14 pl-4 flex flex-col gap-6">
            <li className="flex items-center gap-4">
              <BsFillTelephoneFill />
              <p>(48) 99165-9998</p>
            </li>
            <li className="flex items-center gap-4">
              <IoMail />
              <p>eduardobarbosa@outlook.com</p>
            </li>
            <li className="flex items-center gap-4">
              <FaLocationDot />
              <p>Florianópolis/SC</p>
            </li>
          </ul>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contato;
