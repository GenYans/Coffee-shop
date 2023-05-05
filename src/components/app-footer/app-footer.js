import './app-footer.scss';

const AppFooter = () => {
    return(
        <div className="app-footer">
            <div className="container">
                <nav className="app-footer-nav">
                    <ul className="app-footer-list">
                        <img src="icons/logo-black.svg" alt="logo" />
                        <li className="app-footer-item"><button>Coffee house</button></li>  
                        <li className="app-footer-item"><button>Our coffee</button></li>
                        <li className="app-footer-item"><button>For your pleasure</button></li>
                    </ul>
                </nav>
                <div className="app-footer-border">
                    <div className="bigborderleft"></div>
                    <img src="icons/Border-logo-black.svg" alt="Border-logo-black" />
                    <div className="bigborderright"></div>
                </div>
            </div>
        </div>
    )
};

export default AppFooter; 