import "./index.css"

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
                        <button type="submit">Submit the form</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login