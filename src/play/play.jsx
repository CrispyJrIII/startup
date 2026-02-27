import React from 'react';
import './play.css';
import { NavLink } from 'react-router-dom';

export function Play() {
    const [saves, setSaves] = React.useState([]);

    React.useEffect(() => {
    const text = localStorage.getItem('saves');
    if (text) {
      setSaves(JSON.parse(text));
    }
    }, []);
    
    function saveGame(){
        const newSave = `Save ${saves.length + 1}`;
        const updated = [...saves, newSave];
        setSaves(updated)
        localStorage.setItem('saves', JSON.stringify(updated));
    }

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
                    <button className="btn" onClick={saveGame}>Save Game</button>
                </div>
            </div>
        </main>
  );
}