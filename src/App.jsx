// import the packages
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

// // File import
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFoundPage'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import CourceList from './Pages/Cources Pages/CourceList'
import Contact from './Pages/Contact'
const App = () => {
  return (
    <>
      <Routes>
        {/* User Routes */}
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<LogIn />}></Route>

        {/* Cources Routes */}
        {/* <Route path='/cources' element={<CourceList />}></Route> */}

        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

    </>
  )
}

export default App