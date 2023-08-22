import {useEffect, useState} from "react";
import "./index.css"
import axios from "axios"
import {Link} from "react-router-dom";
import Book from "../../components/Book/Book";

const Browse = ({searchedBooks, setUser, user}) => {

    let [books,
        setBooks] = useState([])

    useEffect(() => {
        const getBooks = async() => {
            let {data} = await axios.get("http://localhost:5000/api/books", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            const sortedBooks = data
                .slice()
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            setBooks(sortedBooks.reverse());
        };
        getBooks();
    }, [user])

    console.log(searchedBooks)

    return (
        <div className="home">
            <div className="container">
                <div className="title">
                    <h1>Browse</h1>
                    <div className="line"></div>
                </div>
                <div className="books">
                    {searchedBooks.length > 0
                        ? searchedBooks.map((book, index) => <Book setUser={setUser} key={index} {...book}/>)
                        : books.length > 0
                            ? (books.map((book, index) => <Book setUser={setUser} key={index} {...book}/>))
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