import React, { useState, useEffect } from "react";
import Card from "./Card";

const Hero = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(15);

  useEffect(() => {
    const getData = () => {
      const url =
        "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=210";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "e7740a274cmsh977d781f6bb3e21p189b2bjsn6ce759a03a7e",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = fetch(url, options);
        response
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);
  const fnClick = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 10);
  };

  const itemsToDisplay = data.slice(0, visibleItems);

  return (
    <div className="container">
      <div>
        <h1 className="text-2xl  ml-5 mt-5">
          Welcome to the world of Fitness!
        </h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="pull ups"
          className="input-border "
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {itemsToDisplay.map((ele) => {
          if (ele.name.toLowerCase().includes(input.toLowerCase())) {
            // console.log(ele.name);
            return (
              <Card
                gif={ele.gifUrl}
                name={ele.name}
                equipment={ele.equipment}
                target={ele.target}
                id={ele.id}
                instruction={ele.instructions.map((ins, ind) => {
                  return <li key={ind}>{ins}</li>;
                })}
              />
            );
          }
        })}
      </div>
      <div className="flex justify-center items-center m-4">
        <button
          className="px-3 rounded-xl m-2 py-2 border-2 border-slate-600 hover:bg-white hover:text-black text-white bg-red-700"
          onClick={fnClick}
        >
          Show More
        </button>
      </div>
    </div>
  );
};

export default Hero;
