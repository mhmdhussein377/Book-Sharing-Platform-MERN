import {useState} from 'react';
import './index.css'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

const Register = () => {

    let [inputs,
        setInputs] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            console.log(inputs)
            await axios.post("http://localhost:5000/api/register", inputs)
            navigate("/login")
        } catch (error) {
            console.log(error)
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
                                id="username"/>
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                name="email"
                                type="email"
                                required
                                id="email"/>
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                name="password"
                                type="password"
                                required
                                id="password"/>
                        </div>
                        <div className="to-login">
                            Already have an account?
                            <Link to="/login">Login</Link>
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register