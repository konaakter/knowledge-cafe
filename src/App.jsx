import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componet/Header/Header'
import Blog from './componet/Blog/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container-lg">
      <Header></Header>
      <Blog></Blog>
    </div>
  )
}

export default App
