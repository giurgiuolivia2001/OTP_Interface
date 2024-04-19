import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import AuthAPI from "./AuthAPI"; // Importați clasa AuthAPI

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async () => {
        try {
            const token = await AuthAPI.login(email, password);

        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage("Email or password incorrect");
        }
    };

    return (
        <div className="page-container-login">
            <div className="cover-login">
                <h1>Login</h1>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="login-button" onClick={handleLogin}>Login</button>
                <p className="question">Don't have an OTP?</p>
                <Link to='/'>
                    <button className="register-button">Generate OTP</button>
                </Link>
                {errorMessage && (
                    <div className="error-message">
                        <h3>Login Failed</h3>
                        <p>{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
