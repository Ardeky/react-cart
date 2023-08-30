import propTypes from 'prop-types';

const ItemDetail = (item) => {
    if(!item) {
        return null;
    }
    return (
        
        <div className='container-lg mt-2'>
            <h1>ItemDetail</h1>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>{item.category}</p>
        </div>
    );
};

ItemDetail.propTypes = {
    item: propTypes.object,
};

export default ItemDetail; 