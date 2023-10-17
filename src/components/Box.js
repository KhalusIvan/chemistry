function Box() {
  return (
    <mesh position={[10, 4, -40]}>
      <boxGeometry args={[10, 10, 10]} />
      <meshNormalMaterial metalness={0} roughness={0} />
    </mesh>
  );
}

export default Box;
