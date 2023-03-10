import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

import '../../assets/scss/googlelogin.scss';

const GoogleButton = () => {

    return (
        <div>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />;
        </div>
    );
};

export default GoogleButton;



