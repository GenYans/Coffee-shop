import './app-best.scss';

const AppBest = () => {
    return(
        <div className="app-best">
            <div className="container">
                <h2 className="app-best-subheader">Our best</h2>

                <div className="app-best-item">
                    <div className="app-best-item-wrapper">
                        <img src="img/SolimoCoffee.png" alt="SolimoCoffee" />
                        <div className="app-best-item-descr">Solimo Coffee Beans 2 kg</div>
                        <div className="app-best-item-price">10.73$</div>
                    </div>
                </div>
                <div className="app-best-item">
                    <div className="app-best-item-wrapper">
                        <img src="img/PrestoCoffee.png" alt="SolimoCoffee" />
                        <div className="app-best-item-descr">Presto Coffee Beans 1 kg</div>
                        <div className="app-best-item-price">15.99$</div>
                    </div>
                </div>
                <div className="app-best-item">
                    <div className="app-best-item-wrapper">
                        <img src="img/AromisticoCoffee.png" alt="SolimoCoffee" />
                        <div className="app-best-item-descr">AROMISTICO Coffee 1 kg</div>
                        <div className="app-best-item-price">6.99$</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AppBest