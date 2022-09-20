import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Header from "./components/Header/Header";
import Inventory from './Pages/Inventory/Inventory';
import Authentication from './components/Authentication/Authentication';

export default function App() {

  return (

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/authentication" element={<Authentication />} />
    </Routes >
  </BrowserRouter>
  )
}