// import "./Authentication.scss";
// import { auth } from "../../firebase.config";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Authentication() {
//   const navigate = useNavigate();

//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [error, setError] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [errorLogin, setErrorLogin] = useState(false);
//   const [loginErrorMessage, setLoginErrorMessage] = useState("");

//   const handleSignup = (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const confirmPassword = e.target.confirmPassword.value;

//     if (password !== confirmPassword) {
//       return setError("Passwords do not match");
//     }

//     createUserWithEmailAndPassword(auth, email, password, confirmPassword)
//       .then((cred) => {
//         setIsSignedUp(true);
//       })
//       .catch((err) => {
//         setErrorMessage("Failed to sign up! Please try again");
//       });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     signInWithEmailAndPassword(auth, email, password)
//       .then((cred) => {
//         setIsLoggedIn(true);
//         navigate("/inventory");
//       })
//       .catch((err) => {
//         setLoginErrorMessage("Failed to login! Please try again");
//       });
//   };

//   //Sign up render
//   const renderSignUp = () => (
//     <div>
//         <h1>Sign Up</h1>
//         <form onSubmit={handleSignup}>
//           <div className="form-group">
//           Email: <input type="email" name="email" />
//         </div>
//         <div className="form-group">
//           Password: <input type="password" name="password" />
//         </div>
//         <div className="form-group">
//         {error && <label className="error">{signUpError}</label>}
//           Confirm Password: <input type="password" name="confirmPassword" />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Signup
//         </button>
//       </form>
//     </div>
//   );

//   //Sign in render
//   const renderLogin = () => (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           {errorLogin && <label className="error">{loginErrorMessage}</label>}
//           Email: <input type="email" name="email" />
//         </div>
//         <div className="form-group">
//           Password: <input type="password" name="password" />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </div>
//   );

//   // Handle the Signup/Login
//   if (!isSignedUp) return renderSignUp();
//   if (!isLoggedIn) return renderLogin();

//   return <></>;
// }
