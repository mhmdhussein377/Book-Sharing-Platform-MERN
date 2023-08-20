import {useState} from "react";
import "./index.css"
import axios from "axios"
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {

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
            let {data} = await axios.post("http://localhost:5000/api/login", inputs)
            localStorage.setItem("token", data.token)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="login">
            <div className="container">
                <div className="form">
                    <div className="title">
                        <h1>Login</h1>
                        <div className="line"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={e => handleChange(e)}
                                name="email"
                                type="email"
                                required
                                id="email"/>
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={e => handleChange(e)}
                                name="password"
                                type="password"
                                required
                                id="password"/>
                        </div>
                        <div className="to-register">Don't have an account?
                            <Link to="/register">Register</Link>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login