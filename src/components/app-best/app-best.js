import SolimoCoffee from 'img/SolimoCoffee.png';
import PrestoCoffee from 'img/PrestoCoffee.png';
import AromisticoCoffee from 'img/AromisticoCoffee.png';

import './app-best.scss';

const AppBest = () => {
    return(
        <div className="app-best">
            <div className="container">
                <h2 className="app-best-subheader">Our best</h2>

                <div className="app-best-item">
                    <div className="app-best-item-wrapper">
                        <img src={SolimoCoffee} alt="SolimoCoffee" />
                        <div className="app-best-item-descr">Solimo Coffee Beans 2 kg</div>
                        <div className="app-best-item-price">10.73$</div>
                    </div>
                </div>
                <div className="app-best-item">
                    <div className="app-best-item-wrapper">
                        <img src={PrestoCoffee} alt="SolimoCoffee" />
                        <div className="app-best-item-descr">Presto Coffee Beans 1 kg</div>
                        <div className="app-best-item-price">15.99$</div>
                    </div>
                </div>
                <div className="app-best-item">
                    <div className="app-best-item-wrapper">
                        <img src={AromisticoCoffee} alt="SolimoCoffee" />
                        <div className="app-best-item-descr">AROMISTICO Coffee 1 kg</div>
                        <div className="app-best-item-price">6.99$</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AppBest