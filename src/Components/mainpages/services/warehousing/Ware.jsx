import React from "react";
import { Link } from 'react-router-dom'
import { FaWarehouse } from "react-icons/fa";
import img1 from "/src/assets/real_images/About2.jpg";

const Ware = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center text-center mt-16 mb-4">
        <h1 className="mt-8 text-2xl font-bold w-4/5">Warehousing Services</h1>
        <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
      </div>
      <Link to="/services/complete-relocation">
        <div className="flex relative items-center flex-col text-center justify-evenly size-28 p-3 mb-8 rounded-3xl">
          <FaWarehouse className="size-28" />
        </div>
      </Link>
      <div className="flex items-center flex-col text-center w-3/4">
        <h1 className="w-full underline leading-10 underline-offset-8 text-lg mb-4">
          Secure and Reliable Warehousing Solutions by Lee Home Packers and
          Movers: Safeguarding Your Valuables with Excellence
        </h1>
        <p className="w-full mb-3">
          At Lee Home Packers and Movers, we understand that efficient
          warehousing plays a crucial role in the smooth functioning of supply
          chains and logistics. Whether you need temporary storage during your
          relocation or require long-term warehousing solutions for your
          business, we offer secure and reliable warehousing services tailored
          to your specific needs.
        </p>
        <p className="italic text-sm w-4/5">
          "Our spacious and well-maintained warehousing facilities are equipped
          with cutting-edge security systems, including 24/7 surveillance and
          access control, to safeguard your valuables at all times. Our safe and
          secure warehousing services are ideal for preserving the integrity of
          sensitive items, such as electronics, documents, and valuable
          possessions."
        </p>
      </div>
      <div className="flex text-center">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col w-full items-center justify-center">
            <h3 className="p-2 border-black border-2 m-4">
              Key Features of Our Warehousing Service:
            </h3>
            <div className="flex flex-col items-center justify-center w-4/5 ">
              <ol className=" text-balance flex flex-col list-decimal text-justify text-md w-3/4 justify-center">
                <li>
                  <strong>Secure and Trusted: </strong> Our warehousing
                  solutions offer a fortified fortress for your belongings,
                  protected against theft, fire, and other potential hazards,
                  allowing you to have peace of mind while they are under our
                  care.
                </li>
                <li className="mt-4">
                  <strong>Flexible Storage Options: </strong> Whether you need
                  short-term storage during a move, seasonal storage, or
                  long-term warehousing for your business inventory, we offer
                  flexible storage options tailored to your specific
                  requirements.
                </li>
                <li className="mt-4">
                  <strong>Inventory Management System: </strong> Our advanced
                  inventory management system allows for easy tracking and
                  retrieval of your stored items. You can access real-time
                  information about your belongings, ensuring efficient
                  management and control.
                </li>
                <li className="mt-4 mb-4">
                  <strong>Professional Handling:</strong> Our trained staff is
                  well-versed in handling items with care, ensuring proper
                  packaging, loading, and unloading of your goods for safe
                  storage.
                </li>
                <li className="mt-4 mb-4">
                  <strong>Transparent Pricing:</strong> We believe in
                  transparency, and our pricing is straightforward and
                  competitive. There are no hidden costs, so you know exactly
                  what to expect.
                </li>
                <li className="mt-4 mb-4">
                  <strong>Customer Satisfaction:</strong> Our ultimate goal is
                  your satisfaction. We take pride in our excellent customer
                  service, and our track record speaks for itself. We have
                  earned the trust and loyalty of numerous clients through our
                  dedicated and reliable moving services.
                </li>
                <li className="mt-4 mb-4">
                  <strong>Seamless Transition:</strong> If you are in the
                  process of relocating, our warehousing service can act as a
                  convenient buffer, providing a secure storage space until your
                  new destination is ready for delivery.
                </li>
              </ol>
              <p className="text-left mb-4">
                When it comes to secure and efficient warehousing solutions, Lee
                Home Packers and Movers is your go-to partner. With our advanced
                facilities, flexible storage options, and customer-centric
                approach, we ensure the safety and preservation of your
                belongings. Whether you need short-term or long-term storage,
                trust us to provide a seamless experience. Contact us today to
                discuss your warehousing needs and discover how our top-notch
                service can safeguard your valuables with excellence.
              </p>
              <p className="mb-12 text-left">
                Contact us today for a free quote and take the first step
                towards a stress-free warehousing service!
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link className="flex justify-center mb-4 w-4/5" to="/">
              <img className="flex w-4/5" src={img1} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ware;
