import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "/src/assets/real_images/About2.jpg";

const TransportComp2 = () => {
  return (
    <div><div className="flex flex-col w-full items-center justify-center">
    <h3 className="p-2 w-3/4 border-black border-2 m-4">
    "Importance Of Professional Transportation Services"
    </h3>
    <div className="flex justify-center w-4/5 ">
      <ol className=" text-balance flex flex-col list-decimal text-justify text-md w-3/4 justify-center">
        <li className="">
          <strong>Reliability and Punctuality: </strong> Our transport vehicle services are designed to be reliable and timely. We understand the value of your time, and our prompt pickups and deliveries ensure that your move stays on schedule.
        </li>
        <li className="mt-4">
          <strong>Secure and Safe Transportation: </strong> Safety is our utmost priority. Our well-maintained vehicles and expert drivers ensure that your items are protected from any potential damage or mishaps during transit.
        </li>
        <li className="mt-4">
          <strong>Specialized Handling for Fragile Items: </strong>Delicate and fragile items receive special attention during transport. We use cushioning materials and secure packing techniques to safeguard these items from any bumps or shocks during transportation.
        </li>
        <li className="mt-4 mb-4">
          <strong>Wide Coverage Area:</strong> Whether you are moving locally within the city or to a distant location, our transportation services cover a wide area, making us your go-to partner for various types of relocations.
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
          <strong>Customer-Centric Approach: </strong> Your satisfaction is our top priority. We listen attentively to your needs and provide personalized transportation solutions that cater to your specific requirements.
        </li>
        <li className="mt-4">
          <strong>Competitive Pricing: </strong> Our transport vehicle services are competitively priced, offering excellent value for your investment without compromising on quality.
        </li>
        <li className="mt-4">
          <strong>Transparency and Trust: </strong> We believe in maintaining transparency in our pricing and services. There are no hidden charges or unexpected surprises when you choose Lee Home Packers and Movers as your relocation partner.
        </li>
        <li className="mt-4 mb-4">
          <strong>Licensed and Insured:</strong> As a licensed and insured moving company, we offer the assurance that your belongings are in safe hands, providing you with peace of mind throughout the relocation process.
        </li>
        <li className="mt-4 mb-4">
          <strong>Timely and Efficient Service:</strong> We understand the value of your time, and our team works diligently to ensure timely and efficient completion of your move. With Lee Home Packers and Movers, you can rest assured that your relocation will be executed seamlessly.
        </li>
      </ol>
      <div className="flex justify-center"></div>
    </div>
    <Link className="flex justify-center mb-4 w-4/5" to="/">
      <img className="flex w-4/5" src={img1} alt="" />
    </Link>
  </div></div>
  )
}

export default TransportComp2