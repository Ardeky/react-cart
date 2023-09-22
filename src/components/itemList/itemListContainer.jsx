import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../products';
import ItemList from './itemList';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId).then((response) => {
            setItems(response);
        });
    },[categoryId]);
    return <div><ItemList items={items}/></div>
};
export default ItemListContainer;