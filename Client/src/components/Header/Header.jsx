import {AiOutlineSearch} from "react-icons/ai"
import "./index.css"

const Header = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="header">
            <div className="container">
                <div className="logo">BookRev</div>
                <div className="searchBar">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search books"/>
                        <button type="submit">
                            <AiOutlineSearch size={25}/>
                        </button>
                    </form>
                </div>
                <div className="suggest-book">
                    <button>Suggest a book</button>
                </div>
            </div>
        </div>
    );
}

export default Header