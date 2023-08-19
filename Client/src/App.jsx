import { Fragment } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './utils/Layout'
import Home from './pages/Home/Home'
import Recommend from './pages/Recommend/Recommend'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/recommend' element={<Recommend />}/>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
