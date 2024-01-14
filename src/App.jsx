import { Route, Routes } from 'react-router-dom'

// // File import
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFoundPage'
import SingnUp from './Pages/SingnUp'
import Login from './Pages/LogIn'
import { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [data, setData] = useState('')

  const getData = () => {
    const res = axios.get('http://localhost:5000/demo')

      .then(msg => {
        console.log(msg)
        setData(msg.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/signup' element={<SingnUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes> */}

      <div>
        {data}
      </div>
    </>
  )
}

export default App