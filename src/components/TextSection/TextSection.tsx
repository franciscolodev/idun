import React from "react";
import sora_bg from "@/images/text_section/pexels-sora.jpg";

const TextSection = () => {
  return (
    <div className="relative">
      <img
        className="!h-[880px] object-cover lg:h-full lg:w-full"
        src={sora_bg.src}
        alt="sora background"
        width={1400}
        height={650}
      />
      <div className="absolute mx-8 top-1/2 left-0 lg:left-[10vw] translate-y-[-50%] text-white">
        <h1
          className="px-2 rounded bg-black/70 text-3xl font-bold w-full lg:w-96 mb-4"
          data-aos="fade-up"
        >
          ¿Cuáles son los beneficios de Idún?
        </h1>
        
        <ul className="my-4 pl-4" data-aos="fade-up">
            <li
            className="px-2 rounded bg-black/70 text-white font-extralight text-sm lg:text-lg relative my-2 before:inline-block before:mb-[2px] lg:before:mb-0 before:w-2 before:h-2 lg:before:w-3 lg:before:h-3 before:mr-3 lg:before:mr-4 before:bg-green-500 before:rounded-full before:border before:border-green-600 w-full lg:w-1/3"
            data-aos="fade-up"
          >
            Los productos de Idún son de alta calidad, elaborados artesanalmente para el cuidado intensivo de la piel.
          </li>
          <li
            className="px-2 rounded bg-black/70 text-white font-extralight text-sm lg:text-lg relative my-2 before:inline-block before:mb-[2px] lg:before:mb-0 before:w-2 before:h-2 lg:before:w-3 lg:before:h-3 before:mr-3 lg:before:mr-4 before:bg-green-500 before:rounded-full before:border before:border-green-600 w-full lg:w-1/3"
            data-aos="fade-up"
          >
            El ingrediente principal es la naturaleza. 
            Creamos productos artesanales para el cuidado del cuerpo y del planeta.
          </li>
          <li
            className="px-2 rounded bg-black/70 text-white font-extralight text-sm lg:text-lg relative my-2 before:inline-block before:mb-[2px] lg:before:mb-0 before:w-2 before:h-2 lg:before:w-3 lg:before:h-3 before:mr-3 lg:before:mr-4 before:bg-green-500 before:rounded-full before:border before:border-green-600 w-full lg:w-1/3"
            data-aos="fade-up"
          >
            Conocé las propiedades de nuestros jabones, shampoos solidos y acondicionadores naturales.
          </li>
          <li
            className="px-2 rounded bg-black/70 text-white font-extralight text-sm lg:text-lg relative my-2 before:inline-block before:mb-[2px] lg:before:mb-0 before:w-2 before:h-2 lg:before:w-3 lg:before:h-3 before:mr-3 lg:before:mr-4 before:bg-green-500 before:rounded-full before:border before:border-green-600 w-full lg:w-1/3"
            data-aos="fade-up"
          >
            Sin químicos, sin sulfatos, sin petrolatos, zero waste y con respeto animal.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TextSection;
