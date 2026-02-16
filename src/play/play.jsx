import React from 'react';
import './play.css';
import { NavLink } from 'react-router-dom';

export function Play() {
  return (
        <main className="container-fluid text-center">
            <div className="play-main">
                <div className="game-space">
                    <p>Placeholder Game Space. Will be represented by a 3rd party API image</p>
                </div>
                <div className="play-buttons">
                    <NavLink to="/account" className="btn">
                        Account
                    </NavLink>
                    <NavLink to="/account" className="btn">
                        Download
                    </NavLink>
                    <button className="btn">Save Game</button>
                </div>
            </div>
        </main>
  );
}