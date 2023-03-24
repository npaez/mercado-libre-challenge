// modules
import React from 'react';

// components
import NavigationBar from '../NavigationBar';

// interface definition
interface ILayout {
  children?: React.ReactNode;
};

// main component definition
const Layout = ({
  children
}: ILayout) => {
  return (
    <div>
      <NavigationBar />

      { children }
    </div>
  );
};

export default Layout;