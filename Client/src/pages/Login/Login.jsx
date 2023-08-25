import {useState} from "react";
import "./index.css"
import axios from "axios"
import {Link, useNavigate} from 'react-router-dom'

const Login = ({setUser}) => {

    let [inputs,
        setInputs] = useState({})
    let [error,
        setError] = useState("")
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
            let {data} = await axios.post("/api/login", inputs);
            localStorage.setItem("token", data.token)
            setUser(data)
            navigate("/home")
        } catch (error) {
            setError(error.response.data)
            setTimeout(() => {
                setError("")
            }, 3000)
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
                                id="password"/> {/* {error && <p className="error">{error}</p>} */}
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