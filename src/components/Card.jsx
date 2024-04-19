import React from 'react';

const Card = ({ children }) => {
  return (
    <>
      <div className="rounded-lg shadow-lg">{children}</div>
    </>
  );
};

export default Card;
