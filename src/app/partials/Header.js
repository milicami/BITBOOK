import React from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css"


export const Header = () => {


    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });
    
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <div className='container'>
                        <span className='center'><Link to='/'>BitBook</Link></span>
                        <a href="!#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to='/feed'>Feed</Link></li>
                            <li><Link to='/people'>People</Link></li>
                            <li><Link to='/profile'>Profile</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* <ul id="nav-mobile" class="right hide-on-med-and-down"> */}
            <ul className="sidenav" id="mobile-demo">
                <li><Link to='/feed'>Feed</Link></li>
                <li><Link to='/people'>People</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </header>
    )
}