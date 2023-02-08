import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Header/Shop/Shop';
import Inventory from './component/Inventory/Inventory';
import Orders from './component/orders/Orders';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/Order' element={<Orders></Orders>}></Route>
        <Route path='/Manage_Inventor' element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
