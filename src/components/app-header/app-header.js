import {Link} from 'react-router-dom';

import LogoWhite from '../../resources/icons/logo-white.svg';
import BorderLogoWhite from '../../resources/icons/Border-logo-white.svg';

import './app-header.scss';

const AppHeader = () => {
    return (
        <div className="app-header">
            <div className="container">
                <nav className="app-header-nav">
                    <ul className="app-header-list">
                        <img src={LogoWhite} alt="logo" />
                        <li className="app-header-item"><Link to='/'>Coffee house</Link></li>  
                        <li className="app-header-item"><Link to='/OurCoffee'>Our coffee</Link></li>
                        <li className="app-header-item"><Link to='/ForYour Pleasure'>For your pleasure</Link></li>
                    </ul>
                </nav>

                <h1 className="app-header-header">Everything You Love About Coffee</h1>
                <div className="app-header-border">
                    <div className="bigborderleft"></div>
                    <img src={BorderLogoWhite} alt="Border-logo-white"/>
                    <div className="bigborderright"></div>
                </div>

                <h2 className="app-header-subheader-1">We makes every day full of energy and taste</h2>
                <h2 className="app-header-subheader-2">Want to try our beans?</h2>

                <button className="app-header-btn">More</button>
            </div>
        </div>
    )
};

export default AppHeader;