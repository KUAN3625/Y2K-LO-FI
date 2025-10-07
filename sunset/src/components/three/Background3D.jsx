import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, SpriteAnimator } from '@react-three/drei'
import { PositionalAudio } from 'three';



const SlowThing = () => {

    return (
        <>
            <mesh>

                <boxGeometry />
                <meshStandardMaterial color="#123" />


            </mesh>
        </>
    )


}


export default SlowThing;