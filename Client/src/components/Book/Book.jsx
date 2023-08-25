import "./index.css"
import {AiOutlinePlusSquare} from "react-icons/ai"
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import {PiMinusSquare} from 'react-icons/pi'
import {useEffect, useState} from "react"
import axios from "axios"

const Book = ({
    author,
    title,
    picture,
    user,
    review,
    likes,
    genres,
    _id,
    setUser
}) => {

    let [isLiked,
        setIsLiked] = useState(false)
    let [userId,
        setUserId] = useState(null);
    let [likesCount,
        setLikesCount] = useState(likes.length)
    let [isUserFollowed,
        setIsUserFollowed] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        try {
            const tokenPayload = token.split(".")[1];
            const decodedPayload = JSON.parse(atob(tokenPayload));
            setUserId(decodedPayload.id);
        } catch (error) {
            console.error("Error decoding token:", error);
        }
    }, []);

    useEffect(() => {
        setIsLiked(likes.includes(userId))
        let userFollowing = JSON
            .parse(localStorage.getItem("user"))
            .following
        console.log(userFollowing)
        console.log(userFollowing.includes(user._id));
        setIsUserFollowed(userFollowing.includes(user._id))

    }, [likes, user.following])

    const handleLike = async() => {

        isLiked
            ? setLikesCount(likesCount - 1)
            : setLikesCount(likesCount + 1)
        setIsLiked(!isLiked)

        try {
            await axios.put(`/api/books/${_id}/like`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    const handleFollow = async() => {
        setIsUserFollowed(!isUserFollowed)

        try {
            if (isUserFollowed) {
                await axios.put(`/api/users/${user._id}/unfollow`, {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setUser(prev => ({
                    ...prev,
                    following: prev
                        .following
                        .filter(friend => friend !== user._id)
                }))
            } else {
                await axios.put(`/api/users/${user._id}/follow`, {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setUser((prev) => ({
                    ...prev,
                    following: [
                        user._id, ...prev.following
                    ]
                }));
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(genres)

    return (
        <div className="book">
            <div className="book-details">
                <div className="img">
                    <img src={`http://localhost:5000/images/${picture}`} alt=""/>
                </div>
                <div className="content">
                    <h3 className="title">{title}</h3>
                    <p className="author">{author}</p>
                    <div className="genres">
                        {genres.map((genre, index) => (
                            <div key={index} className="genre">{genre}</div>
                        ))}
                    </div>
                    {review && <div className="review">{review}</div>}
                </div>
            </div>
            <div className="user">
                <div className="left">
                    Recommended by:
                    <span>{user.name}</span>
                </div>
                <div onClick={handleFollow} className="follow">
                    {isUserFollowed
                        ? <PiMinusSquare size={35}/>
                        : <AiOutlinePlusSquare size={35}/>}
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
}

export default Book