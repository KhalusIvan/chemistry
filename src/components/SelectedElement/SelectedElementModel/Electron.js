/* eslint-disable react/prop-types */
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Electron({ orbitRadius, speed, state, positionAngle }) {
  const electronRef = useRef();
  const lastRef = useRef({ angle: positionAngle, lastTime: 0 });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const diffTime = elapsedTime - lastRef.current.lastTime;
    lastRef.current.lastTime = elapsedTime;

    const speedCount = state === "pause" ? 0 : speed === "1x" ? 6 : 3;
    const orbitSpeed = speedCount ? (Math.PI * 2) / speedCount : 0;

    lastRef.current.angle += diffTime * orbitSpeed;
    lastRef.current.angle %= Math.PI * 2;

    const x = orbitRadius * Math.cos(lastRef.current.angle);
    const y = orbitRadius * Math.sin(lastRef.current.angle);

    electronRef.current.position.x = x;
    electronRef.current.position.y = y;
  });

  return (
    <mesh ref={electronRef}>
      <sphereGeometry args={[0.05, 32, 32]} />
      <meshStandardMaterial color="#38d404" />
    </mesh>
  );
}

export default Electron;
