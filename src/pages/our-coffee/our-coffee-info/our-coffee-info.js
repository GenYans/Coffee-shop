import '../../our-coffee/our-coffee-info/our-coffee-info.scss';

import Venezia from '../../../resources/img/Venezia.jpg';
import BorderLogoBlack from '../../../resources/icons/Border-logo-black.svg';

const OurCoffeeInfo = ({country,descr,price}) => {
    return (
        <section className='our-coffee-info'>
            <div className='our-coffee-info-wrapper'>
                <img src={Venezia} alt="coffee" />
                <div className='our-coffee-info-text'>
                    <div className='our-coffee-info-subheader'>About it</div>
                    <img src={BorderLogoBlack} alt="BorderLogoWhite" />
                    <div className='our-coffee-info-specification'>
                        <div className='our-coffee-info-country'><b>Country:</b>{country}</div>
                        <div className='our-coffee-info-descr'><b>Description:</b>{descr}</div>
                        <div className='our-coffee-info-descr'><b>Price:</b><span>{price}</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OurCoffeeInfo;