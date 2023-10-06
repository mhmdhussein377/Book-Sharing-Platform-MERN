import {useEffect, useRef, useState} from "react";
import "./index.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {AiOutlinePlus} from 'react-icons/ai'
import {HiOutlineChevronUp, HiOutlineChevronDown} from "react-icons/hi";

const Recommend = () => {

    let [title,
        setTitle] = useState("")
    let [authorName,
        setAuthorname] = useState("")
    let [review,
        setReview] = useState("")
    let [file,
        setFile] = useState(null)
    let [photoError,
        setPhotoError] = useState(false)
    let [isListOpened,
        setIsListOpened] = useState(false)
    const photoRef = useRef()
    const navigate = useNavigate()

    const genresInitial = [
        {
            id: 1,
            label: "Personal Development"
        }, {
            id: 2,
            label: "Communication"
        }, {
            id: 4,
            label: "Finance"
        }, {
            id: 5,
            label: "Productivity"
        }, {
            id: 6,
            label: "Design"
        }, {
            id: 7,
            label: "Marketing"
        }, {
            id: 8,
            label: "Biography"
        }
    ];

    const [genres,
        setGenres] = useState(genresInitial);

    const handleCheckboxChange = (id) => {
        const updatedItems = genres.map((item) => item.id === id
            ? {
                ...item,
                checked: !item.checked
            }
            : item);
        setGenres(updatedItems);
        console.log(genres)
    };

    const handleSubmit = async(e) => {
        e.preventDefault()

        if (!file) {
            setPhotoError(true)
            setTimeout(() => {
                setPhotoError(false)
            }, 3000)
            return
        }

        let checkedGenres = genres.filter(item => {
            if (item.checked) {
                return item.label
            }
        })

        let genresToSend = checkedGenres.map(item => {
            return item.label
        })

        let newPost = {
            title,
            author: authorName,
            review,
            genres: genresToSend
        }

        console.log(newPost)

        let data;

        if (file) {
            data = new FormData()
            const filename = Date.now() + file.name
            data.append("name", filename)
            data.append("file", file)
            newPost.picture = filename
        }

        try {
            await axios.post("/api/upload", data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        } catch (error) {
            console.log(error)
        }

        try {
            const response = await axios.post("/api/books", newPost, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            console.log(response)
        } catch (error) {
            console.log(error)
        }

        navigate("/home/my-books")
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
                            <input
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                type="text"
                                id="book-title"/>
                        </div>
                        <div className="input">
                            <label htmlFor="author-name">Author's name</label>
                            <input
                                required
                                onChange={(e) => setAuthorname(e.target.value)}
                                type="text"
                                id="author-name"/>
                        </div>
                        <div className="genres-input">
                            <div className="main-checkbox">
                                <label htmlFor="genres">Genres</label>
                                <div onClick={(e) => setIsListOpened(!isListOpened)} className="top">
                                    <span>Select genres</span>
                                    {isListOpened
                                        ? <HiOutlineChevronUp size={25}/>
                                        : <HiOutlineChevronDown size={25}/>}
                                </div>
                                <div className={`checkbox-list ${isListOpened && "open"}`}>
                                    {genres.map((genre) => (
                                        <label key={genre.id} className="item">
                                            <input
                                                checked={genre.checked || false}
                                                onChange={() => handleCheckboxChange(genre.id)}
                                                type="checkbox"/>
                                            <span>{genre.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="review">Your review</label>
                            <textarea
                                onChange={(e) => setReview(e.target.value)}
                                required
                                id="review"
                                cols="10"
                                rows="6"></textarea>
                        </div>
                        <input
                            onChange={(e) => setFile(e.target.files[0])}
                            ref={photoRef}
                            type="file"
                            style={{
                            display: "none"
                        }}/>
                        <div className="photo-upload" onClick={(e) => photoRef.current.click()}>
                            Add a photo
                        </div>
                        {photoError && <p className="photo-error">A photo is required</p>}
                        <button type="submit">Submit the form</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Recommend