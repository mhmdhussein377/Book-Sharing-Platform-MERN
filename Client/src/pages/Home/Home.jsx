import { Link } from "react-router-dom";
import Book from "../../components/Book/Book";
import "./index.css"
import { useEffect, useState } from "react";
import axios from "axios"
import { FcDatabase } from "react-icons/fc";

const Home = () => {

    let [books, setBooks] = useState([])

    useEffect(() => {
        const getBooks = async() => {
            let { data } = await axios.get("http://localhost:5000/api/books", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            setBooks(data)
            console.log(data)
        }
        getBooks()
    }, [])  

    return (
        <div className="home">
            <div className="container">
                <div className="title">
                    <h1>Latest Recommendations</h1>
                    <div className="line"></div>
                </div>
                <div className="books">
                    {books.map((book,index) => (
                        <Book key={index} {...book} />
                    ))}
                </div>
                <div className="bottom">
                    <h2>Do you have a recommendation?</h2>
                    <p>Do you know about some amazing book people should read?</p>
                    <Link to="/recommend">
                        <div className="suggest-book">
                            <button>Suggest a book</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home