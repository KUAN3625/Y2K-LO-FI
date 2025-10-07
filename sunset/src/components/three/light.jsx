import { DirectionalLight } from "three"


const DLight = () => {

return(

<>
              <directionalLight /* 自然光 */
    position={[5, 10, 5]}
    intensity={1}
    castShadow
    shadow-bias={-0.0001} />
</>
)
}

export default DLight