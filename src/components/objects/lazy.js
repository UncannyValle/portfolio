import React, { useState, useEffect, Suspense, lazy } from "react"

//adds the threejs canvas lazily, waits until the page is loaded before importing
const ThreeCanvas = lazy(() => import("./three-canvas"))

const ThreeLazy = () => {
  const [isMounted, setIsMounted] = useState(false)

  //checks to see if the canvas has been mounted and sets the state to true
  useEffect(() => {
    setIsMounted(true)
  }, [])
  return (
    <>
      {/* if the user has save data or if in mobile then the animation will not be available */}
      {!isMounted ||
      navigator?.connection?.saveData ||
      !matchMedia("(min-width: 768px)").matches ? null : (
        <Suspense fallback={null}>
          <ThreeCanvas />
        </Suspense>
      )}
    </>
  )
}
export default ThreeLazy
