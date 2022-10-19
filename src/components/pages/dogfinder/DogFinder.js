import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "./Dogs";
import SingleDog from "./SingleDog";

import whiskey from "../../../images/whiskey.jpg";
import hazel from "../../../images/hazel.jpg";
import tubby from "../../../images/tubby.jpg";

function DogFinder() {
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
    <BrowserRouter>
      <Dogs dogs={dogs} />
      <Routes>
        <Route path="/dogs/:name" element={<SingleDog dogs={dogs} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default DogFinder;
