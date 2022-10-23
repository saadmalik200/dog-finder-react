import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "./Dogs";
import SingleDog from "./SingleDog";

import whiskey from "../../../images/whiskey.jpg";
import hazel from "../../../images/hazel.jpg";
import tubby from "../../../images/tubby.jpg";
import { useState } from "react";

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
function DogFinder() {
  const [imgArr, setImgArr] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dogs" element={<Dogs dogs={dogs} imgArr={imgArr} />} />
        <Route path="/" element={<Dogs dogs={dogs} imgArr={imgArr} />} />
        <Route path="/dogs/:name" element={<SingleDog dogs={dogs} />} />
        <Route path="*" element={<Dogs dogs={dogs} imgArr={imgArr} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default DogFinder;
