import {Link} from 'react-router-dom';

import '../../for-your-pleasure/for-your-pleasure-header/for-your-pleasure-header.scss';
import LogoWhite from '../../../resources/icons/logo-white.svg';

const OurCoffeePleasureHeader = () => {
    return (
        <div className="our-coffee-pleasure">
              <div className="container">
                <section className='our-coffee-header'>
                    <nav className="our-coffee-nav">
                        <ul className="our-coffee-roster">
                            <img src={LogoWhite} alt="logo" />
                            <li className="our-coffee-item"><Link to='/'>Coffee house</Link></li>  
                            <li className="our-coffee-item"><Link to='/OurCoffee'>Our coffee</Link></li>
                            <li className="our-coffee-item"><Link to='/ForYourPleasure'>For your pleasure</Link></li>
                        </ul>
                    </nav>
                    <h1 className="our-coffee-title">For your pleasure</h1>
                </section>
            </div> 
        </div>
    )
}

export default OurCoffeePleasureHeader;