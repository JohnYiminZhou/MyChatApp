import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Test() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div>
        <div>
            <h1>Test chat</h1>
            <lable><b>Please enter your name</b></lable>
            <input

                placeholder = "Your Nmae"
                type = 'text'
                onChange = { (event) => setName( event.target.value )}
            />
        </div>
        <div>
            <lable><b>Please enter your Room</b></lable>
            <input

                placeholder = "Your Room"
                type = 'text'
                onChange = { (event) => setRoom( event.target.value )}
            />
        </div>
        <div>
            <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                <button className={'button mt-20'} type="submit">Sign In</button>
            </Link>

        </div>

        <div>
            <Link onClick = {e => (!name) ? e.preventDefault() : null } to = {`/DashBoard?name=${name}`}>
                <button className={'button mt-20'}> Who is online</button>
            </Link>

        </div>
        </div>
    )
}