import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const bodyStyle = {
    backgroundColor: '#282c34',
    fontFamily: 'Arial, sans-serif',
    fontSize: '20px',

  };

  const h1Style ={
    color : 'white',
  }
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
      <body style={bodyStyle}>
      <h1 style={h1Style}> LOGIN USANDO EL SERVICIO AUTH0 POR ORLANDO DIAZ</h1>
        <img src={logo} className="App-logo" alt="logo" />
        </body>
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <p>
          <LoginButton />
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
