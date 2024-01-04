import React from 'react'
import { Route, Routes } from 'react-router-dom'

// File import
import HomePage from './Pages/HomePage'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </>
  )
}

export default App
