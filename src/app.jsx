import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Account } from './account/account';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body bg-dark text-light">
        <header className="container-fluid">
            <h1 className="h1">
            Discount Eden Demo<sup>&reg;</sup>
            </h1>

            <nav className="navbar navbar-dark">
            <menu className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                        Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/play">
                        Play
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/account">
                        Account
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                        About
                    </NavLink>
                </li>
            </menu>
            </nav>

            <hr />
        </header>

        
        <Routes>
            <Route path='/' element={<Login />} exact />
            <Route path='/play' element={<Play />} />
            <Route path='/account' element={<Account />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>

        <footer>
            <hr />
            <span className="text-reset">Christopher Smith</span>
            <br />
            <a className="text-reset" href="https://github.com/CrispyJrIII/startup">GitHub</a>
        </footer>
      </div>
    </BrowserRouter>      

  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}