import React, { useEffect, useRef } from "react";
import review from "./review.json";
import { useState } from "react";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
//   const indexRef = useRef(1);

  const dotRef = useRef(null);
  
  const handleleft = () => {
    if (currentIndex <= review.length && currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
      const image = document.getElementById('imageDiv')
      image.style.transform=`translateX(${-1300+(100*(15-currentIndex))}%)`;
      
      const index = review[currentIndex].name
      const object = document.getElementById(index)
      object.style.backgroundColor = 'red'
      
      
      
    }
  };
  const handleright = () => {
    if (currentIndex < review.length && currentIndex >= 1) {
      setCurrentIndex(currentIndex + 1);
      const image = document.getElementById('imageDiv')
      image.style.transform=`translateX(${-100*currentIndex}%)`;
    }
  };
  useEffect(()=>{
    if (currentIndex <= review.length && currentIndex > 1) {
        const index = review[currentIndex].name
        const object = document.getElementById(index)
        object.style.backgroundColor = 'red'}},[handleleft,handleright])
  console.log(currentIndex);

  const handledot = () => {
    const index = review[currentIndex].name
    const object = document.getElementById(index)
    object.style.backgroundColor = 'red'
    
  }
  
//   const handleleft = () => {
//     if (indexRef.current <= review.length - 1 && indexRef.current > 1) {
//       indexRef.current--;
//       const image = document.getElementById("imageDiv");
//       image.style.transform = `translateX(${
//         -1300 + 100 * (14 - indexRef.current)
//       }%)`;
//       console.log(indexRef.current);
//     } else {
//       indexRef.current = 13;
//       const image = document.getElementById("imageDiv");
//       image.style.transform = `translateX(${
//         -1300 + 100 * (13 - indexRef.current)
//       }%)`;
//       console.log(indexRef.current);
//     }
//   };
//   const handleright = () => {
//     if (indexRef.current < review.length - 1 && indexRef.current >= 1) {
//       indexRef.current++;
//       const image = document.getElementById("imageDiv");
//       image.style.transform = `translateX(${-100 * indexRef.current}%)`;
//       console.log(indexRef.current);
//     }
//     else{
//         indexRef.current=1;
//       const image = document.getElementById("imageDiv");
//       image.style.transform = `translateX(0%)`;
//       console.log(indexRef.current);
//     }
//   };

  return (
    <div className="flex flex-col w-full justify-around h-fit mt-5">
      <div className="flex justify-between w-fit h-64">
        <button
          className="flex justify-center  items-center p-2 bg-red-200"
          onClick={handleleft}
        >
          left
        </button>
        <div className="flex overflow-hidden">
          <div className="flex " id="imageDiv">
            {review.map((e) => {
              return (
                <img
                  key={e.id}
                  className="w-full h-full"
                  src={e.imgm}
                  alt=""
                />
              );
            })}
          </div>
        </div>
        <button
          className="flex justify-center items-center bg-red-200 w-10 p-2"
          onClick={handleright}
        >
          right
        </button>
      </div>
      <div className="flex flex-row mt-5 justify-around">
        {review.map((e) => {
          return (
            <button
              key={e.id} id={e.name}
              className="w-3 h-3 rounded-xl bg-white"
              onClick={handledot}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
