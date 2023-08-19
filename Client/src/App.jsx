import { Fragment } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './utils/Layout'
import Home from './pages/Home/Home'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
