import React, { useRef, useEffect, useContext } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { ModelPositionContext } from "../context/modelContext";

const Model = () => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("/bee_model.glb");
  const { actions } = useAnimations(animations, modelRef);
  const { position } = useContext(ModelPositionContext);

  useEffect(() => {
    if (scene) {
      scene.position.set(position.x, position.y, position.z);
      scene.rotation.y = position.rotationY;
    }
  }, [position]);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions]);

  return <primitive ref={modelRef} object={scene} scale={1.2} />;
};

export default Model;
