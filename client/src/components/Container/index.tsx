// modules
import React from 'react';

// styling
import './_Container.scss';

// interface definition
export interface IContainer {
  children: React.ReactNode;
};

// main component definition
const Container = ({
  children
}: IContainer) => {
  return (
    <div className="container">
      { children }
    </div>
  );
};

export default Container;