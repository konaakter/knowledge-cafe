import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componet/Header/Header'
import Blog from './componet/Blog/Blog'
import Quiz from './componet/Quiz/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App container-lg">
      <Header></Header>
      <Blog></Blog>
      <Quiz></Quiz>
    </div>
  )
}

export default App
