import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {useEffect, useState} from "react";
import axios from "axios";

const UserBook = ({
    author,
    title,
    picture,
    user,
    review,
    likes,
    genres,
    _id
}) => {
    let [isLiked,
        setIsLiked] = useState(false);
    let [userId,
        setUserId] = useState(null);
    let [likesCount,
        setLikesCount] = useState(likes.length);

    useEffect(() => {
        const token = localStorage.getItem("token");
        try {
            const tokenPayload = token.split(".")[1];
            const decodedPayload = JSON.parse(atob(tokenPayload));
            setUserId(decodedPayload.id);
        } catch (error) {
            console.error("Error decoding token:", error);
        }
    }, []);

    useEffect(() => {
        setIsLiked(likes.includes(userId));
    }, [likes]);

    const handleLike = async() => {
        isLiked
            ? setLikesCount(likesCount - 1)
            : setLikesCount(likesCount + 1);
        setIsLiked(!isLiked);

        try {
            await axios.put(`/api/books/${_id}/like`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="book">
            <div className="book-details">
                <div className="img">
                    <img
                        src={`https://book-sharing-platform-server.onrender.com/images/${picture}`}
                        alt=""/>
                </div>
                <div className="content">
                    <h3 className="title">{title}</h3>
                    <p className="author">{author}</p>
                    <div className="genres">
                        {genres.map((genre, index) => (
                            <div key={index} className="genre">
                                {genre}
                            </div>
                        ))}
                    </div>
                    {review && <div className="review">{review}</div>}
                </div>
            </div>
            <div className="likes-section">
                <div className="likes">
                    <span>{likesCount}</span>
                    Likes
                </div>
                <div onClick={handleLike} className="like">
                    {isLiked
                        ? <FcLike size={25}/>
                        : <FcLikePlaceholder size={25}/>}
                </div>
            </div>
        </div>
    );
};

export default UserBook;
