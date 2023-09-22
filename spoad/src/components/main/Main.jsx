/* eslint-disable array-callback-return */
import MainImage from '../../images/main-image.svg';
import './main.css';
import {Link} from 'react-router-dom';
import GitHubImage from '../../images/github.svg'



const servisesArr = [
     {
        title: 'GitHub',
        link: '/github',
        text: '#',
        icon: GitHubImage,
    },
    {
        title: 'GitHub',
        link: '/github',
        text: '#',
        icon: GitHubImage,
    },
    {
        title: 'GitHub',
        link: '/github',
        text: '#',
        icon: GitHubImage,
    },
    {
        title: 'GitHub',
        link: '/github',
        text: '#',
        icon: GitHubImage,
    },
    {
        title: 'GitHub',
        link: '/github',
        text: '#',
        icon: GitHubImage,
    },
    {
        title: 'GitHub',
        link: '/github',
        text: '#',
        icon: GitHubImage,
    }
]

export default function Main(){
    return (
        <main className='main'>
            <div className='main__background main__background_right'></div>
            <div className='main__container'>
                <img src={MainImage} alt="main icon" className="main__image"/>
                <div className='main__block-info'>
                    <h2 className='main__title'>Our service</h2>
                    <ul className='main__list'>
                        {servisesArr.map(( servise, i) =>(
                            <li className='main__item' key={i}>
                                <img className='main__item-image' src={servise.icon} alt="servise's icon"/>
                                <h3 className='main__item-title'>{servise.title}</h3>
                                <p className='main__item-text'>{servise.text}</p>
                                <Link className='main__item-link' to={servise.link} >Learn more &rarr;</Link> 
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </div>
            <div className='main__background main__background_left'></div>
        </main>
    )
}