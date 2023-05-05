import LogoBlack from 'icons/logo-black.svg';
import BorderLogoBlack from 'icons/Border-logo-black.svg';

import './app-footer.scss';

const AppFooter = () => {
    return(
        <div className="app-footer">
            <div className="container">
                <nav className="app-footer-nav">
                    <ul className="app-footer-list">
                        <img src={LogoBlack} alt="logo" />
                        <li className="app-footer-item"><button>Coffee house</button></li>  
                        <li className="app-footer-item"><button>Our coffee</button></li>
                        <li className="app-footer-item"><button>For your pleasure</button></li>
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