import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(pathname);
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
