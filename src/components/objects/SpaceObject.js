import { useFrame } from "@react-three/fiber"
import React, { useRef } from "react"
import styled from "styled-components"
import * as THREE from "three"

const SpaceObject = () => {
  // const myMesh = useRef()

  // useFrame(({ clock }) => {
  //   myMesh.current.rotation.y = clock.getElapsedTime()
  // })

  return (
    <>
      {[...Array(200)].map((e, id) => {
        const [x, y, z] = Array(3)
          .fill()
          .map(() => THREE.MathUtils.randFloatSpread(200))
        return (
          <mesh position={[x, y, z]} key={id}>
            <sphereGeometry args={[0.25, 24, 24]} />
            <meshStandardMaterial color="#FFFFFF" />
          </mesh>
        )
      })}
    </>
  )
}

export default SpaceObject
