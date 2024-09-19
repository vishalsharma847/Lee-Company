import React from "react";
import { Link } from "react-router-dom";

const WhatMakesUsUnique = ({place}) => {
  return (
    <div class="flex flex-col w-full">
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col w-full items-center justify-center">
          <h3 className="p-2 border-black border-2 m-4">
            What makes Lee Home Packers And Movers {place} unique?
          </h3>
          <div className="flex justify-end w-4/5 ">
            <ol className="flex flex-col list-decimal text-left w-11/12 justify-end">
              <li className="">
                <strong>Trained and Professional Staff:</strong> Our team is the
                backbone of our success. We have a skilled and dedicated
                workforce that is trained to handle all aspects of the
                relocation process. Their friendly demeanor and professional
                approach make your moving journey a pleasant and hassle-free
                one.
              </li>
              <li className="mt-4">
                <strong>Personalized Approach:</strong> No two moves are the
                same, and we understand that. Our team takes the time to
                understand your specific requirements and tailor our services
                accordingly. We believe in building relationships and providing
                personalized attention to every client to ensure complete
                satisfaction.
              </li>
              <li className="mt-4">
                <strong>Top-notch Packing Materials:</strong> Your belongings
                are precious, and we treat them as such. We use premium quality
                packing materials to safeguard your items during transit. Our
                packing experts employ industry-best techniques to ensure that
                your belongings reach their destination in pristine condition.
              </li>
              <li className="mt-4 mb-4">
                <strong>Customer-Centric Approach:</strong> At Lee Home Packers
                and Movers {place}, customer satisfaction is at the core of
                everything we do. We understand that every move is unique, and
                our team works closely with you to tailor our services to your
                specific needs. Our customer support is always available to
                address your queries and concerns promptly, making your
                relocation experience hassle-free and enjoyable.
              </li>
            </ol>
          </div>
        </div>
        <div className="flex justify-center">
          <Link className="flex justify-center mb-4 w-4/5" to="/">
            <img
              className="flex w-4/5"
              src="./src/assets/real_images/About2.jpg"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsUnique;
