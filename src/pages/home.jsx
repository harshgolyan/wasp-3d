import React from "react";
import Scene from "../components/scene";
import First from "../components/first";
import Second from "../components/second";
import Third from "../components/third";
import { ModelPositionProvider } from "../context/modelContext";
import Footer from "../components/footer";

const Home = () => {
  return (
    <ModelPositionProvider>
      <div className="relative w-full h-auto">
        <First />
        <Second />
        <Third />
        <Footer />
        <div className="fixed top-20 left-0 w-full h-full flex justify-center items-center z-10 pointer-events-none">
          <Scene />
        </div>
      </div>
    </ModelPositionProvider>
  );
};

export default Home;