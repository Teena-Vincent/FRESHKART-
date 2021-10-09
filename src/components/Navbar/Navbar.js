/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-light bg-success">
                <div class="container-fluid">

                  <a class="navbar-brand" href="#">
                    <img class="img" src="android-chrome-192x192.png" alt="freshkart"></img>
                                      <span class="head">FreshKart</span></a>
                   <form class="d-flex">
                     <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                     <button class="btn btn-outline-success" type="submit">Search</button>
                   </form>
                   <button class="login">Login</button>
                </div>
             </nav>
        </div>
    )
}

export default Navbar
