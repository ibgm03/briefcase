import React from "react";

export const About = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 pt-5 pb-5">
        <div className="col-span-4">
          <div className="text-4xl text-gray-900 mb-4 font-bold">About</div>
          <div className="text-2xl text-blue-700 mb-4 font-semibold">
            ¿Quien Soy?
          </div>
          <div className="text-lg text-gray-600 mb-8 text-justify">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen.
          </div>
          <a
            className="bg-blue-900 py-4 px-8 text-sm text-white hover:bg-blue-blueBackground"
            href="!#"
          >
            Curriculum
          </a>
        </div>
        <div className="col-span-8 text-center font-semibold">
          <div className="text-4xl font-bold">Skills</div>
          <div className="grid-cols-4 gap-4 pt-5 grid place-items-center">
            <div>
              <img src="/images/html.png" alt="" />
              <div className="text-xl text-gray-900 pt-2">Html</div>
            </div>
            <div>
              <img src="/images/css.png" alt="" />
              <div className="text-xl text-gray-900 pt-2">Css</div>
            </div>
            <div>
              <img src="/images/bootstrap.png" alt="" />
              <div className="text-xl text-gray-900 pt-2">Bootstrap</div>
            </div>
            <div>
              <img src="/images/js.png" alt="" />
              <div className="text-xl text-gray-900 pt-2">Javascript</div>
            </div>
            <div>
              <img src="/images/react.png" alt="" />
              <div className="text-xl text-gray-900 pt-2">React.js</div>
            </div>
            <div>
              <img src="/images/postgre.png" alt="" />
              <div className="text-xl text-gray-900 pt-2">PostgresqlL</div>
            </div>
            <div>
              <img src="/images/mysql.png" alt="" />
              <div className="text-xl text-gray-900 pt-2">Mysql</div>
            </div>
            <div>
              <img src="/images/java.png" alt="" />
              <div className="text-xl text-gray-900 pt-2">Java</div>
            </div>
            <div>
              <img src="/images/node.png" alt="" />
              <div className="text-xl text-gray-900 pt-2">Node.js</div>
            </div>
            <div>
              <img src="/images/git.png" alt="" />
              <div className="text-xl text-gray-900 pt-2">Git</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
