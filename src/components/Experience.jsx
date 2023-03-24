import React from "react";

export const Experience = () => {
  return (
    <div className="bg-gray-900" id="proyectos">
      <h1 className="text-center font-bold text-4xl text-white  pt-[3rem] pb-[3rem]">
        PROYECTOS
      </h1>
      <div className="container mx-auto pb-24">
        <div className="grid relative grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="relative grid">
            <div class="flex justify-center ">
              <div class=" shadow-lg bg-white">
                <a href="https://www.inadvisors.com.mx/home/">
                  <img className="h-48" src="/images/inadvisors.jpg" alt="" />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    InAdvisors
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Creador del sitio InAdvisors trabajando en Softwareland
                  </p>
                  <a
                    href="https://www.inadvisors.com.mx/home/"
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative grid">
            <div class="flex justify-center ">
              <div class=" shadow-lg bg-white">
                <a href="#!">
                  <img className="h-48" src="/images/phawa.jpg" alt="" />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">Phawa</h5>
                  <p class="text-gray-700 text-base mb-4">
                    Colaborador en el sitio de Phawa trabajando en Softwareland
                  </p>
                  <a
                    href="https://www.phawa.com.mx/"
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative grid">
            <div class="flex justify-center ">
              <div class=" shadow-lg bg-white">
                <a href="https://youtu.be/5o9f2Uo7fWM">
                  <img
                    className="h-48 w-full"
                    src="/images/pirata.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    Liga Futbol Pirata Fuentes
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Generador de Credenciales para jugadores de Futbol
                  </p>
                  <a
                    href="https://youtu.be/5o9f2Uo7fWM"
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative grid">
            <div class="flex justify-center ">
              <div class=" shadow-lg bg-white">
                <a href="https://pokeapibenjamin.vercel.app/">
                  <img
                    className="h-48 w-full"
                    src="/images/pokeapp.png"
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">
                    Pokedéx con React
                  </h5>
                  <p class="text-gray-700 text-base mb-4">
                    Pokedéx obteniendo los datos desde la api pokeapi,
                    utilizando react y tailwind css
                  </p>
                  <a
                    href="https://pokeapibenjamin.vercel.app/"
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
