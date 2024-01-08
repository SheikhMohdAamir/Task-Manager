import Home from "./components/home/Home"
import Login from './components/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {


  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App