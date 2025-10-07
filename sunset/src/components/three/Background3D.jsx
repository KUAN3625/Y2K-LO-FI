import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'



const SlowThing = () => {

    return (
        <>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </>
    )


}


export default SlowThing;