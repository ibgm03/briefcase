import React from "react";

export const About = () => {
  return (
    <div className="container mx-auto" id="about">
      <div className="grid grid-cols-12 pt-16 pb-16">
        <div className="col-span-12 lg:col-span-6">
          <div className="text-4xl text-center lg:text-left text-gray-600 mb-4 font-semibold">SOBRE MI</div>
          <div className="text-2xl text-center lg:text-left text-blue-700 mb-4 font-medium">
            ¿Quien Soy?
          </div>
          <div className="text-lg text-gray-500 mb-8">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </div>
       
        </div>
       <div className="col-span-12 grid lg:col-span-6  place-items-center">
       <img
       className="h-60 w-60 rounded-full mb-4 "
       src="/images/benjamin.jpg"
       alt=""
     />
        <a
            className="bg-blue-700 py-4 px-8 text-sm text-white hover:bg-blue-blueBackground"
            href="!#"
          >
            Curriculum
          </a>
       </div>
      </div>
    </div>
  );
};
