import React from 'react';

export function Login() {
  return (
    <main className="container-main">
        <img src="duck2.png" alt="duck" width="200"/>
        <div>
            <h2>Are you ready to save some ducks?</h2>
                <div id="loginControls" style={{display: "none"}}>
                    <p>Login now to start rescuing!</p>
                    <div className="mb-3">
                        <form method="get">
                            <label for="username" className="form-label">Username: </label>
                            <input type="text" className="form-control" style={{marginBottom: "10px"}} id="username" placeholder="Your username"/>
                            <label for="password" className="form-label">Password: </label>
                            <input type="text" className="form-control" id="password" placeholder="Your password"/>
                            <div>
                                <button className="button-primary" type="button" onclick="loginUser()">Login</button>
                                <button className="button-primary" type="button" onclick="createUser()">Create Account</button>
                            </div>
                        </form>
                    </div>
                <div id="playControls" style={{display: "none"}}>
                    <div id="playerName"></div>
                    <p>Start rescuing ASAP!</p>
                    <button type="button" className="button-primary" onclick="logout()">Logout</button>
                  </div>
                </div>
                <div className="modal fade" id="msgModal" tabindex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content text-dark">
                            <div className="modal-body">ERROR</div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>   
        </div>
    </main>
  );
}