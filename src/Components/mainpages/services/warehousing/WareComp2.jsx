import React from "react";
import { Link } from "react-router-dom";
import { FaWarehouse } from "react-icons/fa";
import img1 from "/src/assets/real_images/About2.jpg";

const WareComp2 = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row-reverse lg:mt-16 lg:justify-evenly lg:mb-16">
      <div className="flex flex-col w-full items-center justify-center lg:w-1/2">
        <h3 className="p-2 w-3/4 max-w-fit border-black border-2 m-4" >
          Why Choose Lee Home Packers and Movers for Warehousing?
        </h3>
        <div className="flex justify-center w-4/5">
          <ol className=" text-pretty flex flex-col list-decimal text-justify text-md w-3/4 lg:w-full justify-center">
            <li className="">
              <strong>Experience and Expertise: </strong> With years of
              experience in the moving and logistics industry, we have garnered
              the expertise to handle warehousing needs efficiently and
              professionally.
            </li>
            <li className="mt-4">
              <strong>Customer-Centric Approach: </strong> At Lee Home Packers
              and Movers, customer satisfaction is at the core of our service.
              We strive to understand your unique storage requirements and
              provide tailored solutions to exceed your expectations.
            </li>
            <li className="mt-4">
              <strong>Reliable and Trusted: </strong> Our reputation as a
              reliable and trusted moving company precedes us. Clients have
              consistently relied on us to store their valuables securely,
              making us their preferred choice for warehousing solutions.
            </li>
          </ol>
          <div className="flex justify-center"></div>
        </div>
      </div>
        <div className="flex items-center justify-center">
          <Link
            className="flex justify-center items-start mb-4 w-4/5 lg:w-fit"
            to="/"
          >
            <img className="flex w-4/5 lg:w-96" src={img1} alt="" />
          </Link>
        </div>
    </div>
  );
};

export default WareComp2;
