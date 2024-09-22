import React from "react";
import Form from "/src/Components/mainpages/home/form/Form";
import Why from "/src/Components/mainpages/home/why/Why";
import How from "/src/Components/mainpages/home/how/How";
import Feedback from "/src/Components/mainpages/home/feedback/Feedback";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center align-middle w- h-fit bg-grey">
      <Helmet>
        <meta charSet="utf-8" />
        <title>This is Home</title>
      </Helmet>
      <div className="flex w-full h-max bg-purple-500" >
      <Form />
      </div>
      <div className=" w-full min-h-fit">
        <Why />
        <How />
        <Feedback />
      </div>
    </section>
  );
};

export default Home;
