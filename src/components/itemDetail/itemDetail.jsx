import PropTypes from "prop-types";

const ItemDetail = ({ item, isLoading, addItem }) => {
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!item) {
    return <h2>Error404: Page not found</h2>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>Referencia: ${item.id}</p>
      <p>Precio: ${item.price}</p>
      <p>Categoría: {item.categoryId}</p>
      <button onClick={() => addItem(item, 1)}>Agregar al carrito</button>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
  isLoading: PropTypes.bool,
  addItem: PropTypes.func,
};

export default ItemDetail;