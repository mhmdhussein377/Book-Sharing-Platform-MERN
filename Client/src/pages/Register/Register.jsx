import {useState} from 'react';
import './index.css'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

const Register = () => {

    let [inputs,
        setInputs] = useState({})
    let [usernameError,
        setUsernameError] = useState("")
    let [emailError,
        setEmailError] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        function timeOut(error, setError) {
            setError(error.response.data);
            setTimeout(() => {
                setError("");
            }, 3000);
        }

        try {
            const response = await axios.post("/api/register", inputs);
            console.log(response)
            navigate("/")
        } catch (error) {
            if (error.response.data === "Invalid username") {
                timeOut(error, setUsernameError)
            } else {
                timeOut(error, setEmailError)
            }
        }
    }

    return (
        <div className="register">
            <div className="container">
                <div className="form">
                    <div className="title">
                        <h1>Register</h1>
                        <div className="line"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                name="name"
                                type="text"
                                required
                                id="name"/>
                        </div>
                        <div className="input">
                            <label htmlFor="username">Username</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                name="username"
                                type="text"
                                required
                                id="username"/> {usernameError && <p className="error">{usernameError}</p>}
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                name="email"
                                type="email"
                                required
                                id="email"/> {emailError && <p className="error">{emailError}</p>}
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                name="password"
                                type="password"
                                required
                                minLength={6}
                                id="password"/>
                        </div>
                        <div className="to-login">
                            Already have an account?
                            <Link to="/">Login</Link>
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register