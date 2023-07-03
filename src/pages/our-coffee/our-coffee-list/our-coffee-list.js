import '../../our-coffee/our-coffee-list/our-coffee-list.scss';
import OurCoffeeCards from '../our-coffee-cards/our-coffee-cards';

const OurCoffeeList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <OurCoffeeCards key={id} /* name={item.name} country={item.country} price={item.price}  */{...itemProps}/>
        );
    });

    return (
        <div className='our-coffee-list'>
                <ul className='our-coffee-list-ul'>
                    {elements}
                </ul>
        </div>
    )
};

export default OurCoffeeList;