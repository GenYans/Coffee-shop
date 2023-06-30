import {Link} from 'react-router-dom';
import '../../our-coffee/our-coffee-cards/our-coffee-cards.scss';

import Venezia from '../../../resources/img/Venezia.jpg';

const OurCoffeeCards = () => {
    return (
        <section className='our-coffee-cards'>
            <div className="container">
                <div className='our-coffee-cards-wrapper'>
                    <Link to='/OurCoffeeInfo' className="our-coffee-cards-wrapper-card">
                        <img src={Venezia} alt="AromisticoCoffee" />
                        <div className="our-coffee-cards-wrapper-card-descr">AROMISTICO Coffee 1 kg</div>
                        <div className='our-coffee-cards-wrapper-card-country'>Venezia</div>
                        <div className="our-coffee-cards-wrapper-card-price">6.99$</div>
                    </Link>
                </div>
            </div>
        </section>
   )
};

export default OurCoffeeCards;