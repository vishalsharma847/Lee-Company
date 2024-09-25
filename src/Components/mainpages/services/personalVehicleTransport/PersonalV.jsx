import React from "react";
import { Link } from "react-router-dom";
import { FaMotorcycle } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import img1 from "/src/assets/real_images/About2.jpg";

const PersonalV = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center text-center mt-16 mb-4">
        <h1 className="mt-8 text-2xl font-bold w-4/5 lg:w-fit">
          Car/Bike Transportation
        </h1>
        <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
      </div>
      <div className="flex justify-center items-center flex-col lg:flex-row lg:justify-evenly lg:mt-10 lg:mb-20">
        <Link to="/services/complete-relocation">
          <div className="flex relative items-center text-center justify-evenly w-80 p-3 rounded-3xl">
            <FaMotorcycle className="size-28" />
            <FaCarSide className="size-28" />
          </div>
        </Link>
        <div className="flex items-center flex-col text-center w-3/4 lg:w-1/2">
          <h1 className="w-full font-bold underline leading-10 underline-offset-8 text-lg mb-4">
            Secure and Professional Vehicle Transportation Services by Lee Home
            Packers and Movers: Your Vehicles Deserve the Best
          </h1>
          <p className="w-full mb-3">
            Relocating to a new place can be a thrilling experience, but it also
            comes with the challenge of transporting your cherished vehicles,
            such as cars and bikes, to your new destination. At Lee Home Packers
            and Movers, we understand the importance of your vehicles and the
            emotional attachment you have to them. That's why we take immense
            pride in offering specialized car and bike transportation services
            that prioritize the safety, security, and timely delivery of your
            valuable possessions.
          </p>
          <p className="italic text-sm w-4/5">
            "With a solid reputation in the industry and a team of skilled
            professionals, you can trust us to handle your vehicles with utmost
            care, ensuring a smooth and hassle-free transportation experience."
          </p>
        </div>
      </div>
      <div className="flex text-center">
        <div className="flex flex-col items-center w-full lg:flex-row lg:justify-evenly">
          <div className="flex flex-col w-full items-center justify-center lg:w-1/2 ">
            <h3 className="p-2 border-black border-2 m-4 w-3/4 max-w-fit">
              Our Comprehensive Car and Bike Transportation Services:
            </h3>
            <div className="flex flex-col items-center justify-center w-4/5 ">
              <ol className=" text-pretty flex flex-col list-decimal text-justify text-md w-3/4 lg:w-full justify-center">
                <li>
                  <strong>Specialized Car and Bike Carriers: </strong> We take
                  the utmost care in selecting the right carriers for your
                  vehicles. Our specialized carriers are designed to accommodate
                  various vehicle sizes, ensuring a secure fit for each car or
                  bike.
                </li>
                <li className="mt-4">
                  <strong>Secure Packing Techniques: </strong> We leave no stone
                  unturned when it comes to protecting your vehicles. Our
                  skilled team employs top-of-the-line packing materials,
                  including protective padding and cushioning, to safeguard your
                  vehicles against any potential damages.
                </li>
                <li className="mt-4">
                  <strong>Experienced Drivers: </strong> Our experienced drivers
                  are well-versed in the nuances of vehicle transportation. They
                  ensure a smooth and safe journey for your cars and bikes,
                  adhering to traffic regulations and road safety standards at
                  all times.
                </li>
                <li className="mt-4 mb-4">
                  <strong>Insurance Coverage Options:</strong> While we take
                  every precaution to ensure the safe transportation of your
                  vehicles, accidents are unforeseeable. For added peace of
                  mind, we offer insurance coverage options for your vehicles
                  during transit, providing you with an extra layer of
                  protection. <i>(T&C Apply)</i>
                </li>
              </ol>
              <div className="flex flex-col justify-center items-center lg:hidden">
                <p className="text-left mb-4">
                  Lee Home Packers and Movers is your trusted companion for
                  secure and reliable car and bike transportation. With our
                  expertise, modern equipment, and customer-centric approach, we
                  ensure the safe and timely delivery of your vehicles to your
                  new destination. Let us handle the transportation of your
                  cherished vehicles, while you focus on embracing the
                  excitement of starting a new chapter in your life. With Lee
                  Home Packers and Movers, your beloved cars and bikes are in
                  safe hands, every step of the way.
                </p>
                <p className="mb-12 text-left">
                  Contact us today to experience the difference of our top-notch
                  car and bike transportation services and embark on a
                  stress-free and memorable relocation journey!
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center justify-center">
              <Link
                className="flex justify-center items-start mb-4 lg:mb-0 w-4/5 lg:w-fit"
                to="/"
              >
                <img className="flex w-4/5 lg:w-96" src={img1} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
        <div className="hidden flex-col justify-center items-center w-3/4 lg:flex">
          <p className="text-left mb-4">
            Lee Home Packers and Movers is your trusted companion for secure and
            reliable car and bike transportation. With our expertise, modern
            equipment, and customer-centric approach, we ensure the safe and
            timely delivery of your vehicles to your new destination. Let us
            handle the transportation of your cherished vehicles, while you
            focus on embracing the excitement of starting a new chapter in your
            life. With Lee Home Packers and Movers, your beloved cars and bikes
            are in safe hands, every step of the way.
          </p>
          <p className="mb-12 text-left">
            Contact us today to experience the difference of our top-notch car
            and bike transportation services and embark on a stress-free and
            memorable relocation journey!
          </p>
        </div>
    </div>
  );
};

export default PersonalV;
