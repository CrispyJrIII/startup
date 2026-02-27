import React from 'react';
import './account.css';
import { NavLink } from 'react-router-dom';




export function Account() {
    const [saves, setSaves] = React.useState([]);

    React.useEffect(() => {
    const text = localStorage.getItem('saves');
    if (text) {
        setSaves(JSON.parse(text));
    }
    }, []);
    
  return (
    <main className="container-fluid text-center">
            <div className="save-games">
                <table className="save-table">
                    <thead>
                        <tr>
                            <th>Saved Games</th>
                        </tr>
                    </thead>
                    <tbody>
                    {saves.map((save, index) => (
                        <tr key={index}>
                        <td>{save}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className="account-buttons">
                    <NavLink to="/play" className="btn">
                        New Game
                    </NavLink>
                <button className="btn" onClick={countClick}>
                    Download Game
                </button>
            </div>
    </main>
  );
}