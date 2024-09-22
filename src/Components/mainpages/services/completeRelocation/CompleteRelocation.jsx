import React from "react";
import OurMission from "/src/Components/mainpages/about/aboutemplates/OurMission";
import Form from "/src/Components/mainpages/home/form/Form";
import RelocateComp2 from "/src/Components/mainpages/services/completeRelocation/RelocateComp2";
import Relocate from "/src/Components/mainpages/services/completeRelocation//Relocate";
import { Helmet } from "react-helmet";

const CompleteRelocation = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>This is Complete Relocation</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center w-full h-fit">
        <Relocate />
        <div className="flex text-center">
          <div className="flex flex-col items-center w-full">
            <RelocateComp2 />
            <OurMission />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteRelocation;
