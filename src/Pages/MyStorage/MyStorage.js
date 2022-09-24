import "./MyStorage.scss";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContexts';
import { useState, useEffect } from 'react';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase.config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { myStorage } from "../../Utils/Utils";
import { v4 } from "uuid";
import QuantityPicker from '../../components/QuantityPicker/QuantityPicker';
import imageIcon from "../../styles/assets/icons/Circle-icons-image.svg.png";


export default function MyStorage() {

  let date = new Date(Date.now());

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [currentDate, setCurrentDate] = useState(date);
  const [futureDate, setFutureDate] = useState(date);
  const [quantity, setQuantity] = useState(0)
  const [imageUpload, setImageUpload] = useState([])
  const [imageName, setImageName] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false)
  const [storageData, setStorageData] = useState([])


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

  // useEffect (()=> { 
  //   uploadImage();
  // }, [imageUpload])

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

  // // useEffect to get the data from database
  // useEffect(() => {
  //   myStorage().then(response => setStorageData(response))
  // },[])

  // Handle submit to add food item to database
  const handleAddSubmit = async(e) => {
    e.preventDefault();

    if(!name || !category || !currentDate || !futureDate || !quantity ) {
      setErrorMessage(true)
      return;
    } else {
      try { 
        await addDoc(collection(db, "MyStorage"), { 
        name: name,
        image: imageName,
        category: category,
        futureDate: futureDate,
        currentDate: currentDate,
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

  // handle delete to delete food item

  // const handleDelete = async (id) => {
  //   try {
  //     await deleteDoc(doc(db, "MyStorage", id));
  //     setData(data.filter((item) => item.id !== id));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
      <div className="storage__container">
      <h2 className="storage__title">Add new item</h2>
        {errorMessage && <p>Please fill out all the fields!!</p>}
        <form className="storage__form" onSubmit={handleAddSubmit}>
          <div className="storage__icon-wrapper">
            <label htmlFor="file-input" className="storage__input-label">
            <img className="storage__icon" 
              src={imageIcon}
              alt="upload icon" />
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
          <QuantityPicker className="storage__qty-picker"
            increment={increment} decrement={decrement} quantity={quantity}/>
          <div className="storage__option-wrapper">
            <h3 className="storage__option-label">Storing Location</h3>
            <select className="storage__option-select" name="category"
             onChange={(e) => setCategory(e.target.value)}>
              <option className="storage__option" defaultValue> -- Select an option -- </option>
              <option className="storage__option" value="fridge">Fridge</option>
              <option className="storage__option" value="pantry">Pantry</option>
              <option className="storage__option" value="freezer">Freezer</option>
            </select>
          </div>
          <div className="storage__date-wrapper">
            <h3 className="storage__date-label">Purchased Date</h3>
            <input className="storage__date" type="date"
              onChange={(e) => setCurrentDate(e.target.value)}/>
            <h3 className="storage__date-label">Expiry Date</h3>
            <input className="storage__date" type="date"
             onChange={(e) => setFutureDate(e.target.value)}/>
          </div>
          <div className="storage__cta-wrapper">
            <Link  to="/"className="storage__cta">Cancel</Link>
            <button className="storage__cta" type="submit">Add</button>
          </div>
        </form>
      </div>

      {/* <div>
        {storageData.map((data) => {
          return (
            <div key={data.id}>
              {" "}
              <p>{data.name}</p>
              <p>{data.category}</p>
              <p>{data.currentDate}</p>
              <p>{data.futureDate}</p>
              <p>{data.quantity}</p>
              <img src={data.image} alt="user data" width={150}/>
            </div>
          );
        })}
      </div> */}

    </section>
  );
};