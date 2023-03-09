import React from 'react'
import {
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Whatsapp = () => {
    return (
        <div>
            <a href="https://wa.me/+524434106239/?Hola" target="_blank"
                className='pt-1 pl-1 rounded-full fixed w-[60px] text-5xl h-[60px] z-50 leading-10 text-center text-[#fff] bg-[#25d366] bottom-[25px] right-[25px] hover:bg-[#20ba5a] ' target="_blank">
                <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
            </a>
        </div>
    )
}
