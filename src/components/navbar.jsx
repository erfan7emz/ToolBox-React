import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink to='/' className="navbar-brand">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to='/list' className="nav-link active" aria-current="page">List</NavLink>
                        <NavLink to='/login' className="nav-link">Login</NavLink>
                        <NavLink to='/sign-up' className="nav-link">Sign up</NavLink>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;