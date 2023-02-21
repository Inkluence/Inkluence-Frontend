import React, { useRef } from 'react';
import GoogleLogin from 'react-google-login';
import {Button} from "react-bootstrap";

import '../../assets/scss/googlelogin.scss';

const GoogleButton = React.forwardRef((props, ref) => {
    const responseGoogle = (response) => {
        console.log(response);
    };

    const handleClick = () => {
        ref.current.click();
    };

    return (
        <div>
            <GoogleLogin
                clientId="YOUR_CLIENT_ID"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                style={{ display: 'none' }}
                ref={ref}
            />
            <button onClick={handleClick}>Login with Google</button>
        </div>
    );
});

export default GoogleButton;
