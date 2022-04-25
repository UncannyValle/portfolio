import { useFrame } from "@react-three/fiber"
import React, { useMemo, useRef, useState } from "react"
import * as THREE from "three"

const SpaceObject = ({ color = "violet", ...meshProps }) => {
  const meshRef = useRef()
  const [isHovered, setHovered] = useState(false)

  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime()
    meshRef.current.rotation.x += THREE.MathUtils.randFloat(0.01, 0.05)
  })

  const colorChange = useMemo(() => {
    if (isHovered) {
      return "cyan"
    }
    return color
  }, [color, isHovered])

  return (
    <mesh
      {...meshProps}
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      {/* <sphereGeometry args={[0.25, 24, 24]} /> */}
      <boxGeometry ars={[3, 3, 3]} />
      <meshStandardMaterial color={colorChange} />
    </mesh>
  )
}

export default SpaceObject
