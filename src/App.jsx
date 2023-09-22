import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemList/itemListContainer';
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';
import Navbar from './components/navbar/navbar';
import CartProvider from './components/cartContext/cartProvider';
import CheckOut from "./components/cartContext/checkOut"

function App() {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App