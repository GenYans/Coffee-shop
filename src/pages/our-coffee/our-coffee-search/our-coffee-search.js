import "../../our-coffee/our-coffee-search/our-coffee-search.scss";

const OurCoffeeSearch = () => {
    return(
        <div className="our-coffee-cards-search">
            <div className="our-coffee-cards-search-descr1">Looking for</div>
            <input type="text" required
            className="our-coffee-cards-search-input"
            placeholder="start typing here..."
            name="search" />
            <div className="our-coffee-cards-search-descr2">Or filter</div>
            
            <button type="button"
            className="our-coffee-cards-search-btn">Venezia</button>
            <button type="button"
            className="our-coffee-cards-search-btn">Roma</button>
            <button type="button"
            className="our-coffee-cards-search-btn">Garda</button>
        </div>
    )
};

export default OurCoffeeSearch;