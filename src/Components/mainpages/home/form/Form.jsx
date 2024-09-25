import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const Form = () => {
  const [date, setDate] = useState("text");

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const maxmonth = month + 2;
  var y = "none";

  var x = "none";

  if (month && day <= 9) {
    x = `${year}-0${month}-0${day}`;
    y = `${year}-${maxmonth}-0${day}`;
  } else if (month <= 9) {
    x = `${year}-0${month}-${day}`;
    y = `${year}-${maxmonth}-${day}`;
  } else if (day <= 9) {
    x = `${year}-${month}-0${day}`;
    y = `${year}-${maxmonth}-0${day}`;
  } else {
    x = `${year}-${month}-${day}`;
    y = `${year}-${maxmonth}-${day}`;
  }

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    location_from: "",
    location_to: "",
    date: "",
  });
  const form = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ww0447r",
        "template_fv88rl5",
        form.current,
        "Aib3Enum0uk7OuFq4"
      )
      .then((result) => {
        console.log(result.text);
        console.log("message sent!");
      });
    // axios
    // .post("/src/Components/mainpages/home/form/submit.php", data)
    // .then((response) => {
    //     document.querySelector(".success").style.cssText = "display: block; text-align: center;";
    //     setFormData({
    //       name:'',
    //       email:'',
    //       phone:'',
    //       location_from:'',
    //       location_to:'',
    //       date:''
    //     });
    //     alert('Form Submitted successfully.')
    // })
    // .catch((error) => {
    //     console.error("Error submitting form:", error);
    //     setIsLoading(false);
    // });
  };

  return (
    <div className="flex flex-col h-fit p-1 shadow-sm shadow-foot w-96 bg-indigo-300 align-middle mt-20 rounded-lg m-6">
      <Link to="tel:9310553121">
        <h4 className="flex text-center blur-none justify-center mt-4 mb-4 font-bold text-2xl ">
          WANT TO KNOW THE BEST PRICE FOR YOUR SERVICE ?
        </h4>
        <p className="mb-5 p-3 rounded-full bg-white w-3/4" >Tap Here Now!</p>
      </Link>

      {/* <form
        className="flex flex-col align-middle items-center text-sm mb-3" method="post" action="/src/Components/mainpages/home/form/submit.php"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name*  ex.'Rahul'"
          maxLength="20"
          required
          onChange={handleInputChange}
          value={data.name}
          className="w-10/12 p-1 rounded-lg m-1 active:border-none"
        />
        <input
          type="tel"
          name="phone"
          id="mobile"
          maxLength="10"
          pattern="[0-9]{10}"
          title="Must be a valid Mobile Number."
          placeholder="Mobile No.*  ex.'9574562XXX'"
          required
          onChange={handleInputChange}
          value={data.phone}
          className="w-10/12 p-1 rounded-lg m-1"
        />
        <input
          type="email"
          name="email"
          id="email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          title="Must be a valid E-Mail Address."
          placeholder="Email Address*  ex.'RahulsinXXX32@gmail.com'"
          required
          onChange={handleInputChange}
          value={data.email}
          className="w-10/12 p-1 rounded-lg m-1"
        />
        <input
          type="text"
          name="location_from"
          id="location-from"
          placeholder="Location From*  ex.'Rohini, Delhi'"
          required
          onChange={handleInputChange}
          value={data.location_from}
          className="w-10/12 p-1 rounded-lg m-1"
        />
        <input
          type="text"
          name="location_to"
          id="location-to"
          placeholder="Location To*  ex.'Siliguri, West bengal'"
          required
          onChange={handleInputChange}
          value={data.location_to}
          className="w-10/12 p-1 rounded-lg m-1"
        />
        <input
          type={date}
          name="date"
          id="date"
          onFocus={() => setDate("date")}
          onBlur={() => setDate("text")}
          min={x}
          max={y}
          onChange={handleInputChange}
          value={data.date}
          placeholder="Date Of Shifting*"
          className="w-10/12 p-1 rounded-lg m-1"
        />
        <input
          name="send"
          type="submit"
          id="submit-mobile"
          value="Submit"
          className="w-10/12 p-1 rounded-lg m-1 mb-6 bg-slate-400 text-white"
        />
      </form> */}
    </div>
  );
};

export default Form;
