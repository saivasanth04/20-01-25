import React from "react"

 import WlcomeMessage from "./WlcomeMessage"


function App() {
  let x=React.createElement("div",{className:"vasanath"},
    React.createElement("h1",{},'Welcome to React App'),
  )

  return (
    <>
    <WlcomeMessage/>
    {x}
    {6*5}
    </>
   
  )
}

export default App
