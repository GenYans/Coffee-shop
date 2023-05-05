import './app-header.scss';

const AppHeader = () => {
    return (
        <div className="app-header">
            <div className="container">
                <nav className="app-header-nav">
                    <ul className="app-header-list">
                        <img src="icons/logo-white.svg" alt="logo" />
                        <li className="app-header-item"><button>Coffee house</button></li>  
                        <li className="app-header-item"><button>Our coffee</button></li>
                        <li className="app-header-item"><button>For your pleasure</button></li>
                    </ul>
                </nav>

                <h1 className="app-header-header">Everything You Love About Coffee</h1>
                <div className="app-header-border">
                    <div className="bigborderleft"></div>
                    <img src="icons/Border-logo-white.svg" alt="Border-logo-white"/>
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