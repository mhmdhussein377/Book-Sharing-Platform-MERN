import Book from "../../components/Book/Book";
import "./index.css"

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="title">
                    <h1>Latest Recommendations</h1>
                    <div className="line"></div>
                </div>
                <div className="books">
                    <Book />
                </div>
                <div className="bottom">
                    <h2>Do you have a recommendation?</h2>
                    <p>Do you know about some amazing book people should read?</p>
                    <div className="suggest-book">
                        <button>Suggest a book</button>
                    </div>
                </div>
            </div>
            <div className="footer">
                <h5>BookRev</h5>
                <p>Made by <span>Mohammad Hussein</span></p>
            </div>
        </div>
    );
}

export default Home