import React from 'react';
import logo from './logo.svg';
import './Home.css';
import {Link} from "react-router-dom";

export function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/guideline" className="App-link">Go to the Guideline page</Link>
            </header>
        </div>
    );
}
