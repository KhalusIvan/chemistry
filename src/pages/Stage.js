import Box from "@components/Box";
import Sphere from "@components/Sphere";
import { Canvas } from "@react-three/fiber";
import { CanvasWrapper } from "./styledComponents";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

function Stage() {
  return (
    <CanvasWrapper>
      <Canvas>
        {/*<ambientLight intensity={0.1} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        <pointLight position={[3, 3, 0]} intensity={0.8} />
        <Sphere />
        <Box />*/}

        <directionalLight position={[12, 12, 3]} intensity={0.8} />

        <mesh position={[10, 4, -5]}>
          <icosahedronGeometry args={[3, 0]} />
          <meshPhysicalMaterial
            transmission={1}
            roughness={0}
            metalness={0}
            thickness={0.2}
            opacity={0.5}
          />
        </mesh>

        <OrbitControls />

        <OrthographicCamera
          makeDefault
          zoom={20}
          near={1}
          far={2000}
          position={[0, 0, 20]}
        />
      </Canvas>
    </CanvasWrapper>
  );
}

export default Stage;
