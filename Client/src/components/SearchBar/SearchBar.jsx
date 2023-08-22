import {AiOutlineSearch} from "react-icons/ai";
import "./index.css"
import axios from "axios";

const SearchBar = ({setSearchTerm, searchTerm, setSearchedBooks}) => {

    const handleSearch = async(e) => {
        e.preventDefault()

        let {data} = await axios.get(`http://localhost:5000/api/books/search/${searchTerm}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        setSearchedBooks(data)
    }

    return (
        <div className="searchBar">
            <form onSubmit={handleSearch}>
                <input
                    onChange={e => setSearchTerm(e.target.value)}
                    type="text"
                    placeholder="Search books"/>
                <button type="submit">
                    <AiOutlineSearch size={25}/>
                </button>
            </form>
        </div>
    );
}

export default SearchBar