import React from "react";
import { Helmet } from "react-helmet";
import ServicCont from "./ServicCont";

const Services = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>This is Services</title>
      </Helmet>
      <div className="h-lvh">
      <ServicCont/>
      </div>
    </div>
  );
};

export default Services;
