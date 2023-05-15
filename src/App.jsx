import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import App2 from "./App2"
import App3 from "./App3"

import './App.css'

function App() {
  // let count=0;

  const[count,setCount]=useState(0);
  // console.log(useState());
  
 
  return (
    
      <div >
     <App3 />
    
      </div>

      
    
  
  )
}

export default App
