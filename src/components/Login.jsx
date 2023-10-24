import { useState } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [authenticated, setauthenticated] = useState(
        localStorage.getItem(localStorage.getItem("authenticated") || false)
    );
    const users = [{ username: "arya", password: "test" }];
    const handleSubmit = (e) => {
        e.preventDefault();
        const account = users.find((user) => user.username === username);
        if (account && account.password === password) {
            localStorage.setItem("authenticated", true);
            navigate("/dashboard");
        }
    };
    return (
        <div className="loginContainer">
            <form className="formLogin" onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input">
                        <input
                            type="text"
                            name="Username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setusername(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <input
                            type="password"
                            name="Password"
                            placeholder="Password"
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="submit">
                    <input className="loginBtn" type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default Login;