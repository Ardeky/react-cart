import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../products';
import ItemDetail from './itemDetail';

const ItemDetailContainer = () => {
    const [ item, setItem ] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getProduct(id)
        .then((response) => {
            setItem(response);
        })
        .catch(() => {
            setItem(null);
        });
    }, [id]);
    return <ItemDetail item={item} />
};

export default ItemDetailContainer;