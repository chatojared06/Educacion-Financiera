import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-background bg-cover bg-center h-36 p-4 flex items-center justify-center">
      <div className='flex flex-row   items-center '>
        <Link
        to={"/"}
        >
        <img src="/educacion-financiera.png" alt="logo" className='h-24 lg:h-28 transform hover:scale-105 transition-transform duration-300 ease-in-out'/>
        </Link>
      <h1 className="text-white font-poppins text-4xl lg:text-5xl text-center m-3">Educación Financiera <br /><strong className='text-black'>Para Todos</strong></h1>
      </div>

    </nav>
  );
}

export default Navbar;
