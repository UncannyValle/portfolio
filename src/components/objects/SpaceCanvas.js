import { Canvas } from "@react-three/fiber"
import SpaceObject from "./SpaceObject"
import React from "react"
import styled from "styled-components"

export const SpaceCanvas = () => {
  return (
    <CanvasWrapper>
      <Canvas>
        <SpaceObject />
        <ambientLight color="#FFFFFF" />
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