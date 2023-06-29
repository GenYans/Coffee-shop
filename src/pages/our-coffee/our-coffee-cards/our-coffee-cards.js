import {Link} from 'react-router-dom';
import '../../our-coffee/our-coffee-cards/our-coffee-cards.scss';

import AromisticoCoffee from '../../../resources/img/AromisticoCoffee.png';

const OurCoffeeCards = () => {
    return (
        <section className='our-coffee-cards'>
            <div className="container">
                <div className="our-coffee-cards-search">
                    <div className="our-coffee-cards-search-descr1">Looking for</div>
                    <input type="text" required
                    className=""
                    placeholder="start typing here..."
                    name="search" />
                    <div className="our-coffee-cards-search-descr2">Or filter</div>
                    <button type="submit"
                    className="our-coffee-cards-search-btn">Brazil</button>
                    <button type="submit"
                    className="our-coffee-cards-search-btn">Kenya</button>
                    <button type="submit"
                    className="our-coffee-cards-search-btn">Columbia</button>
                </div>
                <div className='our-coffee-cards-wrapper'>
                    <Link to='/OurCoffeeInfo' className="our-coffee-cards-wrapper-card">
                        <img src={AromisticoCoffee} alt="AromisticoCoffee" />
                        <div className="our-coffee-cards-wrapper-card-descr">AROMISTICO Coffee 1 kg</div>
                        <div className='our-coffee-cards-wrapper-card-country'>Brazil</div>
                        <div className="our-coffee-cards-wrapper-card-price">6.99$</div>
                    </Link>
                    <Link to='/OurCoffeeInfo' className="our-coffee-cards-wrapper-card">
                        <img src={AromisticoCoffee} alt="AromisticoCoffee" />
                        <div className="our-coffee-cards-wrapper-card-descr">AROMISTICO Coffee 1 kg</div>
                        <div className='our-coffee-cards-wrapper-card-country'>Brazil</div>
                        <div className="our-coffee-cards-wrapper-card-price">6.99$</div>
                    </Link>
                    <Link to='/OurCoffeeInfo' className="our-coffee-cards-wrapper-card">
                        <img src={AromisticoCoffee} alt="AromisticoCoffee" />
                        <div className="our-coffee-cards-wrapper-card-descr">AROMISTICO Coffee 1 kg</div>
                        <div className='our-coffee-cards-wrapper-card-country'>Brazil</div>
                        <div className="our-coffee-cards-wrapper-card-price">6.99$</div>
                    </Link>
                    <Link to='/OurCoffeeInfo' className="our-coffee-cards-wrapper-card">
                        <img src={AromisticoCoffee} alt="AromisticoCoffee" />
                        <div className="our-coffee-cards-wrapper-card-descr">AROMISTICO Coffee 1 kg</div>
                        <div className='our-coffee-cards-wrapper-card-country'>Brazil</div>
                        <div className="our-coffee-cards-wrapper-card-price">6.99$</div>
                    </Link>
                    <Link to='/OurCoffeeInfo' className="our-coffee-cards-wrapper-card">
                        <img src={AromisticoCoffee} alt="AromisticoCoffee" />
                        <div className="our-coffee-cards-wrapper-card-descr">AROMISTICO Coffee 1 kg</div>
                        <div className='our-coffee-cards-wrapper-card-country'>Brazil</div>
                        <div className="our-coffee-cards-wrapper-card-price">6.99$</div>
                    </Link>
                    <Link to='/OurCoffeeInfo' className="our-coffee-cards-wrapper-card">
                        <img src={AromisticoCoffee} alt="AromisticoCoffee" />
                        <div className="our-coffee-cards-wrapper-card-descr">AROMISTICO Coffee 1 kg</div>
                        <div className='our-coffee-cards-wrapper-card-country'>Brazil</div>
                        <div className="our-coffee-cards-wrapper-card-price">6.99$</div>
                    </Link>
                </div>
            </div>
        </section>
   )
};

export default OurCoffeeCards;