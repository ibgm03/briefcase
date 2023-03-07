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
         <p> Como desarrollador, tengo una fuerte pasión por la creación de aplicaciones web utilizando el stack MERN (MongoDB, Express, React y Node) junto con MySQL. Me considero un programador muy dedicado y apasionado por mi trabajo, y disfruto resolviendo problemas y encontrando soluciones creativas a través del uso de diferentes tecnologías. Mi experiencia con el stack MERN y MySQL me permite crear aplicaciones escalables y eficientes, asegurando una experiencia de usuario excepcional y un rendimiento óptimo.</p> 
         <br />
          <p>Estoy comprometido a seguir mejorando mis habilidades y conocimientos para mantenerme actualizado en la industria y continuar entregando soluciones de alta calidad para mis clientes.</p>

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
            href="https://drive.google.com/file/d/1QPiJv2N54eX3wYe9NaNy4cNEJok0ptSB/view?usp=sharing"
          >
            Curriculum
          </a>
       </div>
      </div>
    </div>
  );
};
