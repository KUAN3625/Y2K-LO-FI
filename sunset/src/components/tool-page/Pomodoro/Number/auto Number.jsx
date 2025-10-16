import { useState, useEffect } from "react"

const Number = () =>{


  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n) => n.toString().padStart(2, "0")
  const hours12 = (h) => (h % 12 || 12)

  const text = `${pad(hours12(time.getHours()))}:${pad(time.getMinutes())}`

return(
    <div className=" text-7xl font-mono tracking-wider tetx-gray-900 text-center">
                {text}
                </div>

)
}

export default Number