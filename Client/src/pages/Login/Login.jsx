import "./index.css"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <div className="form">
                    <div className="title">
                        <h1>Login</h1>
                        <div className="line"></div>
                    </div>
                    <form>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email"/>
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password"/>
                        </div>
                        <div className="to-register">Don't have an account? <Link to="/register">Register</Link></div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login