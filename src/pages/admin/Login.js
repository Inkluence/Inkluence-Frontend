import "../../assets/scss/login.scss";

import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useNavigate} from "react-router-dom";

import Logo from '../../assets/img/logo_black.png'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            setError('');
            // Replace this dummy logic with actual authentication logic
            if (username !== process.env.REACT_APP_ADMIN_USERNAME || password !== process.env.REACT_APP_ADMIN_PASSWORD) {
                throw new Error('Invalid email or password');
            }
            // Redirect to admin page
            sessionStorage.setItem('username', username);
            navigate('/admin');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="text-center login">
        <Form className="form-signin" onSubmit={handleSubmit}>
            <img className="mb-4" src={Logo} alt=""
                 width="72" height="72"/>
                <h1 className="h3 mb-3 font-weight-normal">Please Log in</h1>
                <label htmlFor="inputUsername" className="sr-only">Username</label>
                <Form.Control type="text" id="inputUsername" className="form-control" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)} required autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <Form.Control type="password" id="inputPassword" className="form-control" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)} required/>
                        {/*<div className="checkbox mb-3">*/}
                        {/*    <label>*/}
                        {/*        <input type="checkbox" value="remember-me"/> Remember me*/}
                        {/*    </label>*/}
                        {/*</div>*/}
                        {error && <div className="text-danger mb-3">{error}</div>}
                        <Button className="btn btn-lg btn-primary btn-block" type="submit">Log in</Button>
                        <p className="mt-5 mb-3 text-muted">&copy; Inkluence 2023</p>
        </Form>
        </div>

    );
};

export default Login;
