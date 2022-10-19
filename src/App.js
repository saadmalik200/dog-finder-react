import React from "react";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import { NavLink } from "react-router-dom";

function Dogs() {
  const dogs = [
    {
      name: "whiskey",
      id: 0,
      image: whiskey,
      age: 4,
      facts: [
        "Whiskey loves eating popcorn",
        "Whiskey is a terrible guard dog",
        "Whiskey wants to cuddle with you",
      ],
    },
    {
      name: "hazel",
      id: 1,
      age: 0,
      image: hazel,
      facts: [
        "Hazel has a lot of energy",
        "Hazel is highly intelligent",
        "Hazel loves people more than dogs",
      ],
    },
    {
      name: "tubby",
      id: 2,
      age: 4,
      image: tubby,
      facts: [
        "Tubby is really stupid",
        "Tubby does not like walks",
        "Angelina hates Tubby",
      ],
    },
  ];

  return (
    <div className="App">
      <div className="flex justify-center m-4">
        <h1 className="text-[2rem]">
          HELLOZ. WE HAVE DOGZ. CLICK ON THEM FOR MORE INFO.
        </h1>
      </div>
      <ul className="flex justify-center gap-[5rem] mt-[3rem]">
        <NavLink to="/dogs/whiskey">
          <li>
            <div className=" w-[12rem] border-4 border-black rounded-full">
              <img className=" rounded-full border-2" src={whiskey} alt="" />
            </div>
            <p className="text-center mt-3">Whiskey</p>
          </li>
        </NavLink>
        <NavLink to="/dogs/hazel">
          <li>
            <div className=" w-[12rem] border-4 border-black rounded-full">
              <img className=" rounded-full border-2" src={hazel} alt="" />
            </div>
            <p className="text-center mt-3">Hazel</p>
          </li>
        </NavLink>
        <NavLink to="/dogs/tubby">
          <li>
            <div className=" w-[12rem] border-4 border-black rounded-full">
              <img className=" rounded-full border-2" src={tubby} alt="" />
            </div>
            <p className="text-center mt-3">Tubby</p>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default Dogs;
