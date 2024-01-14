import { Route, Routes } from 'react-router-dom'

// // File import
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFoundPage'
import SingnUp from './Pages/SingnUp'
import Login from './Pages/LogIn'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/signup' element={<SingnUp />}></Route>
        <Route path='/login' element={<Login />}></Route>



        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App