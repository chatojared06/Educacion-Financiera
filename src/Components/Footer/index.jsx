import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className='flex flex-col items-center'>
        <h1 className='font-poppins text-3xl mb-4'>Contacto:</h1>
        <div className='mb-4'>
          <p className='text-center'>Email: 21932080@prepaenlinea-sep.edu.mx</p>
          <p className='text-center'>Nombre: Oscar Jared Ozono Moreno</p>
          <p className='text-center'>Grupo: M23C1G40-003</p>
        </div>

        <div className="flex space-x-6 mb-4">
          <a href="https://wa.me/6641334875" target="_blank" rel="noopener noreferrer">
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/30/whatsapp--v1.png" alt="WhatsApp" />
          </a>
          <a href="https://www.instagram.com/ozono_jared" target="_blank" rel="noopener noreferrer">
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/30/instagram-new--v1.png" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100082819054640&locale=es_LA" target="_blank" rel="noopener noreferrer">
            <img width="30" height="30" src="https://img.icons8.com/ios-filled/30/facebook-new.png" alt="Facebook" />
          </a>
        </div>

        <p className='text-sm text-gray-400'>© {new Date().getFullYear()} Educacion Financiera Para Todos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
