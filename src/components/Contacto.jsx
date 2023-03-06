import React from 'react'

export const Contacto = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-12'>
                <div className="col-span-12 py-5">
                    <div className='text text-4xl font-semibold text-gray-600 text-center'>CONTACTO</div>
                    <label htmlFor="nombre" className='text-gray-500'>Nombre Completo</label>
                    <input type="text" id='nombre' className='shadow appearance-none border rounded w-full py-2 px-3  mt-2 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder="Nombre" />
                    <label htmlFor="correo" className='text-gray-500'>Correo Electrónico</label>
                    <input type="email" id='correo' className='shadow appearance-none border rounded w-full mt-2 mb-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ' placeholder="Correo" />
                    <label htmlFor="tel" className='text-gray-500'>Teléfono</label>
                    <input type="text" id='tel' className='shadow appearance-none border rounded w-full mt-2 mb-5 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ' placeholder="Teléfono" />
                    <label htmlFor="asunto" className='text-gray-500'>Asunto</label>
                    <input type="text" className='shadow appearance-none border rounded w-full py-10 mt-2 mb-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Asunto' />

                </div>
                <div className='grid place-items-center border-5 col-span-12 mb-5'>
                    <input type="button" value="Enviar" className='bg-blue-700 p-2 px-40  text-white' />
                </div>
            </div>
        </div>
    )
}
