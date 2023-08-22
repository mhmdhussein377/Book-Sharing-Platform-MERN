import { Fragment, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './utils/Layout'
import Home from './pages/Home/Home'
import Recommend from './pages/Recommend/Recommend'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

function App() {

  let [user, setUser] = useState(localStorage.getItem("token"))

  console.log("user")
  console.log(user)
  console.log("user")

  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Login setUser={setUser} />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/home" element={user ? <Layout setUser={setUser}/> : <Navigate to="/" />}>
          <Route index element={<Home/>}/>
          <Route path='/home/recommend' element={<Recommend />}/>
          <Route path='/home/browse' element={<h1>Browse</h1>}/>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
