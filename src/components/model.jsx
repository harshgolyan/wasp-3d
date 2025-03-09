import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Model = () => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("/bee_model.glb");
  const { actions } = useAnimations(animations, modelRef);

  console.log("model", useGLTF("/bee_model.glb"));

  console.log("extra", scene.position);

  scene.position.x = 2;
  scene.position.z = 1;
  scene.rotation.y = -1.1;
  

  useEffect(() => {
    if (actions && animations.length > 0) {
      const firstAnimation = animations[0].name;
      actions[firstAnimation]?.play();
    }
  }, [actions]);
  return <primitive ref={modelRef} object={scene} scale={1.2} />;
};

export default Model;
