import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { RiArrowDropUpLine } from "react-icons/ri";
import Logo from "/src/assets/Logo.png";
import Logoname from "/src/assets/LeeHomeNameLogo.png";
import Call from "/src/assets/call-icon.png";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [servmenu, setServmenu] = useState(false);
  const [servmenulg, setServmenulg] = useState(false);

  const openmenu = () => {
    const ser = document.getElementById("service");
    const nav = document.getElementById("nav");
    if (nav.style.display === "none") {
      nav.style.display = "flex";
      setMenu(true);
    } else {
      nav.style.display = "none";
      setMenu(false);
      ser.style.display = "none";
      setServmenu(false);
    }
  };
  const servicetab = () => {
    const nav = document.getElementById("service");

    if (nav.style.display === "none") {
      nav.style.display = "flex";
      setServmenu(true);
    } else {
      nav.style.display = "none";
      setServmenu(false);
    }
  };
  const servicetablg = () => {
    const nav = document.getElementById("servicelg");

    if (nav.style.display === "none") {
      nav.style.display = "flex";
      setServmenulg(true);
    } else {
      nav.style.display = "none";
      setServmenulg(false);
    }
  };

  useEffect(() => {
    const icon = document.getElementById("nav");
    icon.style.display = "none";

    const ser = document.getElementById("service");
    ser.style.display = "none";

    const serlg = document.getElementById("servicelg");
    serlg.style.display = "none";

  }, []);

  return (
    <header className="fixed top-0 w-screen z-20">
      <nav>
        <div
          id="navbar"
          className="flex items-center justify-between bg-head text-xl lg:justify-around"
        >
          <ul
            id="logobox"
            className="flex align-middle text-center w-full h-16 justify-between items-center p-3 z-20 lg:justify-start lg:max-w-fit lg:ml-6"
          >
            <div id="logoimg" className="ml-3  size-12">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div id="logoname" className="w-40">
              <Link to="/">
                <img src={Logoname} alt="logo" />
              </Link>
            </div>
            <div className="block mr-3 lg:hidden">
              {menu ? (
                <RxCross2 className="size-8 text-white" onClick={openmenu} />
              ) : (
                <IoMdMenu className="size-8 text-white" onClick={openmenu} />
              )}
            </div>
          </ul>
          <ul className="hidden  lg:flex flex-grow items-center justify-around text-base">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li onClick={servicetablg} className="flex items-center">
              <p className="cursor-pointer">Services</p>
              {servmenulg ? (
                <RiArrowDropUpLine className="ml-1 size-4" />
              ) : (
                <IoIosArrowDropdown className="ml-1 size-4" />
              )}
              <div
                id="servicelg"
                className="hidden absolute text-sm top-16 p-2 rounded-2xl flex-col bg-prim h-fit"
              >
                <Link
                  to="/services/complete-relocation"
                  onClick={()=>servicetablg}
                  className=" bg-sec w-full h-6 flex items-center justify-center p-3 rounded-3xl mb-0.5 active:bg-slate-500"
                >
                  Complete Moving Solution
                </Link>
                <Link
                  to="/services/packing-services"
                  onClick={()=>servicetablg}
                  className=" bg-sec w-full h-6 flex items-center justify-center p-3 rounded-3xl mt-0.5 mb-0.5 "
                >
                  Packing Services
                </Link>
                <Link
                  to="/services/transport-vehicle"
                  onClick={()=>servicetablg}
                  className=" bg-sec w-full h-6 flex items-center justify-center p-3 rounded-3xl mt-0.5 mb-0.5 "
                >
                  Transport Vehicle
                </Link>
                <Link
                  to="/services/warehousing"
                  onClick={()=>servicetablg}
                  className=" bg-sec w-full h-6 flex items-center justify-center p-3 rounded-3xl mt-0.5 mb-0.5 "
                >
                  Storage Services
                </Link>
                <Link
                  to="/services/personal-vehicle-relocation"
                  onClick={()=>servicetablg}
                  className=" bg-sec w-full h-6 flex items-center justify-center p-3 rounded-3xl mt-0.5 mb-1 "
                >
                  Car/Bike Transportation
                </Link>
              </div>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
          </ul>
          <div id="call" className="hidden lg:flex w-32 ml-4 mr-4 items-center">
            <Link to="tel: +91 9310553121">
              <img src={Call} alt="call" />
            </Link>
          </div>
          <ul
            id="socialmedia"
            className="flex w-fit h-fit items-center justify-center mt-0.5 mb-1"
          >
            <ul className="hidden lg:flex z-10 w-full justify-evenly ml-4 mr-10">
              <li id="whats">
                <Link
                  
                  to="https://wa.me/919310553121"
                  target="_blank "
                  rel="opener"
                >
                  <FaWhatsapp className="size-6 ml-1 mr-1 text-poly" />
                </Link>
              </li>
              <li id="face">
                <Link
                  
                  to="https://www.facebook.com/leehomepackersandmovers/"
                  target="_blank"
                  rel="opener"
                >
                  <FaFacebook className="size-6 ml-1 mr-1 text-poly" />
                </Link>
              </li>
              <li id="tweet">
                <Link
                  
                  to="https://twitter.com/leehomepackers?lang=en"
                  target="_blank"
                  rel="opener"
                >
                  <FaXTwitter className="size-6 ml-1 mr-1 text-poly" />
                </Link>
              </li>
              <li id="inst">
                <Link
                  to="https://www.instagram.com/leehomepackers/"
                  target="_blank"
                  rel="opener"
                >
                  <FaInstagram className="size-6 ml-1 mr-1 text-poly" />
                </Link>
              </li>
              <li id="you">
                <Link to="/" rel="opener">
                  <FaYoutube className="size-6 ml-1 mr-1 text-poly" />
                </Link>
              </li>
            </ul>
          </ul>
          <div
            id="nav"
            className="flex text-poly font-brico font-medium flex-col bg-menuback absolute top-16 w-full text-center z-50 lg:hidden"
          >
            <ul
              id="navlist"
              className="flex w-full flex-col h-full justify-evenly z-20 bg-menuback"
            >
              <li className=" bg-menutop w-full h-12 flex items-center justify-center mt-0 mb-0.5 active:bg-white">
                <Link to="/" className="w-full h-fit" onClick={openmenu}>
                  Home
                </Link>
              </li>
              <div>
                <button
                  className=" bg-menutop w-full h-12 flex items-center justify-center mt-0.5 mb-1"
                  onClick={servicetab}
                >
                  Services{" "}
                  {servmenu ? (
                    <RiArrowDropUpLine className="ml-1 size-6" />
                  ) : (
                    <IoIosArrowDropdown className="ml-1 size-6" />
                  )}
                </button>
                <div id="service" className="hidden flex-col bg-prim h-full">
                  <Link
                    to="/services/complete-relocation"
                    onClick={openmenu}
                    className=" bg-sec w-full h-12 flex items-center justify-center mb-0.5 active:bg-slate-500"
                  >
                    Complete Moving Solution
                  </Link>
                  <Link
                    to="/services/packing-services"
                    onClick={openmenu}
                    className=" bg-sec w-full h-12 flex items-center justify-center mt-0.5 mb-0.5 "
                  >
                    Packing Services
                  </Link>
                  <Link
                    to="/services/transport-vehicle"
                    onClick={openmenu}
                    className=" bg-sec w-full h-12 flex items-center justify-center mt-0.5 mb-0.5 "
                  >
                    Transport Vehicle
                  </Link>
                  <Link
                    to="/services/warehousing"
                    onClick={openmenu}
                    className=" bg-sec w-full h-12 flex items-center justify-center mt-0.5 mb-0.5 "
                  >
                    Storage Services
                  </Link>
                  <Link
                    to="/services/personal-vehicle-relocation"
                    onClick={openmenu}
                    className=" bg-sec w-full h-12 flex items-center justify-center mt-0.5 mb-1 "
                  >
                    Car/Bike Transportation
                  </Link>
                </div>
              </div>
              <li className=" bg-menutop w-full h-12 flex items-center justify-center mt-0 mb-0.5">
                <Link to="/faq" className="w-full h-fit" onClick={openmenu}>
                  FAQs
                </Link>
              </li>
              <li className=" bg-menutop w-full h-12 flex items-center justify-center mt-0.5 mb-0.5">
                <Link to="/about" className="w-full h-fit" onClick={openmenu}>
                  About Us
                </Link>
              </li>
              <li className=" bg-menutop w-full h-12 flex items-center justify-center mt-0.5 mb-0.5">
                <Link to="/contact" className="w-full h-fit" onClick={openmenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul
              id="socialmedia"
              className="flex bg-prim w-full h-12 items-center justify-center mt-0.5 mb-1"
            >
              <ul className="flex z-10 w-full justify-evenly">
                <li id="whats">
                  <Link
                    onClick={openmenu}
                    to="https://wa.me/919310553121"
                    target="_blank "
                    rel="opener"
                  >
                    <FaWhatsapp className="size-6 text-poly" />
                  </Link>
                </li>
                <li id="face">
                  <Link
                    onClick={openmenu}
                    to="https://www.facebook.com/leehomepackersandmovers/"
                    target="_blank"
                    rel="opener"
                  >
                    <FaFacebook className="size-6 text-poly" />
                  </Link>
                </li>
                <li id="tweet">
                  <Link
                    onClick={openmenu}
                    to="https://twitter.com/leehomepackers?lang=en"
                    target="_blank"
                    rel="opener"
                  >
                    <FaXTwitter className="size-6 text-poly" />
                  </Link>
                </li>
                <li id="inst">
                  <Link
                    onClick={openmenu}
                    to="https://www.instagram.com/leehomepackers/"
                    target="_blank"
                    rel="opener"
                  >
                    <FaInstagram className="size-6 text-poly" />
                  </Link>
                </li>
                <li id="you">
                  <Link to="/" onClick={openmenu} rel="opener">
                    <FaYoutube className="size-6 text-poly" />
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div
          id="call"
          className="flex fixed size-40 right-6 -bottom-16 z-10 lg:hidden
        "
        >
          <Link to="tel: +91 9310553121" alt="call">
            <img src={Call} alt="call" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
