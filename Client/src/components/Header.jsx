import { AiOutlineSearch } from "react-icons/ai"

const Header = () => {
    return (
        <div className="header">
            <div className="logo">BookRev</div>
            <div className="searchBar">
                <input type="text" placeholder="Search books" />
                <AiOutlineSearch size={25} />
            </div>
            <div className="suggest-book">
                <button>Suggest a book</button>
            </div>
        </div>
    )
}

export default Header