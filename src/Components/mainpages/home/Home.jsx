import React from "react";
import Form from "/src/Components/mainpages/home/form/Form";
import Why from "/src/Components/mainpages/home/why/Why";
import How from "/src/Components/mainpages/home/how/How";
import Feedback from "/src/Components/mainpages/home/feedback/Feedback";
const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center align-middle w- h-fit bg-grey -z-20">
      <Form/>
      <div className="bg-gradient-to-b from-bodyprim to-bodysec w-full min-h-fit">
      <Why/>
      <How/>
      <Feedback/>
      </div>
    </section>
  );
};

export default Home;
