import '../../our-coffee/our-coffee-cards/our-coffee-cards.scss';

const OurCoffeeCards = () => {
    return (
        <section className='our-coffee-cards'>
            <div className="container">
                <div className="our-coffee-cards-wrapper">
                    <div className="our-coffee-cards-wrapper-descr1">Looking for</div>
                    <input type="text" required
                    className=""
                    placeholder="start typing here..."
                    name="search" />
                    <div className="our-coffee-cards-wrapper-descr2">Or filter</div>
                    <button type="submit"
                    className="our-coffee-cards-wrapper-btn">Brazil</button>
                    <button type="submit"
                    className="our-coffee-cards-wrapper-btn">Kenya</button>
                    <button type="submit"
                    className="our-coffee-cards-wrapper-btn">Columbia</button>
                </div>
            </div>
        </section>
   )
};

export default OurCoffeeCards;