import { DirectionalLight } from "three"
import { Environment } from '@react-three/drei'
import { useLoader } from "@react-three/fiber"
import { RGBELoader } from "three/examples/jsm/Addons.js"

const DLight = () => {

    return (

        <>
            <Environment
                files=" /HDR/rosendal_park_sunset_2k.hdr"
                background={false}
                environmentIntensity={1}
                castShadow
            />
            <directionalLight
                castShadow
                position={[5, 10, 5]}
                intensity={1}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.0001}
            />
            

            

        </>
    )
}

export default DLight