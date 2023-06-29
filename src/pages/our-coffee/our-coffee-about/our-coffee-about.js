import '../../our-coffee/our-coffee-about/our-coffee-about.scss';

import BorderLogoBlack from '../../../resources/icons/Border-logo-black.svg';
import Girl from '../../../resources/img/girl.png';


const OurCoffeeAbout = () => {
    return (
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
    )
}

export default OurCoffeeAbout;
            