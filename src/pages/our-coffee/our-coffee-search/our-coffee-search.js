import { Component } from "react";
import "../../our-coffee/our-coffee-search/our-coffee-search.scss";

class OurCoffeeSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsData: [
                {name: 'all', label: 'All'},
                {name: 'Venezia', label: 'Venezia'},
                {name: 'Roma', label: 'Roma'},
                {name: 'Garda', label: 'Garda'},
            ],
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        const buttons = this.state.buttonsData.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'our-coffee-cards-search-btn-active' : 'our-coffee-cards-search-btn';
            return (
                <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => this.props.onFilterSelect(name)}
                    >{label}
                </button>
            )
        })
        return(
            <div className="our-coffee-cards-search">
                <div className="our-coffee-cards-search-descr1">Looking for</div>
                <input type="text" required
                className="our-coffee-cards-search-input"
                placeholder="start typing here..."
                name="search"
                value={this.state.term}
                onChange={this.onUpdateSearch} />
                <div className="our-coffee-cards-search-descr2">Or filter</div>
                <div className="our-coffee-cards-search-wrapper">
                    {buttons}
                </div>
            </div>
        )
    } 
};

export default OurCoffeeSearch;