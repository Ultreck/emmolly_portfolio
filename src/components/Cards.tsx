// import React from 'react'
import img from "../assets/weather.png";
const Cards = () => {
  return (
    <div className="w-[350px] h-[590px] perspective-1000 bg-transparent cursor-pointer group rounded-3xl">
      <div className="text relative duration-500 preserve-3d group-hover:rotate-y-180 w-full h-full">
        <div className="text w-full h-full absolute rounded-3xl overflow-hidden">
          <img src={img} alt="" className="w-full h-full" />
        </div>
        <div className="w-full dark:bg-gray-900/95 p-10 bg-gray-100/95 rotate-y-180 backface-hidden absolute h-full rounded-3xl space-y-5 overflow-hidden">
          <div className="text">
            <span className="text-3xl font-bold">AGENT | OMEN</span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text font-semibold">// ROLE</span>
            <span className="text-3xl font-bold">CONTROLLER</span>
          </div>
          <div className="text flex flex-col space-y-5">
            <span className="font-bold">BIOGRAPHY</span>
            <span className="">
              A real-time weather application that provides current conditions,
              forecasts, and interactive weather maps using live API data.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
