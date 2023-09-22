import './navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar({onLoginOut}){
    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__item'><Link to='/github' className='navbar__link' >GitHub</Link></li>
                <li className='navbar__item'><Link  to='/aws' className='navbar__link' >AWS</Link></li>
                <li className='navbar__item'><Link  to='/:login' className='navbar__link' >Settings</Link></li>
                <li className='navbar__item'><button type='button' className='navbar__button' onClick={onLoginOut}>Sign out</button></li>
            </ul>
        </div>
    )
}