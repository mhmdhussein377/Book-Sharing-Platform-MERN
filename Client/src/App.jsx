import { Fragment } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './utils/Layout'
import Home from './pages/Home/Home'
import Recommend from './pages/BookPost/Recommend'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/recommend' element={<Recommend />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
