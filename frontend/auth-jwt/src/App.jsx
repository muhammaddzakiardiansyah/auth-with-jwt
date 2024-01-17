import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route exact path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
