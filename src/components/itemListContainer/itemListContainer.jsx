const ItemList = ({saludo}) => {
    return (
        <div className="d-flex col justify-content-center align-items-center">
            <img className="mt-4 me-2 rounded-pill" height={200} width={200} src="https://i.ytimg.com/vi/gag0GT2-Dcg/maxresdefault.jpg" alt="ola k ase" />
            <h1 className="mt-2">{saludo}</h1>
        </div>
    );
};

export default ItemList;