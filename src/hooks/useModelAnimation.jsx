import { useEffect, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ModelPositionContext } from "../context/modelContext";

gsap.registerPlugin(ScrollTrigger);

const useModelAnimation = () => {
  const { setPosition } = useContext(ModelPositionContext);

  useEffect(() => {
    gsap.to({}, {
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress * 2;
          const newX = Math.sin(progress * Math.PI) * 3;
          const newRotationY = Math.cos(progress * Math.PI) * 2;

          setPosition({ x: newX, y: 0, z: 1, rotationY: newRotationY });
        },
      },
    });
  }, [setPosition]);
};

export default useModelAnimation;
