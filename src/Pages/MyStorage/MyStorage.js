import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContexts';
import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase.config";
import QuantityPicker from '../../components/QuantityPicker/QuantityPicker';

export default function MyStorage() {

  let dateNow = new Date().toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [currentDate, setCurrentDate] = useState(dateNow);
  const [futureDate, setFutureDate] = useState(dateNow);
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

    const data = await addDoc(collection(db, "MyStorage"), { 
      name: name,
      category: category,
      futureDate: futureDate,
      currentDate: currentDate,
    }) 
    if(name === "" || category === "" || currentDate === "" || futureDate === "") {
      setErrorMessage("All fields are necessary")
      return;
    }
    e.target.reset();
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
          <QuantityPicker />
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