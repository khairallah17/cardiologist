import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Text from './pages/Text'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/text" element={<Text/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
