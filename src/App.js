import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct.js';
import ProductList from './components/ProductList.js';
import UpdateProduct from './components/UpdateProduct..js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />  
      <Routes>
         <Route element={<PrivateComponent />}>
          <Route path="/" element={<ProductList />}></Route>
          <Route path="/add" element={<AddProduct />}></Route>
          <Route path="/update/:id" element={<UpdateProduct/>}></Route>
          <Route path="/logout" element={<h1>Logout</h1>}></Route>
          <Route path="/profile" element={<h1>Profile</h1>}></Route>
         
        </Route>
          <Route path='/signup' element={<SignUp />}>
        </Route> 
          <Route path='/login' element={<Login />}></Route>                 
      </Routes>      
      </BrowserRouter>
      <Footer/> 
    </div>
  );
}

export default App;
