import React from "react";
import img from "../images/pexels-photo-6387868.jpeg";
import Cards1 from "./Cards1";

const Home = () => {
  return (
    <div>
    <section class="bg_image"
    style={{
      backgroundImage: 'url('+img+')',
      backgroundSize: "cover",
      height: "100vh",
    }}>
      <div className="ml-10 text-white ">
        <br/><br/><br/><br/><br/>
        
      <h1 className="text-6xl font-bold">Stronger Solution</h1>
        <h2 className="text-6xl font-bold">to fight COVID-19</h2>
        <br />
        <h3><span className="text-yellow-700">-</span>COVID-19 Test Kit Economical Solution,Explicit Result</h3>
        <button className="mt-3 bg-yellow-300 hover:bg-gray-500 hover:text-white  text-black font-bold py-2 px-4 rounded">
          Explore
        </button><br/>
      
        {/* <div className="float-right mt-24 mr-5 p-5"> */}
        <div className="mt-24 mr-5 p-5 float-right"> 
        <button className=" bg-gray-300 hover:bg-gray-500 hover:text-yellow-500  text-black font-bold py-2 px-4 rounded mb-2">
          COVID-19
        </button>
        <br />
        <button className="  bg-gray-300 hover:bg-gray-500 hover:text-yellow-500 text-black font-bold py-2 px-4 rounded mb-2">
          COMPACT XL
        </button>
        <br />
        <button className=" bg-gray-300 hover:bg-gray-500 hover:text-yellow-500 text-black font-bold py-2 px-4 rounded mb-2">
          NATSPERT
        </button>
        <br />
        <button className=" bg-gray-300 hover:bg-gray-500 hover:text-yellow-500 text-black font-bold py-2 px-4 rounded">
          ID NAT
        </button>
        </div>
      </div>
    </section>
    <Cards1/>
    </div>
    
      );
};

export default Home;
