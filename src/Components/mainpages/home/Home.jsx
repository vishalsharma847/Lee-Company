import React from "react";
import Form from "./form/Form";
import Why from "./why/Why";
import How from "./how/How";
import Feedback from "./feedback/Feedback";
const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center align-middle w- h-fit bg-grey -z-20">
      <div className="flex flex-col h-fit p-1 shadow-sm shadow-foot w-10/12 bg-indigo-300 align-middle mt-20 rounded-lg m-6">
        <h4 className="flex text-center blur-none justify-center mt-4 mb-4 font-bold text-2xl ">
          GET THE BEST QUOTE
        </h4>
        <Form/>
      </div>
      <div className="bg-gradient-to-b from-bodyprim to-bodysec w-full min-h-fit">
      <Why/>
      <How/>
      <Feedback/>
      </div>
    </section>
  );
};

export default Home;
