import React from 'react';
import '../index.css';

export const Card = ({ category, description, price, location, image }) => {
  return (
    <>

  <div className="card">
      <img src={image} alt={category} />
      <h3 className="category">{category}</h3>
      <p className="description">{description}</p>
      <p className="price">Price: {price}</p>
      <p className="location">Location: {location}</p>
    </div>


    
    </>

  );
};
export default Card