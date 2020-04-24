import React, { useState, useEffect } from 'react';

const api = 'http://localhost:5000/user';

export default function Register() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const newUser = {
        userName: user,
        email: email,
        password: password
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify( newUser )
    };

   



    return (
        <div className="RegisterOuterContainer">
            <h1>My Chat app</h1>
            <div>
                <h1>Create your account</h1>
                <div>
                    <label><b>Username</b></label>
                    <input
                        placeholder = "Username"
                        
                        onChange = { (event) => setUser(event.target.value)}
                    />
                </div>
                <div>
                    <label><b>email</b></label>
                    <input
                        placeholder = "email"
                        value = { email }
                        onChange = { (event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label><b>Password</b></label>
                    <input
                        placeholder = "Password"
                        value = { password }
                        onChange = { (event) => setPassword(event.target.value)}
                    />
                </div>
                <button 
                    type = "button" 
                    //onClick = {() => { console.log(newUser)}}
                    onClick = {() => fetch(api, requestOptions) }
                >
                Submit
                </button>
            </div>
        </div>
    );
}