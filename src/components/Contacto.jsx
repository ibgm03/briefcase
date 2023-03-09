
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ad9jd2k', 'template_a1g8jog', form.current, 'Vvu07sEZ5DmbT2n2x')
            .then((result) => {
                console.log("enviado",result.text);
                alert("Mensaje Enviado Correctamente")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='container mx-auto' id='contacto'>
            <div className='grid grid-cols-12'>
                <div className="col-span-12 py-5">

                    <form ref={form} onSubmit={sendEmail}>
                        <div className='text text-4xl font-semibold text-gray-600 text-center'>CONTACTO</div>
                        <label htmlFor="nombre" className='text-gray-500'>Nombre Completo</label>
                        <input type="text" id='nombre' name='from_name' className='shadow appearance-none border rounded w-full py-2 px-3  mt-2 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder="Nombre" />
                        <label htmlFor="correo" className='text-gray-500'>Correo Electrónico</label>
                        <input type="email" name='email' className='shadow appearance-none border rounded w-full mt-2 mb-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ' placeholder="Correo" />
                        <label htmlFor="tel" className='text-gray-500'>Teléfono</label>
                        <input type="text" name='telefono' className='shadow appearance-none border rounded w-full mt-2 mb-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ' placeholder="Teléfono" />
                        <label htmlFor="asunto" className='text-gray-500'>Asunto</label>
                        <input type="text" name='asunto' className='shadow appearance-none border rounded w-full py-10 mt-2 mb-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Asunto' />
                        <div className='grid place-items-center border-5 col-span-12 mb-5'>

                            <button type="submit" value="Enviar" className='bg-blue-700 p-2 px-40  text-white' >Enviar</button>
                        </div>
                    </form>

                </div>

            </div >
        </div >
    )
}
