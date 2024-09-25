import React from "react";
import { Link } from "react-router-dom";
import { FaTruckFast } from "react-icons/fa6";
import img1 from "/src/assets/real_images/About2.jpg";

const Transport = () => {
  return (
    <div className="flex  flex-col items-center">
      <div className="flex flex-col justify-center items-center text-center mt-16 mb-4">
        <h1 className="mt-8 text-2xl font-bold w-4/5 lg:w-fit">
          Transport Vehicle
        </h1>
        <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly lg:mt-10 lg:mb-20">
        <Link to="/services/complete-relocation">
          <div className="flex relative items-center flex-col text-center justify-evenly size-28 lg:size-32 p-3 mb-8 rounded-3xl">
            <FaTruckFast className="size-28 lg:size-32" />
          </div>
        </Link>
        <div className="flex items-center flex-col text-center w-3/4 lg:w-1/2">
          <h1 className="w-full underline font-bold leading-10 underline-offset-8 text-lg mb-4">
            Seamless Transportation Services by Lee Home Packers and Movers:
            Safeguarding Your Belongings At Every Step of the Way
          </h1>
          <p className="w-full mb-3">
            Relocating can be a significant undertaking, and the transportation
            of your belongings plays a pivotal role in ensuring a successful and
            stress-free move. At Lee Home Packers and Movers, we take pride in
            offering top-notch transportation services that prioritize the
            safety and timely delivery of your cherished possessions. With a
            wealth of experience in the industry, our reliable transportation
            solutions guarantee a smooth ride for your belongings, providing you
            with peace of mind throughout the entire relocation process.
          </p>
          <p className="italic text-sm w-4/5">
            "With a proven track record in the industry, our reliable transport
            services ensure that your valued possessions reach their destination
            intact, making your relocation a hassle-free and memorable
            experience."
          </p>
        </div>
      </div>
      <div className="flex text-center flex-col">
        <div className="flex flex-col items-center w-full lg:flex-row lg:justify-evenly lg:mt-10">
          <div className="flex flex-col w-full items-center justify-center lg:w-1/2">
            <h3 className="p-2 border-black border-2 m-4">
              Our Reliable Transportation Services:
            </h3>
            <div className="flex flex-col items-center justify-center w-4/5 lg:w-full ">
              <ol className=" text-pretty flex flex-col list-decimal text-justify text-md w-3/4 justify-center">
                <li>
                  <strong>Experienced and Skilled Drivers: </strong> Our drivers
                  are experienced in handling various types of relocations.
                  Their expertise ensures the safe and efficient transport of
                  your belongings, providing you with peace of mind.
                </li>
                <li className="mt-4">
                  <strong>Local and Intercity Moves: </strong> Whether you are
                  moving locally within the city or relocating to another city,
                  our transport services cater to your needs, offering a
                  seamless transition.
                </li>
                <li className="mt-4">
                  <strong>Secure Loading and Unloading: </strong> Our skilled
                  team handle the loading and unloading process with utmost
                  care, ensuring that your items are safely placed in the
                  vehicle and taken out at the destination without any damage.
                </li>
                <li className="mt-4">
                  <strong>Special Handling for Fragile Items:</strong> Delicate
                  and fragile items require extra care during transportation.
                  Our skilled team uses specialized packing materials and
                  techniques to ensure these items are shielded from any bumps
                  or shocks during transit.
                </li>
                <li className="mt-4">
                  <strong>Transparent Pricing:</strong> We believe in
                  transparency, and our pricing is straightforward and
                  competitive. There are no hidden costs, and we provide a
                  detailed quote upfront, so you know exactly what to expect.
                </li>
                <li className="mt-4 mb-4">
                  <strong>Customer Satisfaction:</strong> Our ultimate goal is
                  your satisfaction. We take pride in our excellent customer
                  service, and our track record speaks for itself. We have
                  earned the trust and loyalty of numerous clients through our
                  dedicated and reliable moving services.
                </li>
              </ol>
              <div className="flex items-center flex-col lg:hidden">
                <p className="text-left mb-4">
                  Lee Home Packers and Movers provides efficient transport
                  vehicle services to ensure a smooth ride for your belongings
                  during your relocation journey. With our dedication to
                  reliability, safety, and customer satisfaction, you can trust
                  us to transport your items with utmost care and
                  professionalism. Contact us today to experience the difference
                  of our top-notch transport vehicle services and make your move
                  a stress-free and memorable one. Let us handle the
                  transportation of your valued possessions, while you focus on
                  embracing the new chapter of your life with excitement and
                  confidence.
                </p>
                <p className="mb-12 text-left">
                  Contact us today for a free quote and take the first step
                  towards a stress-free transportation service!
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              className="flex justify-center items-start mb-4 w-4/5 lg:w-fit"
              to="/"
            >
              <img className="flex w-4/5 lg:w-96" src={img1} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden items-center flex-col lg:flex w-3/4 mt-6">
        <p className="text-left mb-4">
          Lee Home Packers and Movers provides efficient transport vehicle
          services to ensure a smooth ride for your belongings during your
          relocation journey. With our dedication to reliability, safety, and
          customer satisfaction, you can trust us to transport your items with
          utmost care and professionalism. Contact us today to experience the
          difference of our top-notch transport vehicle services and make your
          move a stress-free and memorable one. Let us handle the transportation
          of your valued possessions, while you focus on embracing the new
          chapter of your life with excitement and confidence.
        </p>
        <p className="mb-12 text-left">
          Contact us today for a free quote and take the first step towards a
          stress-free transportation service!
        </p>
      </div>
    </div>
  );
};

export default Transport;
