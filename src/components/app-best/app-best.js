import {Link} from 'react-router-dom';

import Venezia from '../../resources/img/Venezia.jpg';
import Garda from '../../resources/img/Garda.jpg';
import Roma from '../../resources/img/Rome.jpg';

import './app-best.scss';

const AppBest = () => {
    return(
        <div className="app-best">
            <div className="container">
                <h2 className="app-best-subheader">Our best</h2>
                <div className="app-best-item">
                    <Link to='/OurCoffeeInfo' className="app-best-item-wrapper">
                        <img src={Venezia} alt="SolimoCoffee" />
                        <div className="app-best-item-descr">Solimo Coffee Beans 2 kg</div>
                        <div className="app-best-item-price">10.73$</div>
                    </Link>
                    <Link to='/OurCoffeeInfo' className="app-best-item-wrapper">
                        <img src={Garda} alt="SolimoCoffee" />
                        <div className="app-best-item-descr">Presto Coffee Beans 1 kg</div>
                        <div className="app-best-item-price">15.99$</div>
                    </Link>
                    <Link to='/OurCoffeeInfo' className="app-best-item-wrapper">
                        <img src={Roma} alt="SolimoCoffee" />
                        <div className="app-best-item-descr">AROMISTICO Coffee 1 kg</div>
                        <div className="app-best-item-price">6.99$</div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default AppBest