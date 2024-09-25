import React from "react";
import { Link } from "react-router-dom";
import img1 from "/src/assets/real_images/About2.jpg";

const RelocateComp2 = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:justify-evenly lg:items-center lg:mt-12 lg:mb-12 ">
      <div className="flex flex-col w-full items-center justify-center lg:w-1/2">
        <h3 className="p-2 w-3/4 max-w-fit border-black border-2 m-4 ">
          Advantages Of The "Lee Home Packers and Movers"
        </h3>
        <div className="flex justify-center w-4/5 ">
          <ol className=" text-pretty flex flex-col list-decimal text-justify text-md w-3/4 lg:w-full justify-center">
            <li className="">
              <strong>Experience and Expertise: </strong> Our team is the
              backbone of our success. We have a skilled and dedicated workforce
              that is trained to handle all aspects of the relocation process.
              Their friendly demeanor and professional approach make your moving
              journey a pleasant and hassle-free one.
            </li>
            <li className="mt-4">
              <strong>Customer-Centric Approach: </strong> At Lee Home Packers
              and Movers, we prioritize your needs and preferences. We listen
              attentively, understand your requirements, and tailor our services
              to ensure your complete satisfaction throughout the process.
            </li>
            <li className="mt-4">
              <strong>Top-notch Packing Materials: </strong> Your belongings are
              precious, We use premium quality packing materials to safeguard
              your items during transit. Our packing experts employ
              industry-best techniques to ensure that your belongings reach
              their destination in pristine condition.
            </li>
            <li className="mt-4">
              <strong>Transparency and Trust:</strong> We believe in maintaining
              transparency in our pricing and services. There are no hidden
              charges or unexpected surprises when you choose Lee Home Packers
              and Movers as your relocation partner.
            </li>
            <li className="mt-4">
              <strong>Licensed and Insured:</strong> As a licensed and insured
              moving company, we provide the assurance that your belongings are
              in safe hands. Our commitment to safety and security sets us apart
              as a reliable choice for your move.
            </li>
            <li className="mt-4 mb-12">
              <strong>Timely and Efficient Service:</strong> We understand the
              value of your time, and our team works diligently to ensure timely
              and efficient completion of your move. With Lee Home Packers and
              Movers, you can rest assured that your relocation will be executed
              seamlessly.
            </li>
          </ol>
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
  );
};

export default RelocateComp2;
