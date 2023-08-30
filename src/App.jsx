import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/itemList/itemListContainer';
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';
import Navbar from './components/navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:Id' element={<ItemDetailContainer/>}/>
      </Routes>
    </div>
  );
};

export default App