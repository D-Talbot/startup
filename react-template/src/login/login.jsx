import React from 'react';
import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';
import duck2 from '../../public/duck2.png';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="container-main">
        <img src={duck2} alt="duck" width="200"/>
        <div>
            {authState !== AuthState.Unknown && <h2>Are you ready to save some ducks?</h2>}
                <div style={{display: "none"}}>
                    <p>Login now to start rescuing!</p>
                    {authState === AuthState.Authenticated && (
                    <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
                    )}
                    {authState === AuthState.Unauthenticated && (
                    <Unauthenticated
                        userName={userName}
                        onLogin={(loginUserName) => {
                        onAuthChange(loginUserName, AuthState.Authenticated);
                        }}
                    />
                    )}
                <div style={{display: "none"}}>
                    <div id="playerName"></div>
                    <p>Start rescuing ASAP!</p>
                    <button type="button" className="button-primary" onclick="logout()">Logout</button>
                  </div>
                </div>
        </div>
    </main>
  );
}