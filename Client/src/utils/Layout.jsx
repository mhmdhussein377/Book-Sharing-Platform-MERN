import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Layout = ({setUser}) => {
    return (
        <div className="layout">
            <Header setUser={setUser} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout