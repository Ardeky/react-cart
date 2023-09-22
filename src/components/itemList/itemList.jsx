import propTypes from 'prop-types';
import { Link } from 'react-router-dom'

const ItemList = ({ items }) => {
    return (
        <div className='prose font-bold'>
            <div className='overflow-hidden flex justify-center items-center'>
                <ul className='flex flex-wrap justify-center gap-5 mt-4 max-w-2xl'>
                    {items.map((item) => (
                        <li className="bg-white rounded-lg border h-72 w-48 border-2" key={item.id}>
                            <Link to={`/item/${item.id}`}>
                                <div className='flex justify-center mt-2 h-26 mb-2'>
                                    <img className="h-40" src={item.image} alt={item.name}/>
                                </div>
                                <hr/>
                                <div className='ms-4 pt-1 text-base'>
                                    <h3>{item.name}</h3>                            
                                    <p>Referencia: {item.id}</p>
                                    <p>Precio: ${item.price}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
ItemList.propTypes = {
    items: propTypes.array.isRequired,
};
export default ItemList;