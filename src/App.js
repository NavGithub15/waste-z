import './App.scss';
import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage';
import Header from "./components/Header/Header";
import Inventory from './Pages/Inventory/Inventory';
import ProtectedRoute from './components/Authentication/ProtectedRoute/ProtectedRoute';
import { AuthProvider, useAuth } from './Contexts/AuthContexts';
import SignUpForm from './components/Authentication/SignUp/SignUpForm';
import SignInForm from './components/Authentication/SignIn/SignInForm';
import Storage from './Pages/Storage/Storage';

export default function App() {

  return (
  <>
    <AuthProvider>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />}/>
              <Route path="/inventory" element={<ProtectedRoute>
                <Inventory />
                </ProtectedRoute>} />
              <Route path="/signUp" element={<SignUpForm />} />
              <Route path="/signIn" element={<SignInForm />} />
              <Route path="/storage" element={<ProtectedRoute>
                <Storage />
                </ProtectedRoute>} />
          </Routes >
    </AuthProvider>
  </>
  )
}