import "./App.css";
import header from "./components/header.js";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home.js'
import Electronics from './components/Electronics.js'
import Jewellery from './components/Jewellery.js'
import MensClothes from './components/MensClothes.js'
import WomensClothes from './components/WomensClothes.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer position='bottom-center' limit={1} />
      <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/jewellery" element={<Jewellery/>}/>
        <Route path="/mensclothes" element={<MensClothes/>}/>
        <Route path="/womensclothes" element={<WomensClothes/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
