import React from 'react'
import { Link } from 'react-router-dom'
import { FaMotorcycle } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import img1 from "/src/assets/real_images/About2.jpg";

const PersonalV2 = () => {
  return (
    <div><div className="flex flex-col w-full items-center justify-center">
    <h3 className="p-2 w-3/4 border-black border-2 m-4">
    "Significance of Professional Car and Bike Transportation"
    </h3>
    <div className="flex justify-center w-4/5 ">
      <ol className=" text-balance flex flex-col list-decimal text-justify text-md w-3/4 justify-center">
        <li className="">
          <strong>Expert Handling and Specialized Carriers: </strong> Cars and bikes are not just modes of transportation; they are prized possessions. Our experienced team is well-versed in the art of handling vehicles during transportation. We utilize specialized carriers, equipped with advanced technology, to securely transport your vehicles, providing maximum protection and stability throughout the journey.
        </li>
        <li className="mt-4">
          <strong>Preventing Damage and Scratches: </strong> Scratches and dents can be a nightmare for any vehicle owner. Our team employs high-quality packing materials and fastening techniques to securely pack your vehicles, ensuring they remain scratch-free and damage-free during loading, unloading, and transportation.
        </li>
        <li className="mt-4">
          <strong>Time and Cost Efficiency: </strong>Moving can be overwhelming, and we understand that your time is precious. By entrusting your vehicle transportation to professionals, you save valuable time and effort. Our expertise and streamlined processes guarantee timely delivery, allowing you to focus on other aspects of your relocation.
        </li>
        <li className="mt-4 mb-4">
          <strong>Peace of Mind:</strong> Your peace of mind is our top priority. With our dedication to safety, reliability, and professionalism, you can rest assured that your beloved vehicles are in safe hands throughout the entire transportation journey.
        </li>
      </ol>
    </div>
  </div>
  <div className="flex flex-col w-full items-center justify-center">
    <h3 className="p-2 w-3/4 border-black border-2 m-4">
      Advantages Of The "Lee Home Packers and Movers"
    </h3>
    <div className="flex justify-center w-4/5 ">
      <ol className=" text-balance flex flex-col list-decimal text-justify text-md w-3/4 justify-center">
        <li className="">
          <strong>Reliability and Trust: </strong> With a solid reputation in the industry, we have earned the trust of numerous satisfied customers through our reliable and professional transportation services.
        </li>
        <li className="mt-4">
          <strong>Customer-Centric Approach: </strong> We understand that each move is unique, and we tailor our vehicle transportation solutions to meet your specific needs and preferences. Your satisfaction is at the heart of our service.
        </li>
        <li className="mt-4">
          <strong>Competitive Pricing: </strong> Our car and bike transportation services are competitively priced, offering excellent value for your investment without compromising on quality.
        </li>
        <li className="mt-4">
          <strong>Transparency and Trust: </strong> As a licensed and insured moving company, we assure you that your vehicles are in safe hands, providing you with complete confidence in our services.
        </li>
      </ol>
      <div className="flex justify-center"></div>
    </div>
    <Link className="flex justify-center mt-6 mb-4 w-4/5" to="/">
      <img className="flex w-4/5" src={img1} alt="" />
    </Link>
  </div></div>
  )
}

export default PersonalV2