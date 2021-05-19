import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg p-3">
            <div className="container">
                <Link to="/" className="navbar-brand">Phone List</Link>
            </div>


        </nav>
    );
}