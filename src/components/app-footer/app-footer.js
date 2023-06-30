import {Link} from 'react-router-dom';

import LogoBlack from '../../resources/icons/logo-black.svg';
import BorderLogoBlack from '../../resources/icons/Border-logo-black.svg';

import './app-footer.scss';

const AppFooter = () => {
    return(
        <div className="app-footer">
            <div className="container">
                <nav className="app-footer-nav">
                    <ul className="app-footer-list">
                        <img src={LogoBlack} alt="logo" />
                        <li className="app-footer-item"><Link to='/'>Coffee house</Link></li>  
                        <li className="app-footer-item"><Link to='/OurCoffee'>Our coffee</Link></li>
                        <li className="app-footer-item"><Link to='/ForYourPleasure'>For your pleasure</Link></li>
                    </ul>
                </nav>
                <div className="app-footer-border">
                    <div className="bigborderleft"></div>
                    <img src={BorderLogoBlack} alt="Border-logo-black" />
                    <div className="bigborderright"></div>
                </div>
            </div>
        </div>
    )
};

export default AppFooter; 