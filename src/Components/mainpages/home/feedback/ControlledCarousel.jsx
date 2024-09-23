import React, { useEffect, useState } from "react";
import {CCarousel, CCarouselItem, CImage} from '@coreui/react'
import axios from "axios";


const ControlledCarousel = () => {
  const [images,setImages]=useState([])

  const getProducts = async()=> {
      const res = await axios.get('/api/reviewimages')
      setImages(res.data)
  }

  useEffect(()=> {
      getProducts()
  },[])

  return (
    <div className="w-72">
    <CCarousel controls dark indicators touch transition="crossfade" className=" z-0 scale-100" >
        {images && images.map((e)=>{
        return (<CCarouselItem className="">
        <CImage className="d-block w-100 rounded-2xl" src={e.imgm} alt="slide 1" />
        </CCarouselItem> )
      })}
    </CCarousel>
    </div>
  );
};
export default ControlledCarousel;
