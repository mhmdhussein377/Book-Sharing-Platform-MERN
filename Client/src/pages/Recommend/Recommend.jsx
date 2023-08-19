import { useRef, useState } from "react";
import "./index.css"

const Recommend = () => {

    let [title, setTitle] = useState("")
    let [authorName, setAuthorname] = useState("")
    let [review, setReview] = useState("")
    let [file, setFile] = useState(null)
    const photoRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="recommend">
            <div className="container">
                <div className="form">
                    <div className="title">
                        <h1>Recommend a book</h1>
                        <div className="line"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <label htmlFor="book-title">Book title</label>
                            <input onChange={e => setTitle(e.target.value)} type="text" id="book-title"/>
                        </div>
                        <div className="input">
                            <label htmlFor="author-name">Author's name</label>
                            <input onChange={e => setAuthorname(e.target.value)} type="text" id="author-name"/>
                        </div>
                        <div className="input">
                            <label htmlFor="review">Your review</label>
                            <textarea onChange={e => setReview(e.target.value)} id="review" cols="30" rows="10"></textarea>
                        </div>
                        <input
                            onChange={e => setFile(e.target.files[0])}
                            ref={photoRef}
                            type="file"
                            style={{
                            display: "none"
                        }}/>
                        <button onClick={e => photoRef.current.click()} className="book-photo">Add a photo</button>
                        <button type="submit">Submit the form</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Recommend