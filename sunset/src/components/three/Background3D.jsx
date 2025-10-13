import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Environment, SpriteAnimator } from '@react-three/drei'
import { PositionalAudio } from 'three';
import DLight from './light';
import { useEffect } from 'react';



const SlowThing = () => {

    const state = useThree( )

    useEffect(()=>{
            console.log(state)
    })

    return (
        <>
            <mesh>



            </mesh>
        </>
    )


}


export default SlowThing;