import React, { useState } from "react";

const Card = ({ gif, name, equipment, target, instruction, id }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="">
      <div className="border rounded-xl card border-slate-500 border-solid m-2 p-2">
        <img src={gif} alt="GIF" />
        <h1 className="font-bold text-xl text-slate-600">{name}</h1>
        <div className="flex justify-between items-center">
          <div>
            <p>{equipment}</p>
            <p>
              <span className="font-semibold text-md">Target</span> - {target}
            </p>
          </div>
          <button
            className="px-2 rounded-xl m-2 py-1 text-white bg-blue-900"
            onClick={togglePopup}
          >
            Learn Steps
          </button>
        </div>

        {/* Popup */}
        {showPopup && (
          <div id="itemDetailsPopup">
            <div className="popup">
              <h2>Instructions</h2>
              <p>{instruction}</p>
              <button className="closeButton" onClick={togglePopup}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
