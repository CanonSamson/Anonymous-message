import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './page/LoginPage'

function App() {

  return (
  <BrowserRouter >
    <Routes>
      <Route path='/' element={<LoginPage /> } />

    </Routes>
  </BrowserRouter>
  )
}

export default App
