import React from "react";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 text-center pt-5 pb-5 text-blue-700">
        <div className="text-xl font-semibold">Benjamin Glez</div>
        <div>
          <ul>
            <li>Inicio</li>
            <li>About</li>
            <li>Portafolio</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div className="text-blue-blueBackground">
          <ul className="flex flex-row justify-center gap-5">
            <li className="w-4">
              <a className="hover:text-blue-blueTittle" href="">
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </a>
            </li>
            <li className="w-4">
              <a className="hover:text-blue-blueTittle" href="">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
            </li>
            <li className="w-4">
              <a className="hover:text-blue-blueTittle" href="">
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
