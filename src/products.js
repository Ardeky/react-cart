const products = [
    {id: '1', name: 'Asus Rog Strix GI10dh', price: 2500, category: 'computer'},
    {id: '2', name: 'Alienware Aurora R13', price: 2700, category: 'computer'},
    {id: '3', name: 'MSI Aegis R 10sc-017us', price: 3000, category: 'computer'},
    {id: '4', name: 'iPad Pro', price: 799, category: 'tablet'},
    {id: '5', name: 'Galaxy Tab S S6 Lite', price: 499, category: 'tablet'},
    {id: '6', name: 'Lenovo Tab M10 Plus', price: 250, category: 'tablet'},
    {id: '7', name: 'Asus M515DA', price: 500, category: 'laptop'},
    {id: '8', name: 'Dell Vostro 3405', price: 399, category: 'laptop'},
    {id: '9', name: 'MSI Gf76', price: 1099, category: 'laptop'}
];

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find ((p) => p.id === id)
            if (product) {
                resolve(product);
            } else{
                reject('No existe');
            }
        }, 1000);
    });
};
export const getProducts = category => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            const filtered = category ? products.filter((product) => product.category === category) : products;
            resolve(filtered);        
        }, 1000);
    });
};