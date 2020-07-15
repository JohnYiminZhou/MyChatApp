import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Card, Form, Input, Button, Error} from './LoginForm.js';
import { useAuth } from "../../context/auth"; //back to 2 folders

export default function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
    const ENDPOINT = 'http://localhost:5000/user/login';
    // const referer = props.location.state.referer || '/';

    function postLogin() {
      axios.post(ENDPOINT, {
        userName,
        password
      }).then(result => {
        if (result.status === 200){
          setAuthTokens(result.token);
          setLoggedIn(true);
        }else {
          setIsError(true);
        }
      }).catch(e => {
        setIsError(true);
      });
    }

    if (isLoggedIn){
      // return <Redirect to = {referer} />; // Redirect to homepage
      return <Redirect to  = "/homepage" />;
    }

    return (
     <Card>
      <Form>
        <Input type="email" placeholder="email" 
        value = {userName}
        onChange = { e => {
          setUserName(e.target.value);
        }}
        />
        <Input type="password" placeholder="password" 
        value = {password}
        onChange = { e => {
          setPassword(e.target.value);
        }}
        />
        <Button onClick = {postLogin}>Sign In</Button>
      </Form>
      <Link to="/Register">Don't have an account?</Link>
      { isError && <Error>The username or password provide were incorrect!</Error>}
    </Card>
  );
}