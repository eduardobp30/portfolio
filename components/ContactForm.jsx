"use client";

import { useForm } from "react-hook-form";
import { ThemeContext } from "@contexts/ThemeContext";
import { useContext, useState } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const { mode } = useContext(ThemeContext);

  const [messageSent, setMessageSent] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      console.log("Message sent successfully");
      reset();
      setMessageSent(true);
    }
    if (!res.ok) {
      console.log("Error sending message");
      reset();
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`flex flex-col p-4 gap-4 rounded-lg bg-gray-300 dark:bg-[#282828]`}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-bold">
            Nome
          </label>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "Por favor preencha o seu nome.",
            })}
            className={`p-2 rounded-md dark:text-black ${
              errors["name"]
                ? "border border-red-600 focus:border-red-500"
                : null
            }`}
          />
          <p className="text-[#E74C3C] font-bold">{errors?.name?.message}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-bold">
            E-mail
          </label>
          <input
            id="email"
            //   type="email"
            {...register("email", {
              required: "Por favor preencha o seu e-mail.",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Por favor preencha um e-mail válido.",
              },
            })}
            className={`p-2 rounded-md dark:text-black ${
              errors["email"]
                ? "border border-red-600 focus:border-red-500 text-green-900"
                : null
            }`}
          />
          <p className="text-[#E74C3C] font-bold">{errors?.email?.message}</p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-bold">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={8}
            {...register("message", {
              required: "Por favor escreva a sua mensagem.",
            })}
            type="text"
            className={`p-2 rounded-md dark:text-black ${
              errors["message"]
                ? "border border-red-600 focus:border-red-500"
                : null
            }`}
          />
          <p className="text-[#E74C3C] font-bold">{errors?.message?.message}</p>
        </div>

        <button
          type="submit"
          className="p-2 bg-blue-600 rounded-md text-white font-bold hover:bg-blue-500 transition duration-500 ease-in-out"
        >
          Enviar mensagem
        </button>
      </form>
      {messageSent && (
        <p className="mt-4 p-2 font-bold bg-green-50 text-green-600 border-2 border-green-600 dark:bg-green-100">
          A sua mensagem foi enviada. Obrigado!
        </p>
      )}
    </div>
  );
};

export default ContactForm;
