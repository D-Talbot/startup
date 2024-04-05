import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import rubberduck from '../public/rubduck.png';

function App() {
    return (
        <BrowserRouter>
            <div className="top bg-dark text-light" style={{maxWidth: '100%', overflowX: 'none'}}>
                <header className="container-fluid" style={{display: 'flex', flexDirection: 'row'}}>
                    <nav className="navbar navbar-dark" style={{display: 'flex', flexDirection: 'row'}}>
                        <NavLink to="" id="duck-brand" style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', 
                        alignItems: 'center', padding: '10px'}}>
                            <h1 style={{fontSize: '28px'}} className="navbar-brand">SaveDuck</h1>
                            <img src={rubberduck} alt="rubber duck" width="33" style={{paddingTop: '10px'}}/>
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
                        <a href="https://github.com/D-Talbot/startup">
                        Github Savduck Repo
                        </a>
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