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
import OurCoffeeList from "../../pages/our-coffee/our-coffee-list/our-coffee-list";
import OurCoffeeSearch from "../../pages/our-coffee/our-coffee-search/our-coffee-search";

import OurCoffeePleasureHeader from "../../pages/for-your-pleasure/for-your-pleasure-header/for-your-pleasure-header";
import OurCoffeePleasureAbout from "../../pages/for-your-pleasure/for-your-pleasure-about/for-your-pleasure-about";

import './app.css';
import { Component } from "react";

import axios from "axios";

const baseUrl = 'https://64a3c464c3b509573b568190.mockapi.io/Coffee';

class App extends Component {
    constructor(props) {
        super(props);

        axios.get(baseUrl).then((res) => {
            this.setState({data: res.data});
        });

        this.state = {
            data: [],
            term: '',
            filter: 'all'
        };
    }


    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(items => {
            return items.country.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items,filter) => {
        switch (filter) {
            case 'Venezia':
                return items.filter(item => item.country === 'Venezia');
            case 'Roma':
                return items.filter(item => item.country === 'Roma');
            case 'Garda':
                return items.filter(item => item.country === 'Garda');
            default:
                return items;
        }
    };

    onFilterSelect = (filter) => {
        this.setState({filter});
    };

    render() { 
        const {data, term, filter} = this.state;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
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
                            <OurCoffeeSearch filter={filter} onFilterSelect={this.onFilterSelect} onUpdateSearch={this.onUpdateSearch}/>
                            <OurCoffeeList data={visibleData}/>
                            <AppFooter/>
                        </Route>
                        <Route exact path='/OurCoffeeInfo'>
                            <OurCoffeeHeader/>
                            <OurCoffeeInfo/>
                            <AppFooter/>
                        </Route>
                        <Route exact path='/ForYourPleasure'>
                            <OurCoffeePleasureHeader/>
                            <OurCoffeePleasureAbout/>
                            <OurCoffeeList data={visibleData}/>
                            <AppFooter/>
                        </Route>     
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
