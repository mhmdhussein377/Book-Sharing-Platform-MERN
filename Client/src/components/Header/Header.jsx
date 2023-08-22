import "./index.css"
import {Link, useNavigate} from "react-router-dom"
import {useLocation} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({setUser}) => {

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
        <div className="header small">
            <div className="container">
                <Link to="/home">
                    <div className="logo">BookRev</div>
                </Link>
                {currentPathname === "/home/browse" && <SearchBar/>}
                <div className="right-header">
                    <Link to="/home/recommend">
                        <div className="suggest-book">
                            <button>Suggest a book</button>
                        </div>
                    </Link>
                    <div onClick={handleLogout} className="logout">Logout</div>
                </div>
            </div>
            <div className="search-sm hide">
                <SearchBar/>
            </div>
        </div>
    );
}

export default Header