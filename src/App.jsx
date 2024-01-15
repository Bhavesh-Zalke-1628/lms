// import the packages
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// // File import
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFoundPage'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

    </>
  )
}

export default App