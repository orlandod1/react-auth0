import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {

  const buttonStyle ={
    backgroundColor : 'white',
    height:' 50px',
    width:'200px',
    borderRadius:'10px',
    color: 'black ',
    fontFamily: 'Arial, sans-serif',
    fontSize: '20px'

    
    
  }
  const { logout } = useAuth0();

  return (
    <button style={buttonStyle} onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};
