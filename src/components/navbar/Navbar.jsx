import React, {useState}from 'react'
import {SiDatabricks} from 'react-icons/si'
import {FaBars,FaTimes} from 'react-icons/fa'
import './navbar.css'
import { Link } from 'react-router-dom'

// Import necessary modules and styles

export default function Navbar() {
    const [nav, setNav] = useState(false);

    function handleNav() {
        setNav(!nav);
    }

    return (
        <div className='navbar'>
            <div name='top' className='container'>
                <div className='logo'>
                    <SiDatabricks className='icon' />
                    <h1>Secured</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/recovery'>Recovery</Link></li>
                    <li><Link to='/cloud'>Cloud</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
        
                    
                <button className="sign-in-button">Sign in</button>
                </ul>


                <div className="hamburger" onClick={handleNav}>
                    {!nav ? <FaBars className='icon' /> : <FaTimes className='icon' />}
                </div>
            </div>
        </div>
    );
}
