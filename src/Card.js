import React, { useState } from "react";

const Card = ({ id, name, info, price, image, notInterested }) => {
  const [readMore, setReadMore] = useState(false);

  const description = readMore
    ? `${info} read less`
    : `${info.substring(0, 200)}... read more`;

  function readmore() {
    setReadMore(!readMore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt={name} />
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">&#x20B9;{price}</h4>
          <h3 className="tour-name">{name}</h3>

          <p className="description" onClick={readmore}>
            {description}
          </p>
        </div>
      </div>

      <button className="button" onClick={() => notInterested(id)}>Not Interested</button>
    </div>
  );
};

export default Card;
