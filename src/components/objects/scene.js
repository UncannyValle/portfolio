import { Canvas } from "@react-three/fiber"
import React from "react"
import styled from "styled-components"
const TheScene = () => {
  return (
    <CanvasContainer camera={{ position: [0, 0, 1], fov: 45 }}>
      <ambientLight intensity={0.5} color="#FFFFFF" />
      <pointLight position={[-10, -10, -10]} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <mesh position={[0, 0, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#bada55" />
      </mesh>
    </CanvasContainer>
  )
}

const CanvasContainer = styled(Canvas)`
  position: fixed;
  top: 0;
  left: 0;
`
export default TheScene
