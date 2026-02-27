import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


export function Login({ onAuth }) {
    const [downloadCount, setDownloadCount] = React.useState(0);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    React.useEffect(() => {
    const saved = parseInt(localStorage.getItem('downloadCount') ?? '0') ;
    setDownloadCount(saved);
    }, []);

    function usernameChange(e) {
        setUsername(e.target.value);
    }

    function passwordChange(e) {
        setPassword(e.target.value);
    }

    function handleLogin() {
        if (username && password){
            localStorage.setItem('Username', username);
            onAuth(username);
            navigate('/account');
        }
        
    }

    function handleCreate() {
        if (username && password){
            localStorage.setItem('Username', username);
            onAuth(username);
            navigate('/account');
        }
    }

    
    

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
                            <input type="text" value={username} onChange={usernameChange} placeholder="username" />
                        </div>
                        <div>
                            <input type="password" value={password} onChange={passwordChange} placeholder="password" />
                        </div>
                        
                        <button className="btn" onClick={handleLogin}>Login</button>
                        <button className="btn" onClick={handleCreate}>Create</button>
                        <button className="btn icon-btn" onClick={handleLogin}>
                        <i className="bi bi-download"></i>
                        </button>

                </div>
                <div className="panel-section-stats">
                    <p>{downloadCount} times downloaded</p>
                </div>
            </div>
            
        </main>
  );
}