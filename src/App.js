import React, { useState } from "react";
import data from "./data";
import Tours from "./Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function notInterested(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  

  return (
    <div>
      <Tours tours={tours} notInterested={notInterested} />
    </div>
  );
};

export default App;
