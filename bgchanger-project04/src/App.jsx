import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-4 shadow-3xl bg-white px-3 py-2 rounded-2xl">
          <button className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
          <button className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
          <button className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:"olive"}} onClick={()=>setColor("olive")}>olive</button>
          <button className="outline-none px-4 rounded-full text-white shadow-xl" style={{backgroundColor:"cyan"}} onClick={()=>setColor("cyan")}>Cyan</button>
        </div>
      </div>
    </div>
  )
}

export default App
