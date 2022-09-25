import "./MyStorage.scss";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContexts';
import { useState, useEffect } from 'react';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase.config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import QuantityPicker from '../../components/QuantityPicker/QuantityPicker';
import MyStorageDetails from "../../components/MyStorageDetails/MyStorageDetails";
// import imageIcon from "../../styles/assets/icons/Circle-icons-image.svg.png";


export default function MyStorage() {

  let date = new Date(Date.now());

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [storageDate, setStorageDate] = useState(date);
  const [expiryDate, setExpiryDate] = useState(date);
  const [quantity, setQuantity] = useState(0)
  const [imageUpload, setImageUpload] = useState([])
  const [imageName, setImageName] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false)

  const { currentUser, logOut, } = useAuth();

  const navigate = useNavigate();

  // Handle logout 
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.error);
    }
  };

  // handle image submit
  const handleImageSubmit = (event) => {
    setImageUpload(event.target.files[0]);
  };

  useEffect (()=> { 
    uploadImage();
  }, [imageUpload])

  // function to upload image to database
  const uploadImage = () =>{
    const imageName = new Date().getTime() + imageUpload.name + v4()
    const imageRef = ref(storage, imageName);
    uploadBytes(imageRef, imageUpload).then(() => {
      getImageLink(imageRef)
    })
  };
  const getImageLink = (imageRef) => {
    getDownloadURL(imageRef).then((url) => {
      setImageName(url);
    });
  };

  // Handle submit to add food item to database
  const handleAddSubmit = async(e) => {
    e.preventDefault();

    if(!name || !category ||  !subCategory || !storageDate || !expiryDate || !quantity ) {
      setErrorMessage(true)
      return;
    } else {
      try { 
        await addDoc(collection(db, "MyStorage"), { 
        name: name,
        image: imageName,
        category: category,
        subCategory: subCategory,
        expiryDate: expiryDate,
        storageDate: storageDate,
        timestamp: serverTimestamp(),
        quantity: quantity
      }) 
    } catch (error){
      console.log(error)
    }
    }
    e.target.reset();
    setQuantity(0);
  }

  // function to increase and decrease the quantity
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
      
        <div className="storage__user-wrapper">
          <p className="storage__user">
            <span className="storage__user-uppercase">Welcome! </span>
             {currentUser && currentUser.email}</p>
          <span onClick={handleLogout} className="storage__user-cta">
          Log Out
          </span>
        </div>
        <h2 className="storage__title">Add new item</h2>
      <div className="storage__container">
        {errorMessage && <p>Please fill out all the fields!!</p>}
        <form className="storage__form" onSubmit={handleAddSubmit}>
          <div className="storage__icon-wrapper">
            <label htmlFor="file-input" className="storage__input-label">
            {/* <img className="storage__icon" 
              src={imageIcon}
              alt="upload icon" /> */}
            </label>
              <input type="file"
                className="storage__input-file" 
                accept="image/x-png, image/jpeg"
                id="file-input"
                onChange={(event) => {
                handleImageSubmit(event)}}/>
          </div>
          <div className="storage__input-wrapper">
            <input className="storage__input"type="text" name="name"
              placeholder="Item Name" onChange={(e) => setName(e.target.value)}/>
          </div>
          <QuantityPicker
            className="storage__qty-picker"
            increment={increment} decrement={decrement}
            quantity={quantity}/>

          <div className="storage__option-wrapper">
            <h4 className="storage__option-label">Storing Location</h4>
            <select className="storage__option-select" name="category"
              onChange={(e) => setCategory(e.target.value)}>
              <option className="storage__option"
               defaultValue> -- Select an option -- </option>
              <option className="storage__option"
               value="fridge">Fridge</option>
              <option className="storage__option"
               value="pantry">Pantry</option>
              <option className="storage__option"
               value="freezer">Freezer</option>
            </select>
          </div>
          <div className="storage__option-wrapper">
          <h4 className="storage__option-label">Category</h4>
          <select className="storage__option-select" name="category"
              onChange={(e) => setSubCategory(e.target.value)}>
              <option className="storage__option"
               defaultValue> -- Select an option -- </option>
              <option className="storage__option"
               value="Fruits">Fruits</option>
              <option className="storage__option"
               value="Vegetables">Vegetables</option>
              <option className="storage__option"
               value="Proteins">Proteins</option>
              <option className="storage__option"
               value="Dairy">Dairy & Eggs</option>
              <option className="storage__option"
               value="Pantry">Pantry Staples</option>
              <option className="storage__option"
               value="Spices">Oils, Condiments & Spices</option>
              <option className="storage__option"
               value="Vegan">Vegan Proteins</option>
            </select>
          </div>
          <div className="storage__date-wrapper">
            <h4 className="storage__date-label">Storage Date</h4>
            <input className="storage__date" type="date"
            onChange={(e) => setStorageDate(e.target.value)}/>
          </div>
          <div className="storage__date-wrapper">
            <h4 className="storage__date-label">Expiration Date</h4>
            <input className="storage__date" type="date"
             onChange={(e) => setExpiryDate(e.target.value)}/>
          </div>
          <div className="storage__cta-wrapper">
            <Link  to="/"className="storage__cta">Cancel</Link>
            <button className="storage__cta" type="submit">Add</button>
          </div>
        </form>
      </div>
      <MyStorageDetails />
    </section>
  );
};