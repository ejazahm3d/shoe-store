import React from "react";
import { Link } from "react-router-dom";
import { Button } from "baseui/button";

const Home = () => {
  return (
    <div>
      <div>
        <Button type="button">Hello World</Button>
        <Link to="/shoe"> Hello </Link>
      </div>
    </div>
  );
};

export default Home;
