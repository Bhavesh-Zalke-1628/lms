import { Route, Routes } from 'react-router-dom'

// // File import
import HomePage from './Pages/HomePage'
import AboutUs from './Pages/AboutUs'
import NotFound from './Pages/NotFoundPage'
import SingnUp from './Pages/SingnUp'
// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route path='/' element={<HomePage />}></Route>
//         <Route path='/about' element={<AboutUs />}></Route>
//         <Route path='/signup' element={<SingnUp />}></Route>
//         <Route path='*' element={<NotFound />}></Route>
//       </Routes>
//     </>
//   )
// }

// export default App


function App() {
  <>
    <Routes>
      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/about" element={<AboutUs />} ></Route>

      <Route path="/signup" element={<SingnUp />} />

      <Route path="*" element={<NotFound />}></Route>
    </Routes >
  </>

}
export default App