import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body bg-dark text-light">
      <header className="container-fluid">
        <h1 className="h1">
          Discount Eden Demo<sup>&reg;</sup>
        </h1>

        <nav className="navbar navbar-dark">
          <menu className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="play.html">Play</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="account.html">Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">About</a>
            </li>
          </menu>
        </nav>

        <hr />
      </header>

      <main>App components go here</main>

      <footer>
        <hr />
        <span className="text-reset">Christopher Smith</span>
        <br />
        <a className="text-reset" href="https://github.com/CrispyJrIII/startup">GitHub</a>
      </footer>
    </div>
  );
}