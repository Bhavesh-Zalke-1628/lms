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
import RequireAuth from './Component/Auth/RequireAuth'
import CreateCourse from './Pages/CourcesPages/CreateCourse'
import UserProfile from './Pages/User/UserProfile'
const App = () => {
  return (
    <>
      <Routes>
        {/* Home Page Area */}
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

        {/* Registration Area */}
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<LogIn />}></Route>

        {/* Cources Routes */}
        <Route path='/cources' element={<CourceList />}></Route>
        <Route path='/course/description' element={<CourceDescription />}></Route>

        {/* create Cource */}
        <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
          <Route path="/course/create" element={<CreateCourse />} />
        </Route>

        {/* User Profile */}
        <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
          <Route path='/user/profile' element={<UserProfile />} />
        </Route>

        {/* Denied Page */}
        <Route path='/denied' element={<Denied />}></Route>
        {/* Not Found Page */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

    </>
  )
}

export default App