import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Layout = ({setUser, setSearchTerm, setSearchedBooks, searchTerm}) => {
    return (
        <div className="layout">
            <Header searchTerm={searchTerm} setSearchedBooks={setSearchedBooks} setSearchTerm={setSearchTerm} setUser={setUser} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout