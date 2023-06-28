import {Link} from 'react-router-dom';

import './our-coffee.scss';
import LogoWhite from '../../resources/icons/logo-white.svg';


const OurCoffee = () => {
    return (
        <div className="our-coffee">
            <div className="container">
                <nav className="app-footer-nav">
                    <ul className="our-coffee-list">
                        <Link to='/'><img src={LogoWhite} alt="logo" /></Link>
                        <li className="our-coffee-item"><Link to='/CoffeeHouse'>Coffee house</Link></li>  
                        <li className="our-coffee-item"><Link to='/OurCoffee'>Our coffee</Link></li>
                        <li className="our-coffee-item"><Link to='/ForYourPleasure'>For your pleasure</Link></li>
                    </ul>
                </nav>
                <h1 className="our-coffee-header">Our Coffee</h1>
            </div>
        </div>
    )
}

export default OurCoffee;