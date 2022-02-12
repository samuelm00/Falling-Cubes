import React, {useLayoutEffect, useMemo, useState} from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Plane from "./Plane";
import Cube from "./Cube";

export default function FallingCubeSection() {
  const [cameraPosition] = useState<[x: number, y: number, z: number]>([0, 2, 10]);

  const [size, setSize] = useState(
      { height: 800, width: 1440 },
  );

  useLayoutEffect(() => {
    setSize({ height: window.innerHeight, width: window.innerWidth })
  }, [])

  return (
    <Canvas
      shadows
      gl={{ alpha: false }}
      camera={{ position: cameraPosition, fov: 50 }}
    >
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />
      <color attach={"background"} args={["#111111"]} />
      <Physics gravity={[0, -9.83, 0]}>
        <Plane
          withPhysics
          height={size.height}
          width={size.width}
          color={"#F79AFF"}
        />
        <Cube color={"#b255ff"} withPhysics position={[2, 11, -2]} />
        <Cube color={"#b255ff"} withPhysics position={[3, 12, -2]} />
        <Cube color={"#b255ff"} withPhysics position={[1, 13, -2]} />
        <Cube color={"#b255ff"} withPhysics position={[0, 20, -2]} />
      </Physics>
    </Canvas>
  );
}
