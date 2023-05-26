import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {

  const imagenstyle ={

    height:' 200px',
    width:'200px',
    
  }

  const letra ={

    height:' 200px',
    width:'200px',
    
  }
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img style={imagenstyle} src={user.picture} alt={user.name} />
        <h2 >{user.name}</h2>
        <p> <b> Email:{user.email}</b></p>
      </div>
    )
  );
};
