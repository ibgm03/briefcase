import React from "react";

export const Barra = () => {
  return (
    <div>
      <nav class=" border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowraptext-white text-white">
              Benjamin<strong>Glez</strong>
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="flex flex-col p-4 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white"
                  aria-current="page"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4  rounded  md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700  hover:text-white md:hover:bg-transparent"
                >
                  Sobre Mi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4  rounded  md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700  hover:text-white md:hover:bg-transparent"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4  rounded  md:border-0  md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700  hover:text-white md:hover:bg-transparent"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
