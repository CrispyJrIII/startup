import React from 'react';
import './about.css';

export function About() {
  return (
    <main className="container-fluid text-center">
            <div className="about">
                <div id="picture-box">
                    <img src="/DiscountEdenPic.jpg" alt="Pretty Planet" className="planet-image"/>
                </div>
                <div>
                    <p>The Discount Eden idea is basically for this giant voxel based planetary terraforming game.</p>
                    <p>This website is a framework for holding a yet to be developed webgl demo of the building system I'm trying to design to make ludicrously scaled infrastructure reletively easy to build.</p>
                </div>
            </div>
    </main>
  );
}