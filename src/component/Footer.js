 import React from "react";
import { FiMail } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../images/mylab-logo.png";

const Footer = () => {
  return (
    <footer
      class="footer bg-white pb-1 justify-between text-center"
    >
      <div className="bg-gray-800 ">
        <div className="border-b-2 mb-3 ">
          <div class="text-white p-2 flex ">
            <button className="border rounded-lg">
              <a href="#" className=" flex text-white m-1 p-1 no-underline">
                <p className="mt-1 text-xl">
                  <FiMail />
                </p>
                <span className="ml-2 ">Subscribe</span>
              </a>
            </button>
          </div>
        </div>
        <div className="inset-x-0 z-50 h-16 pr-2 text-white font-medium flex justify-around items-center border-b-2">
          <span class="mb-2">
            <img src={logo} alt=""></img>
          </span>
          <span class="my-2">
            <a href="#" class="text-white no-underline   hover:text-red">
              Contact
            </a>
          </span>
          <span class="my-2">
            <a
              href="#"
              class="text-white no-underline text-md hover:text-blue-500"
            >
              History
            </a>
          </span>
          <span class="my-2">
            <a
              href="#"
              class="text-white no-underline text-md hover:text-blue-500"
            >
              Team
            </a>
          </span>
          <span class="my-2">
            <a
              href="#"
              class="text-white no-underline text-md hover:text-blue-500"
            >
              CSR
            </a>
          </span>
          <span class="my-2">
            <a
              href="#"
              class="text-white no-underline text-md hover:text-blue-500"
            >
              Awards
            </a>
          </span>
          <span class="my-2">
            <a
              href="#"
              class="text-white no-underline text-md hover:text-blue-500"
            >
              About
            </a>
          </span>
          <div className="flex icon">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div class="w-full inset-x-0 z-50 h-16 text-white font-medium flex justify-around items-center">
          <span class="my-2">
            <a
              href="#"
              class="text-white no-underline text-md hover:text-blue-500"
            >
              Terms
            </a>
          </span>
          <span class="my-2">
            <a
              href="#"
              class="text-white no-underline text-md hover:text-blue-500"
            >
              Privacy
            </a>
          </span>
          <span class="my-2">
            <a
              href="#"
              class="text-white no-underline text-md hover:text-blue-500"
            >
              Features
            </a>
          </span>
          <span class="my-2">
            <a
              href="#"
              class="text-white no-underline text-md hover:text-blue-500"
            >
              Explore
            </a>
          </span>
          <span class="my-2">
            <a
              href="#"
              class="text-white no-underline text-md hover:text-blue-500"
            >
              Testimonials
            </a>
          </span>
          <p class="text-sm text-white no-underline font-bold mb-2">
            © 2021 MyLab All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
