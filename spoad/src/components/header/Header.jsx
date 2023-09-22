import './header.css';
import Navbar from '../navbar/Navbar';
import {Link} from 'react-router-dom';

export default function Header({loggedIn, onLoginOut}){
    return (
        <header className={`header ${loggedIn ? 'header_visible' : null}`} >
            <Link  to='/' className='header__logo'>Spoad</Link>
            <Navbar onLoginOut={onLoginOut}/>
            
        </header>
    )
}