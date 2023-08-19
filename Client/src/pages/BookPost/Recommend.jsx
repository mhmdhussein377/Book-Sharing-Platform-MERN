import "./index.css"

const Recommend = () => {
    return (
        <div className="recommend">
            <div className="container">
                <div className="title">
                    <h1>Recommend a book</h1>
                    <div className="line"></div>
                </div>
                <form>
                    <div className="input">
                        <label htmlFor="book-title">Book title</label>
                        <input type="text" id="book-title"/>
                    </div>
                    <div className="input">
                        <label htmlFor="author-name">Author's name</label>
                        <input type="text" id="author-name"/>
                    </div>
                    <div className="input">
                        <label htmlFor="review">Your review</label>
                        <textarea id="review" cols="30" rows="10"></textarea>
                    </div>
                    <input
                        type="file"
                        style={{
                        display: "none"
                    }}/>
                    <button className="book-photo">Add a photo</button>
                    <button type="submit">Submit the form</button>
                </form>
            </div>
        </div>
    );
}

export default Recommend