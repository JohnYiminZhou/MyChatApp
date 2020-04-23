import React, { useState } from 'react';

import './Login.css';


export default function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="LoginOuterContainer">
            <h1>My Chat app</h1>
            <div>
                <h1>Login</h1>
                <div>
                    <label><b>Username</b></label>
                    <input
                        placeholder = "Username"
                    />
                </div>
                <div>
                    <label><b>Password</b></label>
                    <input
                        placeholder = "Password"
                    />
                </div>
            </div>
        </div>
    );
}