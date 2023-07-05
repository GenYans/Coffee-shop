import '../../our-coffee/our-coffee-info/our-coffee-info.scss';

import BorderLogoBlack from '../../../resources/icons/Border-logo-black.svg';
import { Component } from 'react';


class OurCoffeeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    render() {
        const {name, country, description, price, img} = this.state;
        return (
            <section className='our-coffee-info'>
                <div className='our-coffee-info-wrapper'>
                    <img src={img} alt="coffee" />
                    <div className='our-coffee-info-text'>
                        <div className='our-coffee-info-subheader'>About it</div>
                        <img src={BorderLogoBlack} alt="BorderLogoWhite" />
                        <div className='our-coffee-info-specification'>
                            <div className='our-coffee-info-name'><b>Name:</b>{name}</div>
                            <div className='our-coffee-info-country'><b>Country:</b>{country}</div>
                            <div className='our-coffee-info-descr'><b>Description:</b>{description}</div>
                            <div className='our-coffee-info-descr'><b>Price:</b><span>{price}</span></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default OurCoffeeInfo;