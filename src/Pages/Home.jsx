import React from "react";
import BgImg from "../assets_copy/background.jpg"
import Img  from "../assets_copy/background2.jpg"
import MpMap from "../assets_copy/mandsaur_in_mp.png"
import WorldMap from "../assets_copy/mandsaur_in_world.png"
function Header(){
    return(
      <div className="w-screen h-screen  bg-cover bg-red-500 ">
        <div className="w-full h-full bg-cover bg-blue-400 " style={{backgroundImage: `url(${Img})`}}>
          {/* <h1 className="text-black">welcome to in this web world</h1> */}
        </div>
      </div>
    );
    }
   function GenralInfo(){
        return(
            <div className="w-screen h-screen items-center justify-center h-screen flex">
              <div className="flex w-[1000px] h-[600px]  p-5 gap-20 mt-30 items-center justify-center h-screen"> 
            <div className="rounded-3xl w-[600px] h-[400px] ">
                <img src={BgImg} alt="" className="rounded w-full h-full"  />
            </div>
            <div className="flex-wrap w-[500px] h-[400px]">
            <h1 className="text-3xl text-[#d7b112] text-center">General Info</h1>
            <p className="text-xl text-[#fbf38e]">
          Mandsaur is a popular tourist destination known for the temple of Lord Pashupatinath.
          Mandsaur is identified with the city of Dashpur, which is attested in various ancient
          and medieval texts and inscriptions. According to the 12th-century Jain work called the
          Parishishthparvan, the name Dashpur was given to the city by a group of merchants visiting
          the royal fortress of a king named Udayana and his ten sons.
        </p>
            </div>
            </div>
            </div>

        );
    }
  function Geographi (){
        return(
        <div className="w-screen h-screen items-center justify-center h-screen flex">
          <div className="flex w-[1000px] h-[600px]  p-5 gap-20 mt-30 items-center justify-center h-screen">
             <div className="rounded-3xl w-[600px] h-[400px] ">
           <img src={MpMap} alt="" className="rounded w-full h-full"/>
            </div>
            <div className="flex-wrap w-[500px] h-[400px]">
            <h1 className="text-3xl text-[#d7b112] text-center">Geography</h1>
        <p className="text-xl text-[#fbf38e]">
          Mandsaur has an area of 9,791 km2 (3,780 sq mi) and is present on the border of the
          Mewar and Malwa so the culture is the combination of the both regions, and is bounded
          by Neemuch District to the north west, Chittorgarh district to North east, Kota district
          and Jhalawar district to east and Pratapgarh District, and Ratlam District to the south.
          It is part of Ujjain Division.
        </p></div> 
        </div>
        </div>

        );
    }
function Map() {
  return (
    <div className="w-full h-full flex flex-col items-center text-center gap-6 px-5 py-10">
      <h1 className="text-3xl text-[#d7b112]">Map:</h1>
      <h1>heloo eoean</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d931454.9621761997!2d75.367938!3d24.224427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39642ea9db15e09f%3A0x89a3e5ea4399695b!2sMandsaur%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2us!4v1708586315798!5m2!1sen!2us"
        className="w-full h-64 sm:h-80 md:h-96 max-w-[600px] border-none rounded-md"
       allowFullScreen
      ></iframe>
   </div>
  );
}

  export default function Home(){
        return(
       <>
        <Header >
        <h1 className="text-blue-400 text-4xl">
          Welcome to our side 
        </h1>
      </Header>
        <GenralInfo/>
        <Geographi/>
        <Map/>
       </>
        );
    } 

