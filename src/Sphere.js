import React from 'react'
import { Canvas} from '@react-three/fiber'

function Sphere() {
  return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <sphereGeometry 
                    attach='geometry' 
                    args={[2, 35, 35]}
                />
                <meshStandardMaterial 
                    wireframe
                    attach='material'
                    color={'#6d6cf9'}
                />
            </mesh>
        </Canvas>
  )
}

export default Sphere