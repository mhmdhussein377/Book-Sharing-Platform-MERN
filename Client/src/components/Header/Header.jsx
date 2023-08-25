import "./index.css"
import {Link, useNavigate} from "react-router-dom"
import {useLocation} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {FaBars} from "react-icons/fa";
import {useEffect, useState} from "react";
import {GrClose} from "react-icons/gr"

const Header = ({handleModeToggle, setUser, setSearchTerm, searchTerm, setSearchedBooks}) => {

    let [isNavbarOpened,
        setIsNavbarOpened] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        setUser({})
        navigate("/")
    }

    const location = useLocation()
    const currentPathname = location.pathname

    return (
        <div className={`header small`}>
            <div className="container">
                <Link to="/home">
                    <div id="logo" className="logo">BookRev</div>
                </Link>
                {currentPathname === "/home/browse" && (<SearchBar
                    setSearchedBooks={setSearchedBooks}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}/>)}
                <div className="right-header">
                    <div className="buttons">
                        <Link to="/home/browse">
                            <div className="all-books">
                                <button>All books</button>
                            </div>
                        </Link>
                        <Link to="/home/my-books">
                            <div className="my-books">
                                <button>My books</button>
                            </div>
                        </Link>
                        <Link to="/home/recommend">
                            <div className="suggest-book">
                                <button>Suggest a book</button>
                            </div>
                        </Link>
                        <div onClick={handleLogout} className="logout">
                            Logout
                        </div>
                    </div>
                    <div onClick={(e) => setIsNavbarOpened(true)} className="burger-icon">
                        <FaBars size={25}/>
                    </div>
                    <div className={`absolute-buttons ${isNavbarOpened && "show"}`}>
                        <Link onClick={e => setIsNavbarOpened(false)} to="/home/browse">
                            <div className="all-books">
                                <button>All books</button>
                            </div>
                        </Link>
                        <Link onClick={e => setIsNavbarOpened(false)} to="/home/my-books">
                            <div className="my-books">
                                <button>My books</button>
                            </div>
                        </Link>
                        <Link onClick={e => setIsNavbarOpened(false)} to="/home/recommend">
                            <div className="suggest-book">
                                <button>Suggest a book</button>
                            </div>
                        </Link>
                        <div onClick={handleLogout} className="logout">
                            Logout
                        </div>
                        <div onClick={e => setIsNavbarOpened(false)} className="close"><GrClose size={25}/></div>
                    </div>
                </div>
            </div>
            <div className="search-sm hide">
                {currentPathname === "/home/browse" && (<SearchBar
                    setSearchedBooks={setSearchedBooks}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}/>)}
            </div>
        </div>
    );
}

export default Header