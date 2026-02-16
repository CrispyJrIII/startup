import React from 'react';
import './play.css';

export function Play() {
  return (
        <main className="container-fluid bg-secondary text-center">
            <div className="play-main">
                <div className="game-space">
                    <p>Placeholder Game Space. Will be represented by a 3rd party API image</p>
                </div>
                <div className="play-buttons">
                    <a href="account.html" className="btn">Account</a>
                    <a href="account.html" className="btn">Download</a>
                    <button className="btn">Save Game</button>
                </div>
            </div>
        </main>
  );
}