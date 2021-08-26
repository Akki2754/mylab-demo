import React from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
import {FaDownload,FaSignInAlt,FaSearch} from "react-icons/fa";
import {MdSupervisorAccount}from "react-icons/md";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

// const Navbar = ({ toggle }) => {
  return (
   <nav className={colorChange ? 'navbar colorChange' : 'navbar'}
      className="fixed w-full inset-x-0 z-50 h-16 text-white bg-transparent font-medium flex justify-between items-center "
      role="navigation"
    >
      <Link to="#" className="pl-8 no-underline text-white font-bold text-3xl">
        MyLab
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="md:block hidden ml-20">
        <Link to="/" className="p-3 no-underline text-white">
          Home
        </Link>
        <Link to="/Products" className="p-3 no-underline dropdown-toggle text-white">
          Products
        </Link>
        <Link to="/Application" className="p-3 no-underline dropdown-toggle text-white">
          Application
        </Link>
        <Link to="/Knowledge" className="p-3 no-underline dropdown-toggle text-white">
          Knowledge
        </Link>
        <Link to="/Company" className="p-3 no-underline dropdown-toggle text-white">
          Company
        </Link>
        <Link to="/Media" className="p-3 no-underline dropdown-toggle text-white">
          Media
        </Link>
        <Link to="/Career" className="p-3 no-underline dropdown-toggle text-white">
          Career
        </Link>
        <Link to="/Contact Us" className="p-3 no-underline dropdown-toggle text-white">
          Contact Us
        </Link>
      </div>
      <div className='flex space-x-6 p-2'>
      <Link className="text-white h-6">    
      <FaDownload/>
      </Link>
      <Link className="text-white h-6">
        <MdSupervisorAccount/>
      </Link>
      <Link className="text-white h-6">
        <FaSignInAlt/>
      </Link>
      <Link className="text-white">
      <FaSearch/>
      </Link>
      </div>
    </nav>
    );
};

export default Navbar;
