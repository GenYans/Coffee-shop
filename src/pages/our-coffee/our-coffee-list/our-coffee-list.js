import '../../our-coffee/our-coffee-list/our-coffee-list.scss';
import OurCoffeeCards from '../our-coffee-cards/our-coffee-cards';

const OurCoffeeList = () => {
    return (
        <div className='our-coffee-list'>
                <ul className='our-coffee-list-ul'>
                    <OurCoffeeCards/>
                    <OurCoffeeCards/>
                    <OurCoffeeCards/>
                    <OurCoffeeCards/>
                    <OurCoffeeCards/>
                    <OurCoffeeCards/>
                </ul>
        </div>
    )
};

export default OurCoffeeList;