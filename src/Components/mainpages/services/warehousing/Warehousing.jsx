import React from 'react'
import OurMission from '/src/Components/mainpages/about/aboutemplates/OurMission';
import Form from '/src/Components/mainpages/home/form/Form';
import Ware from '/src/Components/mainpages/services/warehousing/Ware';
import WareComp2 from '/src/Components/mainpages/services/warehousing/WareComp2';


const Warehousing = () => {
  return (
  <div>
    <div className="flex flex-col items-center justify-center w-full h-fit">
      <Ware/>
      <div className="flex text-center">
        <div className="flex flex-col items-center w-full">
          <WareComp2/>
          <OurMission />
          <Form />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Warehousing