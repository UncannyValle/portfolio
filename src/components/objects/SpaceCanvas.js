import { Canvas } from "@react-three/fiber"
import SpaceObject from "./SpaceObject"
import React from "react"
import styled from "styled-components"
import * as THREE from "three"

export const SpaceCanvas = () => {
  return (
    <CanvasWrapper>
      <Canvas>
        {[...Array(80)].map((e, i) => {
          const [x, y, z] = Array(3)
            .fill()
            .map(() => THREE.MathUtils.randFloatSpread(100))
          return <SpaceObject position={[x, y, z]} key={i} />
        })}
        <ambientLight color="#FFFFFF" intensity={0.2} />
        <directionalLight />
      </Canvas>
    </CanvasWrapper>
  )
}

const CanvasWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`
