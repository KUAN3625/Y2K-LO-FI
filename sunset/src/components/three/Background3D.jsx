import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'



const SlowThing = () => {

    return (
        <>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color="#ffff" />
            </mesh>
        </>
    )


}


export default SlowThing;