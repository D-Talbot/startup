import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';


function App() {
    return (
        <BrowserRouter>
            <div className="top bg-dark text-light" style="max-width: 100%; overflow-x: none;">
                <header className="container-fluid" style="display: flex; flex-direction: row;">
                    <nav className="navbar navbar-dark" style="display: flex; flex-direction: row;">
                        <NavLink to="index" id="duck-brand" style="text-decoration: none; display: flex; justify-content: center; 
                        align-items: center; padding: 10px;">
                            <h1 style="font-size: 28px;" className="navbar-brand">SaveDuck</h1>
                            <img src="rubduck.png" alt="rubber duck" width="33" style="padding-top: 10px;"/>
                        </NavLink>
                    <menu className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="">
                            Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="play">
                            Play
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="scores">
                            Score Board
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">
                                About
                            </NavLink>
                        </li>
                    </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/play' element={<Play />} />
                    <Route path='/scores' element={<Scores />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="modal-footer">
                    <div className="container-fluid">
                        <NavLink href="https://github.com/D-Talbot/startup" Github Startup Repo>
                        </NavLink>
                        <span>Author: Danica Talbot</span>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    )
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }


export default App;