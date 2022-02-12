import React from "react";
import { usePlane } from "@react-three/cannon";

interface PlaneProps {
  withPhysics?: boolean;
  height: number;
  width: number;
  color?: string;
}

export default function Plane({
  width,
  height,
  color,
  withPhysics,
}: PlaneProps) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
  }));

  return (
    <mesh receiveShadow ref={withPhysics ? ref : undefined}>
      <planeGeometry
        args={[width || 1000, height || 1000]}
        attach={"geometry"}
      />
      <shadowMaterial attach="material" color={color} />
    </mesh>
  );
}
