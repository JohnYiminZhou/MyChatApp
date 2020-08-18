import React from 'react';
import { useSelector } from 'react-redux';

//import io from "socket.io-client";

const HomePage = ()=> {
    const LoginUser = useSelector(state => state.passUserName.userName)
    console.log(LoginUser);
    return (
        <h>{LoginUser} are logged in.</h>
    )
}

export default HomePage;