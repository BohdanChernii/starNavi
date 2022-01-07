import React, { useState } from 'react';
const Square = ({ start, index, mode }) => {
  const [hover, setHover] = useState(false);
  const [itemBc, setItemBc] = useState(false);
  const toggleHover = () => {
    if (start) {
      setTimeout(() => {
        setHover(!hover);
        setItemBc(!itemBc);
      }, 1000);
    }
  };
  return (
    <div
      className={`square ${mode}`}
      key={index}
      style={{ background: itemBc ? 'blue' : 'white' }}
      onMouseEnter={toggleHover}
    ></div>
  );
};

export default Square;
