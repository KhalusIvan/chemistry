/* eslint-disable react/prop-types */
import Orbit from "./Orbit";

function Model({ electrons, animationState }) {
  const oneStep = (Math.PI * 2) / electrons.length;

  return (
    <>
      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#6db0f2" />
      </mesh>

      {electrons.map((electron, index) => {
        const radius = (index + 1) * 0.3 + 0.1;

        return (
          <Orbit
            key={`ring-${index}`}
            radius={radius}
            electron={electron}
            speed={animationState.speed}
            state={animationState.state}
            volume={animationState.volume}
            step={oneStep * index}
          />
        );
      })}
    </>
  );
}

export default Model;
