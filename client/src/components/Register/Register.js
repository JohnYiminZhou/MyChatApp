import React, { useState } from 'react';

const api = 'http://localhost:5000/';

export default function Register() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="LoginOuterContainer">
            <h1>My Chat app</h1>
            <div>
                <h1>Create your account</h1>
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