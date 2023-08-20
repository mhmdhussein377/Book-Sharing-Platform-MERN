import {AiOutlineSearch} from "react-icons/ai"
import "./index.css"
import {Link} from "react-router-dom"
import { useLocation } from "react-router-dom";

const Header = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const location = useLocation()
    const currentPathname = location.pathname

    return (
        <div className="header">
            <div className="container">
                <Link to="/home">
                    <div className="logo">BookRev</div>
                </Link>
                {currentPathname !== "/home/recommend" && <div className="searchBar">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search books"/>
                        <button type="submit">
                            <AiOutlineSearch size={25}/>
                        </button>
                    </form>
                </div>}
                <Link to="/home/recommend">
                    <div className="suggest-book">
                        <button>Suggest a book</button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header