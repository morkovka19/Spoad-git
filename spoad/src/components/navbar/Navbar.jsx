import './navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar({onLoginOut}){
    return (
        <div className='navbar'>
            <ul className='navbar__list'>
                <li className='navbar__item'><Link to='/github' className='navbar__link' >GitHub</Link></li>
                <li className='navbar__item'><Link  to='/aws' className='navbar__link' >AWS</Link></li>
                <li className='navbar__item'><Link  to='/urlink' className='navbar__link' >Urlink</Link></li>
                <li className='navbar__item'><Link  to='/couldocker' className='navbar__link' >Couldocker</Link></li>
                <li className='navbar__item'><Link  to='/crackcroack' className='navbar__link' >Crackcroack</Link></li>
                <li className='navbar__item'><Link  to='/:login' className='navbar__link' >Settings</Link></li>
                <li className='navbar__item'><button type='button' className='navbar__button' onClick={onLoginOut}>Sign out</button></li>
            </ul>
        </div>
    )
}