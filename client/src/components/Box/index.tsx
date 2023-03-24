// modules
import React from 'react';

// styling
import './_Box.scss';

// interface definition
interface IBox {
  children: React.ReactNode;
};

// main component definition
const Box = ({
  children
}: IBox) => {
  return (
    <div className="box">
      { children }
    </div>
  );
};

export default Box;