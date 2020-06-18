import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Input, Button } from './LoginForm.js';



export default function Login() {

    return (
     <Card>
      <Form>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign In</Button>
      </Form>
      <Link to="/Register">Don't have an account?</Link>
    </Card>
  );
}