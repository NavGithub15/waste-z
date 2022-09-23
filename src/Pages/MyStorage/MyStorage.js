import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContexts';
import { useState } from 'react';
import { addDoc, collection, Timestamp, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";
import QuantityPicker from '../../components/QuantityPicker/QuantityPicker';

export default function MyStorage() {

  let date = new Date(Date.now());

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [currentDate, setCurrentDate] = useState(date);
  const [futureDate, setFutureDate] = useState(date);
  const [quantity, setQuantity] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")

  const { currentUser, logOut, } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.error);
    }
  };

  const handleAddSubmit = async(e) => {
    e.preventDefault();

    if(!name || !category || !currentDate || !futureDate || !quantity ) {
      setErrorMessage("All fields are necessary")
      return;
    } else {
      try { await addDoc(collection(db, "MyStorage"), { 
        name: name,
        category: category,
        futureDate: futureDate,
        currentDate: currentDate,
        timestamp: serverTimestamp(),
        quantity: quantity
      }) 
    } catch {
      console.log()
    }
    }
    e.target.reset();
    setQuantity(0);
  }

  const increment = () => {
    setQuantity(function (prevCount) {
      return (prevCount += 1);
    });
  }

  const decrement = () => {
    setQuantity(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1); 
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <section className="storage">
      <div className="storage__account-container">
        <h2 className="storage__title">My Storage</h2>
        <div className="storage__user-wrapper">
          <p className="storage__user">{currentUser && currentUser.email}</p>
          <span onClick={handleLogout} className="storage__user-cta">
          Log Out
          </span>
        </div>
      </div>

      <div>
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={handleAddSubmit}>
          <div>
            <input type="image" />
          </div>
          <div>
            <label>Item Name</label>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
          </div>
          <QuantityPicker increment={increment} decrement={decrement} quantity={quantity}/>
          <div>
            <label>Storing Location</label>
            <select name="category" onChange={(e) => setCategory(e.target.value)}>
            <option defaultValue> -- select an option -- </option>
            <option value="fridge">Fridge</option>
            <option value="pantry">Pantry</option>
            <option value="freezer">Freezer</option>
            </select>
          </div>
          <div>
            <label>Purchased Date</label>
            <input type="date" onChange={(e) => setCurrentDate(e.target.value)}/>
            <label>Expiry Date</label>
            <input type="date" onChange={(e) => setFutureDate(e.target.value)}/>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>

    </section>
  );
};