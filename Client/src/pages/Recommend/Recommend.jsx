import {useRef, useState} from "react";
import "./index.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Recommend = () => {

    let [title,
        setTitle] = useState("")
    let [authorName,
        setAuthorname] = useState("")
    let [review,
        setReview] = useState("")
    let [file,
        setFile] = useState(null)
    const photoRef = useRef()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        let newPost = {
            title,
            author: authorName,
            review
        }

        let data;

        if (file) {
            data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.picture = filename
        }

        try {
            await axios.post("http://localhost:5000/api/upload", data, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTE0MjczN2M0MTJhYjYzMmJjZmJhOCIsImlhdCI6MTY5MjUyNjIxNH0.XJ_S-QLj5eWjh_18jVqg10NG8I7HvUCPj3PlFETaGUI`
                }
            });
        } catch (error) {
            console.log(error)
        }

        try {
            await axios.post("http://localhost:5000/api/books", newPost, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTE0MjczN2M0MTJhYjYzMmJjZmJhOCIsImlhdCI6MTY5MjUyNjIxNH0.XJ_S-QLj5eWjh_18jVqg10NG8I7HvUCPj3PlFETaGUI`
                }
            });
        } catch (error) {
            console.log(error)
        }

        navigate("/")
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
                            <input onChange={e => setTitle(e.target.value)} required type="text" id="book-title"/>
                        </div>
                        <div className="input">
                            <label htmlFor="author-name">Author's name</label>
                            <input
                                required
                                onChange={e => setAuthorname(e.target.value)}
                                type="text"
                                id="author-name"/>
                        </div>
                        <div className="input">
                            <label htmlFor="review">Your review</label>
                            <textarea
                                onChange={e => setReview(e.target.value)}
                                id="review"
                                cols="10"
                                rows="6"></textarea>
                        </div>
                        <input
                            onChange={e => setFile(e.target.files[0])}
                            ref={photoRef}
                            type="file"
                            style={{
                            display: "none"
                        }}/>
                        <div
                            className="photo-upload"
                            onClick={e => photoRef
                            .current
                            .click()}>Add a photo</div>
                        <button type="submit">Submit the form</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Recommend