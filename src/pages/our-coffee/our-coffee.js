import {Link} from 'react-router-dom';

import Girl from '../../resources/img/girl.png';

import './our-coffee.scss';
import LogoWhite from '../../resources/icons/logo-white.svg';
import BorderLogoBlack from '../../resources/icons/Border-logo-black.svg';


const OurCoffee = () => {
    return (
        <div className="our-coffee">
              <div className="container">
                <section className='our-coffee-header'>
                    <nav className="our-coffee-nav">
                        <ul className="our-coffee-list">
                            <Link to='/'><img src={LogoWhite} alt="logo" /></Link>
                            <li className="our-coffee-item"><Link to='/CoffeeHouse'>Coffee house</Link></li>  
                            <li className="our-coffee-item"><Link to='/OurCoffee'>Our coffee</Link></li>
                            <li className="our-coffee-item"><Link to='/ForYourPleasure'>For your pleasure</Link></li>
                        </ul>
                    </nav>
                    <h1 className="our-coffee-title">Our Coffee</h1>
                </section>
        
                <section className='our-coffee-beans'>
                    <div className='our-coffee-beans-wrapper'>
                        <img src={Girl} alt="girl" />
                        <div className='our-coffee-beans-text'>
                            <div className='our-coffee-beans-subheader'>About our beans</div>
                            <img src={BorderLogoBlack} alt="BorderLogoWhite" />
                            <div className='our-coffee-beans-descr'>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. 
                            <br /><br />Afraid at highly months do things on at. Situation recommend objection <br />do intention so questions. 
                            <br />As greatly removed calling pleased improve an. Last ask him cold feel <br />met spot shy want. 
                            Children me laughing we prospect answered followed. At it went is <br />song that held help face.
                            </div>
                        </div>
                    </div>
                    <div className='our-coffee-beans-line'></div>
            </section>
        </div> 
        </div>
    )
}

export default OurCoffee;