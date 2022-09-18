import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';

export default function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}/>
    </Routes >
  </BrowserRouter>
  )
}