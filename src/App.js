import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Header from './component/Header/Header';
import Shop from './component/Header/Shop/Shop';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Orders from './component/orders/Orders';
import RequiredAuth from './component/RequiredAuth/RequiredAuth';
import Shipment from './component/Shipment/Shipment';
import SignUp from './component/SignUp/SignUp';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/Order' element={<Orders></Orders>}></Route>
        <Route path='/Inventor' element={<RequiredAuth><Inventory></Inventory></RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/shipment' element={<RequiredAuth><Shipment></Shipment></RequiredAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
