import React from "react";

const Contactenos = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-8">
            {/* Título */}
            <h1 className="text-5xl font-bold mb-8 text-teal-900">Contáctenos</h1>

            {/* Formulario de Contacto */}
            <form className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 space-y-6">
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Tu correo"
                        className="w-full p-3 border border-gray-300 rounded-2xl mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                    />
                </div>
                <div>
                    <label htmlFor="mensaje" className="block text-gray-700 font-semibold">Mensaje</label>
                    <textarea
                        id="mensaje"
                        placeholder="¡Quiero recibir informacion personalizada!"
                        rows="6"
                        className="w-full p-3 border border-gray-300 rounded-2xl mt-1 focus:outline-none focus:ring-2 focus:ring-black"
                    ></textarea>
                </div>
                <button type="button" onClick={() => alert(`Gracias por contactarnos, su mensaje ha sido enviado con éxito. \n \nPdt. Este mensaje es fake, no se envió nada. :) `)} className="w-full bg-blue-500 text-white py-3 rounded-2xl hover:bg-blue-600 transition-colors " >
                    Enviar
                </button>
            </form>

            <h1 className="text-4xl font-bold mt-7 text-stone-600">Para acceder al contenido completo <br/> de <span className="text-cyan-600">Educación Financiera</span>, síguenos en:</h1>

            {/* Sección de Redes Sociales */}
            <div className="mt-10 flex space-x-6">

                <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/whatsapp--v1.png" alt="WhatsApp" />
                </a> 

                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="Instagram" />
                </a> 
                
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="Facebook" />
                </a>

                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="Twitter" />
                </a>

                <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-transform duration-300 ease-in-out">
                    <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/tiktok--v1.png" alt="TikTok" />
                </a>
            </div>
        </div>
    );
}

export default Contactenos;


