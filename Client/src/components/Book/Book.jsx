import "./index.css"
import Image from "./../../assets/book.jpg"
import { AiOutlinePlusSquare } from "react-icons/ai"
import { FcLike } from "react-icons/fc"

const Book = () => {
    return (
        <div className="book">
            <div className="book-details">
                <div className="img"><img src={Image} alt="" /></div>
                <div className="content">
                    <h3 className="title">The Untimate Guide to Web Design</h3>
                    <p className="author">Uiadrian</p>
                    <div className="genres">
                        <div className="genre">Design</div>
                        <div className="genre">personal Development</div>
                    </div>
                    <div className="review">
                        Review: Short stroy about two people and mice searching for cheese, with cheese being what we consider success
                    </div>
                </div>
            </div>
            <div className="user">
                <div className="left">Recommended by: Mohammad Hussein</div>
                <div className="follow"><AiOutlinePlusSquare size={30} /></div>
            </div>
            <div className="likes-section">
                <div className="likes">35 Likes</div>
                <div className="like"><FcLike size={25} /></div>
            </div>
        </div>
    )
}

export default Book