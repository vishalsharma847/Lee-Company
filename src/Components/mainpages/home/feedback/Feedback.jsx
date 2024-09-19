import React from "react";
import ControlledCarousel from "/src/Components/mainpages/home/feedback/ControlledCarousel";


const Feedback = () => {
  return (
    <div className="flex flex-col items-center mb-8 text-center">
      <h1 className="text-3xl font-bold w-4/5">Our Customer's Opinions</h1>
      <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
      <div class="slider">
        <div className="flex justify-center items-center mt-8">
          <ControlledCarousel/>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
