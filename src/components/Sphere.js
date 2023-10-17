function Sphere() {
  return (
    <mesh position={[0, 0, -20]}>
      <sphereGeometry args={[2, 32]} />
      <meshStandardMaterial color={0x00ff00} />
    </mesh>
  );
}

export default Sphere;
