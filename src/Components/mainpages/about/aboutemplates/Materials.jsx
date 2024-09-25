import React from "react";
import material from "/src/Components/mainpages/about/material.json";

const Materials = () => {
  return (
    <div className="flex flex-col w-4/5 items-center justify-center">
      <div>
        <h3 className="p-2 border-black border-2 m-4">
          Packing Materials that we use!
        </h3>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row">
        {material.map((e) => {
          return (
            <div className="flex justify-center w-full items-center mb-4">
              <div className="flex relative rounded-2xl justify-center items-center md:m-3">
                <img className="rounded-[200px] w-3/4 md:w-1/2 lg:w-full" src={e.img} alt={e.name} />
                <div className="text-xl md:text-xl lg:text-lg xl:text-xl font-bold flex absolute items-center hover:hidden">
                  <h1 className="w-full h-full">{e.name}</h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Materials;
