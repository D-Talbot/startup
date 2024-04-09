import React from 'react';
import { Unauthenticated } from './unathenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';
import duck2 from '../../public/duck2.png';

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className="container-main">
      <img src={duck2} alt="duck" width="200" />
        <div>
        {authState !== AuthState.Unknown && <h2>Are you ready to save some ducks?</h2>}
        <p>Start rescuing ASAP!</p>
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
      </div>
    </main>
  );
}