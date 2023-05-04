import './app-header.css';

const AppHeader = () => {
    return (
        <div className="app-header">
            <div className="container">
                <nav className="app-header-nav">
                    <ul className="app-header-list">
                        <img src="" alt="logo" />
                        <li className="app-header-item">Coffee house</li>
                        <li className="app-header-item">Our coffee</li>
                        <li className="app-header-item">For your pleasure</li>
                    </ul>
                </nav>

                <h1 className="app-header-header">Everything You Love About Coffee</h1>
                <div className="app-header-border">
                    <div className="bigborderleft"></div>
                    <img src="Beans logo.svg" alt="logo" />
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