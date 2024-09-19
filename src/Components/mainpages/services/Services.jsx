import React from "react";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { FaWarehouse } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center mt-16 mb-4">
        <h1 className="mt-8 text-3xl font-bold w-4/5">Our Services</h1>
        <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
      </div>
      <div className="flex flex-col text-center items-center justify-center">
        {/* <div className="flex relative items-center flex-col text-center justify-between size-60 p-3 mb-8 bg-white rounded-3xl">
          <FaPeopleCarryBox className="size-20" />
          <div className="flex w-full justify-between">
            <FaBoxOpen className="size-20" />
            <FaTruckFast className="size-20" />
          </div>
          <h3 className="flex text-slate-600 justify-center items-center top-16 p-3 rounded-[100%] absolute font-bold bg-blue-200 size-28">
            Complete Moving Solution
          </h3>
        </div> */}
        <Link to="/services/complete-relocation">
          <div className="flex relative items-center flex-col text-center justify-evenly size-60 p-3 mb-8 bg-white rounded-3xl">
            <FaPeopleCarryBox className="size-28" />
            <h3 className="flex w-full text-slate-600 justify-center items-center top-16 p-3 rounded-2xl font-bold bg-blue-200 ">
              Complete Moving Solution
            </h3>
          </div>
        </Link>
        <Link to="/services/packing-services">
          <div className="flex relative items-center flex-col text-center justify-evenly size-60 p-3 mb-8 bg-white rounded-3xl">
            <FaBoxOpen className="size-28" />
            <h3 className="flex w-full text-slate-600 justify-center items-center top-16 p-3 rounded-2xl font-bold bg-blue-200 ">
              Packing Services
            </h3>
          </div>
        </Link>
        <Link to="/services/transport-vehicle">
          <div className="flex relative items-center flex-col text-center justify-evenly size-60 p-3 mb-8 bg-white rounded-3xl">
            <FaTruckFast className="size-28" />
            <h3 className="flex w-full text-slate-600 justify-center items-center top-16 p-3 rounded-2xl font-bold bg-blue-200 ">
              Transport Vehicle
            </h3>
          </div>
        </Link>
        <Link to="/services/warehousing">
          <div className="flex relative items-center flex-col text-center justify-evenly size-60 p-3 mb-8 bg-white rounded-3xl">
            <FaWarehouse className="size-28" />
            <h3 className="flex w-full text-slate-600 justify-center items-center top-16 p-3 rounded-2xl font-bold bg-blue-200 ">
              Storage Solutions
            </h3>
          </div>
        </Link>
        <Link to="/services/personal-vehicle-relocation">
          <div className="flex relative items-center flex-col text-center justify-evenly size-60 p-3 mb-8 bg-white rounded-3xl">
            <div className="flex w-full justify-between">
              <FaMotorcycle className="size-24" />
              <FaCarSide className="size-24" />
            </div>
            <h3 className="flex w-full text-slate-600 justify-center items-center top-16 p-3 rounded-2xl font-bold bg-blue-200 ">
              Car/Bike Transportation
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
