import { Fragment, useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './utils/Layout'
import Home from './pages/Home/Home'
import Recommend from './pages/Recommend/Recommend'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Browse from './pages/Browse/Browse'

function App() {

  let [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
  let [searchTerm, setSearchTerm] = useState("")
  let [searchedBooks, setSearchedBooks] = useState([])

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  
  useEffect(() => {
    if(searchTerm === "") {
      setSearchedBooks([])
    }
  }, [searchTerm])

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            user ? (
              <Layout
                setSearchedBooks={setSearchedBooks}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                setUser={setUser}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        >
          <Route index element={<Home user={user} setUser={setUser} />} />
          <Route path="/home/recommend" element={<Recommend setUser={setUser} />} />
          <Route path="/home/browse" element={<Browse user={user} setUser={setUser} searchedBooks={searchedBooks} />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App
