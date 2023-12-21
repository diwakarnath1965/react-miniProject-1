import React from "react";
import Card from "./Card";

const Tours = ({ tours, notInterested }) => {
  if (tours.length === 0) {
    return (
      <div className="title">
        <h2>No Tours Left</h2>
        <button className="button" onClick={() => window.location.reload(false)}>Refresh</button>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="title">Tour Plan</h1>
      <div className="cards">
        {tours.map((tour) => (
          <Card {...tour} notInterested={notInterested} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
