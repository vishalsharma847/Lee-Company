import React, { useState } from "react";
import faq from "./faq.json";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";

const Faq = () => {

    const [state, setState] = useState(null)


  const makeVisible = (id) => {
    const para = document.getElementById(`review${id}`);
    if (para.style.display === "flex") {
      para.style.display = "none";
      setState(false)
    } else {
      para.style.display = "flex";
      setState(true)
    }
  };

  return (
    <div className="flex flex-col justify-center w-full h-fit bg-gradient-to-b from-bodyprim to-bodysec">
      <div className="flex flex-col justify-center items-center text-center mt-16 mb-4">
        <h1 className="mt-8 text-2xl font-bold w-4/5">
          Most Frequently Asked Questions
        </h1>
        <div className="w-20 h-2 bg-white rounded-lg mt-2"></div>
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        {faq.map((e) => {
          return (
            <div
              key={e.id}
              className="flex flex-col justify-center align-middle items-center w-4/5 mb-4"
            >
              <div
                className="bg-white rounded-xl flex justify-center items-center text-center"
                onClick={() => makeVisible(e.id)}
              >
                <h2 className="text-md font-bold m-2 w-72">{e.q}</h2>
                {state ? <IoMdArrowDropupCircle className="flex justify-center align-middle size-5 ml-0 mr-3" /> : <IoMdArrowDropdownCircle className="flex justify-center align-middle size-5 ml-0 mr-3" />}
              </div>
              <div className="hidden rev text-md p-3 bg-bodyprim" id={`review${e.id}`}>
                <p>{e.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;

{
  /* <div className="resp-centre">
<div className="Heading">
    <h2>Most Frequently Asked Questions</h2>
    <div id="underline"></div>
</div>
</div>
<div className="faq-cont">
<div className="Sub-heading">
    <li>Why should I hire Lee Home packers and movers?</li>
</div>
<div className="para" id="para1" style="transition: all 0.2s ease-out;">
    <p>Hiring Lee Home Packers and Movers for your relocation ensures a stress-free and efficient moving experience. With extensive experience, trained professionals, comprehensive services, a safety-first approach, and transparent pricing, we are committed to delivering top-notch service. Trust us to handle all aspects of your move, allowing you to focus on starting a new chapter in your life. Experience the difference of moving with the trusted experts at Lee Home Packers and Movers. Contact us today!</p>
</div>
</div> */
}
