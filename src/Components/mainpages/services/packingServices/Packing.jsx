import React from "react";
import { Link } from "react-router-dom";
import img1 from "/src/assets/real_images/About2.jpg";
import { FaBoxOpen } from "react-icons/fa";

const Packing = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center text-center mt-16 mb-4">
        <h1 className="mt-8 text-2xl font-bold w-4/5">Packing Services</h1>
        <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
      </div>
      <Link to="/services/complete-relocation">
        <div className="flex relative items-center flex-col text-center justify-evenly size-28 p-3 mb-8 rounded-3xl">
          <FaBoxOpen className="size-28" />
        </div>
      </Link>
      <div className="flex items-center flex-col text-center w-3/4">
        <h1 className="w-full underline leading-10 underline-offset-8 text-lg mb-4">
          Premium Packing Services by Lee Home Packers and Movers: Ensuring a
          Smooth and Secure Move
        </h1>
        <p className="w-full mb-3">
          When it comes to relocating, the packing process plays a critical role
          in safeguarding your precious belongings during transit. At Lee Home
          Packers and Movers, we understand the significance of proper packing,
          and that's why we offer top-of-the-line packing services to ensure a
          seamless and secure move.
        </p>
        <p className="italic text-sm w-4/5">
          " With years of experience in the industry, our skilled packers are
          equipped with the expertise and knowledge to handle your items with
          the utmost care, providing you with peace of mind throughout the
          entire relocation process."
        </p>
      </div>
      <div className="flex text-center">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col w-full items-center justify-center">
            <h3 className="p-2 border-black border-2 m-4">
              Our Expert Packing Services:
            </h3>
            <div className="flex flex-col items-center justify-center w-4/5 ">
              <ol className=" text-balance flex flex-col list-decimal text-justify text-md w-3/4 justify-center">
                <li>
                  <strong>Customized Packing Solutions: </strong> We understand
                  that each move is unique, and so are your packing
                  requirements. Our team assesses your belongings and develops
                  customized packing plans tailored to your specific needs.
                </li>
                <li className="mt-4">
                  <strong>Premium-Quality Packing Materials: </strong> To ensure
                  the highest level of protection, we use top-notch packing
                  materials, including sturdy boxes, bubble wrap, packing paper,
                  and protective padding.
                </li>
                <li className="mt-4">
                  <strong>Secure Furniture Wrapping: </strong> Furniture is an
                  essential part of any move. We expertly disassemble and wrap
                  your furniture to protect it from scratches and dents during
                  transportation.
                </li>
                <li className="mt-4 mb-4">
                  <strong>Electronics and Appliance Care:</strong> Electronics
                  and appliances are valuable investments. We take extra care in
                  packing and securing these items, providing adequate
                  protection during the move.
                </li>
                <li className="mt-4 mb-4">
                  <strong>Artwork and Valuables:</strong> Art pieces and
                  valuables hold sentimental and monetary value. Our experts
                  employ delicate packing techniques to ensure their safe
                  transportation.
                </li>
                <li className="mt-4 mb-4">
                  <strong>Insurance Options:</strong> Our systematic approach
                  includes labeling each box and creating a detailed inventory
                  list. This simplifies the unpacking process, allowing you to
                  easily locate your items in your new space.
                </li>
                <li className="mt-4 mb-4">
                  <strong>Unparalleled Protection:</strong> At Lee Home Packers
                  and Movers, we understand the sentimental and monetary value
                  of your possessions. Our professional packing techniques
                  provide unparalleled protection, guarding your items against
                  any potential damage during transportation.
                </li>
              </ol>
              <p className="text-left mb-4">
                When it comes to ensuring a smooth and secure move, Lee Home
                Packers and Movers stands out as your reliable partner. Our
                premium packing services, backed by experience, expertise, and a
                customer-centric approach, guarantee the safety and protection
                of your valuable belongings during transportation. Trust us to
                handle your packing needs with expert care, enabling you to
                embark on your moving journey with complete confidence.
              </p>
              <p className="mb-12 text-left">
                Contact us today to experience the difference of our top-notch
                packing services and make your relocation an effortless and
                stress-free process. Let us take care of your packing needs
                while you focus on starting a new chapter in your life with
                ease!
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

export default Packing;
