// import the packages
import { Route, Routes } from 'react-router-dom'

// // File import
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFoundPage'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import Contact from './Pages/Contact'
import Denied from './Pages/Denied'
import CourceList from './Pages/CourcesPages/CourceList'
import CourceDescription from './Pages/CourcesPages/CourceDescription'
const App = () => {
  return (
    <>
      <Routes>
        {/* User Routes */}
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<LogIn />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

        {/* Cources Routes */}
        <Route path='/cources' element={<CourceList />}></Route>
        <Route path='/course/description' element={<CourceDescription />}></Route>

        {/* Denied Page */}
        <Route path='/denied' element={<Denied />}></Route>
        {/* Not Found Page */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

    </>
  )
}

export default App