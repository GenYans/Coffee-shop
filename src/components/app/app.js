import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";

import AppHeader from '../app-header/app-header';
import AppAbout from '../app-about/app-about';
import AppBest from '../app-best/app-best';
import AppFooter from '../app-footer/app-footer';

import OurCoffeeAbout from "../../pages/our-coffee/our-coffee-about/our-coffee-about";
import CoffeeHouse from "../../pages/coffee-house/coffee-house";
import OurCoffeeHeader from "../../pages/our-coffee/our-coffee-header/our-coffee-header";
import OurCoffeeInfo from "../../pages/our-coffee/our-coffee-info/our-coffee-info";
import ForYourPleasure from "../../pages/for-your-pleasure/for-your-pleasure";
import OurCoffeeList from "../../pages/our-coffee/our-coffee-list/our-coffee-list";
import OurCoffeeSearch from "../../pages/our-coffee/our-coffee-search/our-coffee-search";

import './app.css';

const App = () => {
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
                        <OurCoffeeHeader/>
                        <OurCoffeeAbout/>
                        <OurCoffeeSearch/>
                        <OurCoffeeList/>
                        <AppFooter/>
                    </Route>
                    <Route exact path='/OurCoffeeInfo'>
                        <OurCoffeeHeader/>
                        <OurCoffeeInfo/>
                        <AppFooter/>
                    </Route>
                    <Route exact path='/ForYourPleasure'>
                        <OurCoffeeHeader/>
                        <OurCoffeeAbout/>
                        <ForYourPleasure/>
                        <AppFooter/>
                    </Route>     
                </Switch>
            </div>
        </Router>
    );
}

export default App;