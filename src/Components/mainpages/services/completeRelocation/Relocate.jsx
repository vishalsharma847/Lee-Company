import React from "react";
import { Link } from "react-router-dom";
import { FaPeopleCarryBox } from "react-icons/fa6";
import img1 from "/src/assets/real_images/About2.jpg";

const Relocate = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center text-center mt-16 mb-4">
        <h1 className="mt-8 text-2xl font-bold w-3/4 lg:w-fit">
          Complete Moving Solution
        </h1>
        <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-evenly lg:mb-20 lg:mt-10" >
      <Link to="/services/complete-relocation">
        <div className="flex relative items-center flex-col text-center justify-evenly size-28 lg:size-32 p-3 mb-8 rounded-3xl">
          <FaPeopleCarryBox className="size-28 lg:size-40" />
        </div>
      </Link>
      <div className="flex items-center flex-col text-center w-3/4 lg:w-1/2">
        <h1 className="w-full underline font-bold leading-10 underline-offset-8 text-lg mb-4">
          Hassle-Free Relocation Solutions: Lee Home Packers and Movers
        </h1>
        <p className="w-full mb-3">
          When it comes to a seamless and stress-free relocation, Lee Home
          Packers and Movers is your trusted partner. We take pride in providing
          comprehensive relocation services tailored to meet your unique needs.
        </p>
        <p className="italic text-sm w-4/5">
          "Experience a Stress-Free Move with Lee Home Packers and Movers! Our
          Expert Team Ensures a Seamless Transition for Your Home or Office
          Relocation. From Professional Packing to Safe Transportation, We Cater
          to Your Specific Needs. Say Goodbye to Moving Stress - Embrace a
          Smooth, Exciting Journey with Us. Trusted & Renowned, We Offer
          Complete Relocation Services for Homes, Offices, and Businesses. Let
          Our Dedicated Team Make Your Move Effortless!"
        </p>
      </div>
      </div>
      <div className="flex text-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:justify-evenly">
          <div className="flex flex-col w-full lg:w-1/2 items-center justify-center">
            <h3 className="p-2 border-black border-2 m-4">
              Our Complete Relocation Services:
            </h3>
            <div className="flex flex-col items-center justify-center w-4/5">
              <ol className=" text-pretty flex flex-col list-decimal text-justify text-md w-3/4 lg:w-full justify-center">
                <li>
                  <strong>Professional Packing: </strong> Our skilled packers
                  understand the value and significance of your belongings. With
                  utmost care, they use high-quality packing materials to ensure
                  that every item is well-protected during transit. Fragile
                  items, delicate decor, and valuable possessions receive
                  special attention, providing you with peace of mind throughout
                  the move.
                </li>
                <li className="mt-4">
                  <strong>Efficient Loading and Unloading: </strong> Our trained
                  and courteous movers handle the loading and unloading process
                  with utmost care, utilizing proper techniques and equipment to
                  prevent any damage to your items. We ensure that heavy
                  furniture and delicate boxes are handled safely, leaving no
                  room for worry.
                </li>
                <li className="mt-4">
                  <strong>Safe Transportation: </strong> Our modern fleet of
                  well-maintained moving vehicles is designed to transport your
                  belongings safely to your new destination. Our experienced
                  drivers navigate the journey with expertise, ensuring that
                  your possessions arrive on time and in excellent condition.
                </li>
                <li className="mt-4">
                  <strong>Unpacking Assistance:</strong> Upon reaching your new
                  home or office, our team can assist with unpacking and
                  arranging your items, making the settling-in process smooth
                  and hassle-free. We ensure your belongings are placed where
                  you desire, so you can start enjoying your new space right
                  away.
                </li>
                <li className="mt-4">
                  <strong>Warehousing Solutions:</strong> We understand that
                  sometimes, a seamless move requires temporary storage
                  solutions. Whether you need a short-term storage option during
                  the move or long-term warehousing for your business inventory,
                  our secure and climate-controlled storage facilities are at
                  your disposal.
                  <span className="italic font-bold text-sm">(T&C Apply)</span>
                </li>
                <li className="mt-4 mb-4">
                  <strong>Insurance Options:</strong> To provide an extra layer
                  of protection for your belongings, we offer insurance coverage
                  options. While our team handles your items with the utmost
                  care, having insurance ensures peace of mind and financial
                  security in case of any unforeseen incidents.{" "}
                  <span className="italic font-bold text-sm">(T&C Apply)</span>
                </li>
              </ol>
              <p className="text-left mb-4">
                Whether you are moving your home or office, locally or
                long-distance, Lee Home Packers And Movers is here to make your
                move hassle-free and efficient. Sit back, relax, and let our
                packers and movers handle the hard work for you.
              </p>
              <p className="mb-12 text-left">
                Contact us today for a free quote and take the first step
                towards a stress-free relocation!
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link className="flex justify-center items-start mb-4 w-4/5 lg:w-fit" to="/">
              <img className="flex w-4/5 lg:w-96" src={img1} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Relocate;
