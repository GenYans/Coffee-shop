import '../../our-coffee/our-coffee-info/our-coffee-info.scss';

import Aromastico from '../../../resources/img/Aromastico.jpg';
import BorderLogoBlack from '../../../resources/icons/Border-logo-black.svg';

const OurCoffeeInfo = () => {
    return (
        <section className='our-coffee-info'>
            <div className='our-coffee-info-wrapper'>
                <img src={Aromastico} alt="girl" />
                <div className='our-coffee-info-text'>
                    <div className='our-coffee-info-subheader'>About it</div>
                    <img src={BorderLogoBlack} alt="BorderLogoWhite" />
                    <div className='our-coffee-info-country'>Country: Brasil</div>
                    <div className='our-coffee-info-descr'>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>
            </div>
        </section>
    )
};

export default OurCoffeeInfo;