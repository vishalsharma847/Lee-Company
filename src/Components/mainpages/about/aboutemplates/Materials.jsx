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
      <div className="flex flex-col items-center justify-center">
        {material.map((e) => {
          return (
            <div className="flex justify-center w-4/5 mb-4">
              <div className="flex relative rounded-2xl justify-center">
                <img className="rounded-3xl" src={e.img} alt={e.name} />
                <div className="text-2xl font-bold flex absolute top-1/2 hover:hidden">
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
