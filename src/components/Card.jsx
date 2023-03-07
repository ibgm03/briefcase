import React from "react";

export const Card = () => {
  return (
    <div>
      <div className="grid grid-cols-12 bg-portada bg-cover pt-56 pb-56">
        <div className="col-span-6 grid place-items-center">
          <div className="">
            {/* <img
              className="h-48 w-48 rounded-full mb-4 backdrop-blur-sm bg-white/30"
              src="/images/benjamin.jpg"
              alt=""
            /> */}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 text-white text-center backdrop-blur-sm">
          <div className="font-bold text-4xl pt-[3rem] ">Hola!</div>
          <div className="font-extrabold text-blue-700 text-5xl ">
            Soy Benjamín Gonzalez
          </div>
          <div className="font-bold text-4xl pt-2 ">
            Desarrollador Full-Stack
          </div>
        </div>
      </div>
    </div>
  );
};
