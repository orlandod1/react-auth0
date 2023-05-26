import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {

  const buttonStyle ={
    backgroundColor : 'white',
    height:' 80px',
    width:'300px',
    borderRadius:'10px',
    color: 'black ',
    fontFamily: 'Arial, sans-serif',
    fontSize: '30px'

    
    
  }
  const { loginWithRedirect } = useAuth0();
  
  return <button style={buttonStyle} onClick={() => loginWithRedirect()}><b>Login</b></button>;
};
