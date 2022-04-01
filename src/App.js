import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Navbar from './components/Layouts/Navbar';
import About from './components/Pages/About';
import Contact from './components/Pages/ContactUs';
import Home from './components/Pages/Home';
import AddProduct from './components/Products/AddProduct';
import EditProduct from './components/Products/EditProduct';
import Product from './components/Products/Product';

function App() {
  return (
    <Router>   
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} ></Route>
          <Route path="/About" element={<About />} ></Route>
          <Route path="/Contact" element={<Contact />} ></Route>
          <Route path="/items/add" element={<AddProduct />} ></Route>
          <Route path="/items/:id" element={<Product />} ></Route>
          <Route path="/items/edit/:id" element={<EditProduct />} ></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
