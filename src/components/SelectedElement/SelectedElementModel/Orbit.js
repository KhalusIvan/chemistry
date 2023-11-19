/* eslint-disable react/prop-types */
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Electron from "./Electron";

function Orbit({ radius, electron, speed, state, volume, step }) {
  const orbitRef = useRef();
  const lastRef = useRef({ angle: 0, lastTime: 0 });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const diffTime = elapsedTime - lastRef.current.lastTime;
    lastRef.current.lastTime = elapsedTime;

    const speedCount = state === "pause" ? 0 : speed === "1x" ? 6 : 3;
    const orbitSpeed = speedCount ? (Math.PI * 2) / speedCount : 0;

    lastRef.current.angle += diffTime * orbitSpeed;
    lastRef.current.angle %= Math.PI * 2;

    if (volume === "2d") {
      orbitRef.current.rotation.x = 0;
      orbitRef.current.rotation.y = 0;
      lastRef.current.angle = 0;
    } else {
      orbitRef.current.rotation.x = lastRef.current.angle + step;
      orbitRef.current.rotation.y = lastRef.current.angle + step;
    }
  });

  return (
    <mesh ref={orbitRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <ringGeometry args={[radius, radius, 64]} />
      <meshBasicMaterial color="gray" wireframe />
      {Array.from({ length: electron }, (_, index) => {
        return (
          <Electron
            key={`electron-${index}`}
            orbitRadius={radius}
            speed={speed}
            state={state}
            positionAngle={((Math.PI * 2) / electron) * index}
          />
        );
      })}
    </mesh>
  );
}

export default Orbit;
