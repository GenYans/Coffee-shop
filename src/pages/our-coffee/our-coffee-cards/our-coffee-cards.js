import {Link} from 'react-router-dom';
import '../../our-coffee/our-coffee-cards/our-coffee-cards.scss';

import Venezia from '../../../resources/img/Venezia.jpg';

const OurCoffeeCards = ({name, country, price}) => {
    return (
        <section className='our-coffee-cards'>
            <div className="container">
                <div className='our-coffee-cards-wrapper'>
                    <Link to={`/OurCoffeeInfo`} className="our-coffee-cards-wrapper-card">
                        <img src={Venezia} alt="AromisticoCoffee" />
                        <div className="our-coffee-cards-wrapper-card-descr">{name}</div>
                        <div className='our-coffee-cards-wrapper-card-country'>{country}</div>
                        <div className="our-coffee-cards-wrapper-card-price">{price + '$'}</div>
                    </Link>
                </div>
            </div>
        </section>
   )
};

export default OurCoffeeCards;