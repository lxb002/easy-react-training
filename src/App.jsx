/*
 * @Author: lxb
 * @Date: 2023-03-20 15:32:15
 * @LastEditors: lxb
 * @LastEditTime: 2023-03-20 16:09:57
 * @Description: 
 */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewIndex from './view/index'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ViewIndex></ViewIndex>
    </div>
  )
}

export default App
