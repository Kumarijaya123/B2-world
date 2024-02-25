import './App.css'
import Home from './home/Home'
import Login from './login/Login'
import About from './about/About'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Reach from './reach/Reach'
import Action from './action/Action'



const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/reach-out' element={<Reach/>}/>
    <Route path='/action' element={<Action/>}/>
    <Route path='/login' element={<Login/>}/>
  </Route>
))
function App() {
  return (
    <RouterProvider router={router}/>
  )
}
export default App
