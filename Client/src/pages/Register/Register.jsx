import './index.css'
import {Link} from "react-router-dom"

const Register = () => {
    return (
        <div className="register">
            <div className="container">
                <div className="form">
                    <div className="title">
                        <h1>Register</h1>
                        <div className="line"></div>
                    </div>
                    <form>
                        <div className="input">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name"/>
                        </div>
                        <div className="input">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username"/>
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email"/>
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password"/>
                        </div>
                        <div className='to-login'>
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