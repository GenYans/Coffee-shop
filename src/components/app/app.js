import AppHeader from '../app-header/app-header';
import AppAbout from '../app-about/app-about';
import AppBest from '../app-best/app-best';
import AppFooter from '../app-footer/app-footer';

import './app.css';

function App () {
    return (
        <div className="app">
            <AppHeader/>
            <AppAbout/>
            <AppBest/>
            <AppFooter/>
        </div>
    );
}

export default App;