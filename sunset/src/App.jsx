import './App.css'
import AppRoutes from './Home/Routes'
import BgCanvas from './components/three/CanvasHome'
import { Testbut } from './components/ui/Textbut'

function App() {

  return (
    <>
       
      
      <div className=' fixed  z-10 w-screen h-screen pointer-events-none '>
        <AppRoutes />
        
      </div>


      <div className=' flex  w-screen h-screen'>
      <BgCanvas />
      </div>

    </>
  )
}

export default App
