import { DirectionalLight, Fog } from "three"
import { ContactShadows, Environment, Sky } from '@react-three/drei'
import { EffectComposer, Bloom, Noise, Vignette } from '@react-three/postprocessing'

const DLight = () => {



    return (

        <>
            <Environment
                files=" /HDR/rosendal_park_sunset_2k.hdr"
                background={false}
                environmentIntensity={0.7}
                
                castShadow
            />
<directionalLight
  position={[30, 60, -30]}
  intensity={1.5}
  color={'#ffdca8'}
  castShadow
  shadow-mapSize-width={1024}
  shadow-mapSize-height={1024}
/>

{/*下方後製*/}
<EffectComposer>
  {/* <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={100} /> */}
  {/* <Noise opacity={0.04} /> 顆粒感 */}
  {/* <Vignette eskil={false} offset={0.1} darkness={-1.3} /> */}
</EffectComposer>


{/* 霧 */}
{/* <fog attach="fog" args={['#ffeed8', 10, 250]} /> */}

{/* 上面特效暫時關閉 */}

        </>
    )
}

export default DLight