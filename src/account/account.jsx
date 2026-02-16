import React from 'react';
import './account.css';

export function Account() {
  return (
    <main className="container-fluid bg-secondary text-center">
            <div className="save-games">
                <table className="save-table">
                    <thead>
                        <tr>
                            <th>Saved Games</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Save 1</td>
                        </tr>
                        <tr>
                            <td>Save 2</td>
                        </tr>
                        <tr>
                            <td>Save 3</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="account-buttons">
                <a href="play.html" class="btn">New Game</a>
                <button className="btn">
                    Download Game
                </button>
            </div>
    </main>
  );
}