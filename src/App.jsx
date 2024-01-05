import React from 'react'
import { Route, Routes } from 'react-router-dom'

// File import
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFoundPage from './Pages/NotFoundPage'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>

        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </>
  )
}

export default App
