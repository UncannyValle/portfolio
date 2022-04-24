import { Canvas } from "react-three-fiber"
import React from "react"
const TheScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1], fov: 45 }}>
      <ambientLight intensity={0.3} color="#FFFFFF" />
      <pointLight intensity={1.0} position={[10, 10, 10]} />
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#bada55" />
      </mesh>
    </Canvas>
  )
}
export default TheScene
