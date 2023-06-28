import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";

import AppHeader from '../app-header/app-header';
import AppAbout from '../app-about/app-about';
import AppBest from '../app-best/app-best';
import AppFooter from '../app-footer/app-footer';

import CoffeeHouse from "../../pages/coffee-house/coffee-house";
import OurCoffee from "../../pages/our-coffee/our-coffee";

import './app.css';

function App () {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <AppHeader/>
                        <AppAbout/>
                        <AppBest/>
                        <AppFooter/>
                    </Route>
                    <Route exact path='/CoffeHouse'>
                        <CoffeeHouse/>
                    </Route>
                    <Route exact path='/OurCoffee'>
                        <OurCoffee/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;