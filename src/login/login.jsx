import React from 'react';

export function Login() {
  return (
    <main className="container-fluid text-center">
            <div className="central-panel">
                <div className="panel-section-guest">
                    <a href="play.html" class="btn">Play as Guest</a>
                </div>
                <div className="panel-section-login">
                    <form method="get" action="account.html">
                        <div>
                            <input type="text" placeholder="username" />
                        </div>
                        <div>
                            <input type="password" placeholder="password" />
                        </div>
                            <button type="submit" className="btn">Login</button>
                            <button type="submit" className="btn">Create</button>
                            <button type="submit" className="btn icon-btn" aria-label="Download">
                                <i className="bi bi-download"></i>
                            </button>
                    </form>
                </div>
                <div className="panel-section-stats">
                    <p># times downloaded</p>
                </div>
            </div>
            
        </main>
  );
}