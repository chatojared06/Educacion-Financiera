import React from "react";
import './index.css';
import { Link } from "react-router-dom";

const Body = () => {
    return (
        <div className="flex flex-col space-y-16 ">
            {/* Sección de Sobre el Proyecto */}
            <div className="flex flex-col lg:flex-row mt-24 mx-5 lg:mx-36 items-start justify-between space-y-10 lg:space-y-0 lg:space-x-10">
                <div className="flex flex-col w-full lg:w-2/3 p-8 bg-white shadow-2xl rounded-3xl border border-gray-200">
                    <h1 className="font-poppins text-4xl font-bold mb-6 text-center w-full text-teal-900">Sobre el Proyecto</h1>
                    <p className="text-xl font-medium font-sans text-black leading-relaxed">
                        Bienvenidos a mi proyecto de <strong className="text-cyan-600">Educación Financiera para Todos</strong>, una iniciativa dedicada a mejorar el conocimiento y las habilidades de la población mexicana en la gestión de sus finanzas personales. Desde jóvenes hasta adultos, nuestro objetivo es proporcionar herramientas prácticas y accesibles sobre ahorro, inversión básica y manejo de deudas. A través de publicaciones dinámicas y contenido educativo en redes sociales, buscamos empoderar a cada persona para que tome el control de su futuro financiero y tome decisiones inteligentes con su dinero.
                    </p>
                </div>

                <div className="lg:w-1/3 w-full flex justify-center lg:justify-end">
                    <img 
                        src="/8432.jpg" 
                        alt="Educación financiera" 
                        className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                </div>
            </div>

            <div className="flex flex-col mt-24 mx-5 lg:mx-36 lg:flex-row items-start justify-between space-y-10 lg:space-y-0 lg:space-x-10">
                {/* En pantallas grandes la imagen estará a la izquierda, en pantallas pequeñas a la derecha */}
                <div className="lg:w-1/3 w-full order-2 lg:order-1 flex justify-center lg:justify-end mt-10 lg:mt-0">
                    <img 
                        src="/Manejo-de-deudas.jpg" 
                        alt="Educación financiera" 
                        className="w-full h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"/>
                </div>
                
                {/* Sección de los objetivos */}
                <div className="flex flex-col w-full lg:w-2/3 p-8 justify-center lg:justify-end bg-white shadow-2xl rounded-3xl border border-gray-200 order-1 lg:order-2">
                    <h2 className="font-poppins text-4xl font-bold mb-6 text-center text-teal-900">Objetivos Principales</h2>
                    <ul className="list-disc text-xl font-medium font-sans text-gray-600 leading-relaxed px-4">
                        <li><strong className="text-cyan-600">Promover la educación financiera</strong> accesible para todas las edades</li>
                        <li><strong className="text-cyan-600">Proporcionar herramientas y recursos</strong> para la gestión del ahorro, inversión y deudas.</li>
                        <li><strong className="text-cyan-600">Empoderar a las personas</strong> para que tomen decisiones financieras informadas.</li>
                        <li><strong className="text-cyan-600">Crear conciencia</strong> sobre la importancia de la planificación financiera a largo plazo.</li>
                    </ul>
                </div>
            </div>

            {/* Sección de Contenido Destacado */}
            <div className="flex flex-col p-8 mt-24 mx-5 lg:mx-36 bg-white shadow-lg rounded-3xl">
                <h2 className="font-poppins text-4xl font-bold mb-6 text-center text-teal-900">Contenido Destacado en Redes Sociales</h2>
                <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-6 items-center">
                    {/* Reel 1 */}
                    <div className="w-[300px] h-[600px] bg-gray-200 rounded-2xl shadow-inner mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src="/elpoderdelahorro.png" alt="Reel 1" className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => alert('Este Reel está en desarrollo')} />
                    </div>
                    {/* Reel 2 */}
                    <div className="w-[300px] h-[600px] bg-gray-200 rounded-2xl shadow-inner mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src="/introduccion .png" alt="Reel 2" className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => alert('Este Reel está en desarrollo')} />
                    </div>
                    {/* Reel 3 */}
                    <div className="w-[300px] h-[600px] bg-gray-200 rounded-2xl shadow-inner mx-auto transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <img src="/Manejo inteligente de deudas.png" alt="Reel 3" className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => alert('Este Reel está en desarrollo')} />
                    </div>
                </div>
            </div>

            {/* Cuadro de cómo recopilamos datos y mejoramos el contenido */}
            <div className="flex flex-col mt-24 mx-5 lg:mx-36 p-8 bg-gray-100 shadow-lg rounded-3xl">
                <h2 className="font-poppins text-4xl font-bold mb-6 text-center text-teal-900">Cómo Recopilamos Datos y Mejoramos Nuestro Contenido</h2>
                <p className="text-lg font-medium font-sans text-gray-600 leading-relaxed text-center">
                    En nuestro esfuerzo por ofrecer un contenido relevante y de calidad, recopilamos datos de interacción y retroalimentación de nuestros usuarios. 
                </p>
                <p className="text-lg font-medium font-sans text-gray-600 leading-relaxed text-center mt-4">
                    <strong>Estrategias para Mejorar:</strong>
                </p>
                <ul className="list-disc text-lg font-medium font-sans text-gray-600 leading-relaxed px-4 mt-2 ">
                    <li>Realizamos encuestas periódicas para conocer la opinión de nuestros seguidores.</li>
                    <li>Analizamos el rendimiento de nuestras publicaciones en redes sociales.</li>
                    <li>Adaptamos el contenido según las necesidades y preferencias de nuestra audiencia.</li>
                    <li>Implementamos las sugerencias y comentarios recibidos para enriquecer nuestro enfoque educativo.</li>
                </ul>

            </div>

            {/* Sección de Llamada de Atención */}
            <div className="flex flex-col mt-24 mx-5 lg:mx-36 p-8 bg-blue-500 shadow-lg rounded-3xl text-white text-center items-center">
                <h2 className="font-poppins text-4xl font-semibold mb-6">¡Empieza a cambiar tu futuro financiero hoy!</h2>
                <p className="text-lg font-sans leading-relaxed">Únete a nuestra comunidad y accede a todo nuestro contenido en redes sociales que te ayudará a mejorar tus finanzas personales. ¡Es hora de tomar el control de tu dinero y construir un futuro sólido!</p>
                <Link
                    to="/contactenos"
                    className="inline-block bg-gray-400 text-white px-6 py-3 mt-6 rounded-2xl text-base font-semibold font-poppins transform hover:scale-105 transition-transform duration-300 ease-in-out whitespace-nowrap">
                    Contáctenos
                </Link>

            </div>

            {/* Sección de Testimonios */}
            <div className="flex flex-col mx-5 lg:mx-36 mb p-8 bg-gray-100 shadow-lg rounded-3xl">
                <h2 className="font-poppins text-4xl font-bold mb-6 text-center text-teal-900">Testimonios</h2>
                <div className="flex flex-col space-y-6">
                    <blockquote className="italic text-lg text-gray-600">"Este proyecto me ha ayudado a entender la importancia del ahorro y cómo invertir de manera segura. ¡Realmente útil!" Anonimo</blockquote>
                    <blockquote className="italic text-lg text-gray-600">"Gracias a las publicaciones, he aprendido a manejar mejor mis deudas. ¡Recomendado!" Anonimo</blockquote>
                    <blockquote className="italic text-lg text-gray-600">"La información que compartes es clara y fácil de seguir. Ahora siento que tengo el control de mis finanzas." Anonimo</blockquote>
                </div>
            </div>
        </div>
    );
};

export default Body;
