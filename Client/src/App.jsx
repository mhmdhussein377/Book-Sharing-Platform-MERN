import { Fragment } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './utils/Layout'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<h1>Home</h1>}/>
        </Route>
      </Routes>
    </Fragment>
  )
}

export default App
