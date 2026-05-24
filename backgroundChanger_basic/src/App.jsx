import { useState } from 'react'

function App() {
  const [colour, setColour] = useState("black")

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colour }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
          <button
            onClick={() => setColour("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            RED
          </button>
          <button
            onClick={() => setColour("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            BLUE
          </button>
          <button
            onClick={() => setColour("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            GREEN
          </button>
          <button
            onClick={() => setColour("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            PURPLE
          </button>
        </div>

      </div>
    </div>
  )
}

export default App