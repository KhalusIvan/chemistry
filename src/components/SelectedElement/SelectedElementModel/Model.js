/* eslint-disable react/prop-types */
import Electron from "./Electron";

function Model({ electrons, animationState }) {
  return (
    <>
      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#6db0f2" />
      </mesh>

      {electrons.map((electron, index) => {
        const radius = (index + 1) * 0.3 + 0.1;
        return (
          <>
            <mesh key={`ring-${index}`} position={[0, 0, 0]}>
              <ringGeometry args={[radius, radius, 64]} />
              <meshBasicMaterial color="gray" wireframe />
            </mesh>
            {Array.from({ length: electron }, (_, index) => {
              return (
                <Electron
                  key={`electron-${index}`}
                  orbitRadius={radius}
                  speed={animationState.speed}
                  state={animationState.state}
                  positionAngle={((Math.PI * 2) / electron) * index}
                />
              );
            })}
          </>
        );
      })}
    </>
  );
}

export default Model;
