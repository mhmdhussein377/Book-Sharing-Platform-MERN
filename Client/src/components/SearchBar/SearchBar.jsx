import {AiOutlineSearch} from "react-icons/ai";
import "./index.css"

const SearchBar = () => {

    return (
        <div className="searchBar">
            <form>
                <input type="text" placeholder="Search books"/>
                <button type="submit">
                    <AiOutlineSearch size={25}/>
                </button>
            </form>
        </div>
    );
}

export default SearchBar