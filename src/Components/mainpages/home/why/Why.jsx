import React from "react";

const Why = () => {
  return (
    <div className="flex flex-col items-center m-8 text-center">
      <h1 className="text-3xl font-bold">Why choose Lee Home Packers And Movers?</h1>
      <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
      <div className="flex flex-col w-full justify-evenly lg:flex-row">
        <div className=" flex flex-col items-center">
          <img src="/src/assets/Reliable.png" alt="Reliable" className="size-60 md:size-48" />
          <h2 className="text-xl font-bold">Reliable Service</h2>
          <p className="w-60 text-sm">100% Safe and Secure Moving.</p>
        </div>
        <div className=" flex flex-col items-center">
          <img src="/src/assets/Affordable image.png" alt="Affordable" className="size-60 md:size-48"/>
          <h2 className="text-xl font-bold">Affordable Price</h2>
          <p className="w-60 text-sm">Best and Reasonable price for moving.</p>
        </div>
        <div className=" flex flex-col items-center">
          <img src="/src/assets/No-hidden-charges.png" alt="No-Hidden" className="size-60 md:size-48"/>
          <h2 className="text-xl font-bold">No Hidden Charges</h2>
          <p className="w-60 text-sm">No Extra fees or Add-ons of any kind.</p>
        </div>
      </div>
    </div>
  );
};

export default Why;
