import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Model from "./model";

const Scene = () => {
  return (
    <Canvas camera={{ position: [2, 2, 4] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model />
      <OrbitControls enableZoom={false} />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default Scene;