import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Header from "./components/Header/Header";

export default function App() {

  return (

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes >
  </BrowserRouter>
  )
}