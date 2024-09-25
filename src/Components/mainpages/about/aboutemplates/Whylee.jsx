import React from "react";
import { Link } from "react-router-dom";

const Whylee = ({ place }) => {
  return (
    <div className="flex flex-col w-4/5 lg:w-full lg:items-center">
      <div className="flex flex-col lg:w-full lg:flex-row-reverse lg:items-center lg:justify-evenly ">
        <div className="lg:size-96">
          <Link className="flex justify-center mb-4" to="/">
            <img
              className="flex w-4/5 lg:w-96"
              src="/src/assets/real_images/About1.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="lg:w-1/2 lg:flex lg:flex-col lg:items-center">
          <h3 className="p-2 border-black border-2 m-4 lg:w-fit lg:text-center">
            Why choose Lee Home Packers And Movers for your relocation needs?
          </h3>
          <div className="flex w-full justify-center">
            <ol className="list-decimal text-left w-4/5">
              <li className="mt-1">
                <strong>Experienced Team:</strong> Our skilled and experienced
                team of packers and movers in {place} knows the ins and outs of
                the relocation process. From packing your valuables with utmost
                care to handling the logistics efficiently, we've got it all
                covered.
              </li>
              <li className="mt-4">
                <strong>Comprehensive Services:</strong> Whether you are moving
                locally within {place} or planning an interstate relocation, we
                offer a wide range of services to cater to your specific needs.
                Our services include packing, loading, transportation,
                unloading, and even unpacking, providing an end-to-end solution.
              </li>
              <li className="mt-4">
                <strong>Safety First:</strong> We prioritize the safety of your
                belongings above everything else. Our packing materials are of
                the highest quality, and we use specialized techniques to secure
                fragile items. Rest assured, your possessions are in safe hands.
              </li>
              <li className="mt-4">
                <strong>Timely Delivery:</strong> We understand the importance
                of time in the moving process. Our team works diligently to
                ensure that your belongings reach the destination as per the
                agreed-upon schedule, without any delays.
              </li>
              <li className="mt-4">
                <strong>Transparent Pricing:</strong> We believe in
                transparency, and our pricing is straightforward and
                competitive. There are no hidden costs, and we provide a
                detailed quote upfront, so you know exactly what to expect.
              </li>
              <li className="mt-4">
                <strong>Customer Satisfaction:</strong> Our ultimate goal is
                your satisfaction. We take pride in our excellent customer
                service, and our track record speaks for itself. We have earned
                the trust and loyalty of numerous clients through our dedicated
                and reliable moving services.
              </li>
              <li className="mt-4 mb-4">
                <strong>Local Expertise:</strong> As a Delhi-based company, we
                possess in-depth knowledge of the city's geography and traffic
                patterns. This advantage allows us to plan the most efficient
                routes for a smoother relocation process.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full text-center lg:w-4/5">
        <p className="w-11/12 lg:text-sm lg:font-bold"><i>
          Whether you are moving your home or office, locally or long-distance,
          Lee Home Packers And Movers is here to make your move hassle-free and
          efficient. Sit back, relax, and let our packers and movers in Delhi
          handle the hard work for you.
          </i>
        </p>
        <p className="w-11/12 mt-4">
          Contact us today for a free quote and take the first step towards a
          stress-free relocation!
        </p>
      </div>
    </div>
  );
};

export default Whylee;
