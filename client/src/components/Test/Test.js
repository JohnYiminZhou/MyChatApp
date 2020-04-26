import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const api = "http://localhost:5000/";

export default function Test() {
    //const [userID, setUserID] = useState('')

    return (
        <div>
            <h1>Test chat</h1>
            <lable><b>Please enter your name</b></lable>
            <input
                placeholder = "Your Nmae"
            />
        </div>
    )
}