import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
  return (
        <main className="container-fluid text-center">
            <div className="central-panel">
                <div className="panel-section-guest">
                    <NavLink to="/play" className="btn">
                        Play as Guest
                    </NavLink>
                </div>

                <div className="panel-section-login">
                        <div>
                            <input type="text" placeholder="username" />
                        </div>
                        <div>
                            <input type="password" placeholder="password" />
                        </div>
                        
                        <NavLink to="/account" className="btn">Login</NavLink>
                        <NavLink to="/account" className="btn">Create</NavLink>
                        <NavLink to="/account" className="btn icon-btn">
                        <i className="bi bi-download"></i>
                        </NavLink>

                </div>
                <div className="panel-section-stats">
                    <p># times downloaded</p>
                </div>
            </div>
            
        </main>
  );
}