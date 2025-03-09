import React from "react";
import Scene from "../components/scene";
import First from "../components/first";
import Second from "../components/second";
import Third from "../components/third";

const Home = () => {
  return (
    <div className="relative w-full h-[300vh]">
      <First />
      <Second />
      <Third />
      <div className="fixed top-20 left-0 w-full h-full flex justify-center items-center z-10 pointer-events-none">
        <Scene />
      </div>
    </div>
  );
};

export default Home;