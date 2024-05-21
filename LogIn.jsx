import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const OAuthLogin = () => {
  const handleSuccess = (response) => {
    console.log('Login Success:', response);
    // Handle the response, e.g., send it to your backend for further processing
  };

  const handleError = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="flex justify-center items-center h-screen">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          buttonText="Login with Google"
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default OAuthLogin;
