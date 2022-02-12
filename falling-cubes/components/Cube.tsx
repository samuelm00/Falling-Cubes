import React from "react";
import { useBox } from "@react-three/cannon";

interface CubeProps {
  withPhysics?: boolean;
  position: [x: number, y: number, z: number];
  color?: string;
}

export default function Cube({ position, color, withPhysics }: CubeProps) {
  const [ref] = useBox(() => ({
    mass: 1,
    position,
    rotation: [0.4, 0.2, 0.5],
  }));

  return (
    <mesh castShadow receiveShadow ref={withPhysics ? ref : undefined}>
      <boxGeometry attach={"geometry"} />
      <meshLambertMaterial attach={"material"} color={color} />
    </mesh>
  );
}
