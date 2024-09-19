import React from "react";
import {CCarousel, CCarouselItem, CImage} from '@coreui/react'
import review from '/src/Components/mainpages/home/feedback/review.json'
const ControlledCarousel = () => {
  
  return (
    <div className="w-72">
    <CCarousel controls dark indicators touch transition="crossfade" className=" z-0 scale-100" >
        {review.map((e)=>{
        return (<CCarouselItem className="">
        <CImage className="d-block w-100 rounded-2xl" src={e.imgm} alt="slide 1" />
        </CCarouselItem> )
      })}
    </CCarousel>
    </div>
  );
};
export default ControlledCarousel;
