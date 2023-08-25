import {useEffect, useState} from "react";
import "./index.css"
import axios from "axios"
import {Link} from "react-router-dom";
import Book from "../../components/Book/Book";

const Browse = ({searchedBooks, setUser, user}) => {

    let [books,
        setBooks] = useState([])
    let [sortTerm,
        setSortTerm] = useState("")

    console.log(sortTerm)

    useEffect(() => {
        const getBooks = async() => {
            let {data} = await axios.get("http://localhost:5000/api/books", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            const sortedBooks = data
                .slice()
                .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
            setBooks(data.reverse());
        };
        getBooks();
    }, [user])

    // useEffect(() => {
    //     if (sortTerm === "oldest") {
    //         const sortedBooks = [...books].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    //         setBooks(sortedBooks);
    //         console.log(books)
    //     } else if (sortTerm === "newest") {
    //         const sortedBooks = [...books].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    //         setBooks(sortedBooks);
    //         console.log(books)
    //     } else if (sortTerm === "all") {
    //         setBooks()
    //     }
    // }, [sortTerm])

    return (
        <div className="home">
            <div className="container">
                <div className="title">
                    <h1>Browse</h1>
                    <div className="line"></div>
                    <p>Browse all books or select a category</p>
                </div>
                <div className="sort-by">
                    <div className="category-sort">
                        <label htmlFor="category-sort">Category:</label>
                        <select onChange={(e) => setSortTerm(e.target.value)} id="category-sort">
                            <option value="all">All</option>
                            <option value="Personal Development">
                                Personal Development
                            </option>
                            <option value="Communication">Communication</option>
                            <option value="Finance">Finance</option>
                            <option value="Productivity">Productivity</option>
                            <option value="Design">Design</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Biography">Biography</option>
                        </select>
                    </div>
                    <div className="date-sort">
                        <label htmlFor="date-sort">Category:</label>
                        <select onChange={(e) => setSortTerm(e.target.value)} id="date-sort">
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                </div>
                <div className="books">
                    {searchedBooks.length > 0
                        ? (searchedBooks.map((book, index) => (<Book setUser={setUser} key={index} {...book}/>)))
                        : books.length > 0
                            ? (books.map((book, index) => (<Book setUser={setUser} key={index} {...book}/>)))
                            : (
                                <h1>No Recommendations</h1>
                            )}
                </div>
                <div className="bottom">
                    <h2>Do you have a recommendation?</h2>
                    <p>Do you know about some amazing book people should read?</p>
                    <Link to="/home/recommend">
                        <div className="suggest-book">
                            <button>Suggest a book</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Browse