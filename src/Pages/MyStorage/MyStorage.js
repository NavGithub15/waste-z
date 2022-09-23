import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContexts';
import { useState, useEffect } from 'react';
import { addDoc, collection, Timestamp, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase.config";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { myStorage } from "../../Utils/Utils";
import { v4 } from "uuid";
import QuantityPicker from '../../components/QuantityPicker/QuantityPicker';

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

  // useEffect to get the data from database
  useEffect(() => {
    myStorage().then(response => setStorageData(response))
    console.log("hello")
  },[])

  // Handle submit to add food item 
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
        {errorMessage && <p>Something went wrong. Please try again</p>}
        <form onSubmit={handleAddSubmit}>
          <div>
            <input type="file" onChange={(event) => {
              handleImageSubmit(event)}}/>
          </div>
          <div>
            <label>Item Name</label>
            <input type="text" name="name" placeholder="Item" onChange={(e) => setName(e.target.value)}/>
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

      <div>
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
      </div>

    </section>
  );
};