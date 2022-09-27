import "./MyStorage.scss";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase.config";
import { onSnapshot } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import QuantityPicker from '../../components/QuantityPicker/QuantityPicker';
import MyStorageDetails from "../../components/MyStorageDetails/MyStorageDetails";
// import imageIcon from "../../styles/assets/icons/Circle-icons-image.svg.png";


export default function MyStorage() {

  function initializeDate() {
    const today = new Date();

    const year = String(today.getFullYear());
    let month = String(today.getMonth() + 1);
    let day = String(today.getDate());

    if (month.length === 1) {
      month = "0" + month;
    }

    if (day.length === 1) {
      day = "0" + day;
    }

    return `${year}-${month}-${day}`;
  }

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [storageDate, setStorageDate] = useState(initializeDate());
  const [expiryDate, setExpiryDate] = useState(initializeDate());
  const [quantity, setQuantity] = useState(0);
  const [imageUpload, setImageUpload] = useState([]);
  const [imageName, setImageName] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);
  const [storageData, setStorageData] = useState([]);
  const [storageEdit, setStorageEdit] = useState(false)
  const [itemUuid, setItemUuid] = useState("");

  // Handle submit to add food item to database
  const handleAddSubmit = async (e) => {
    e.preventDefault();

    if (!name || !category || !subCategory || !storageDate || !expiryDate || !quantity) {
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

      } catch (error) {
        console.log(error)
      }
    }
    e.target.reset();
    setQuantity(0);
  }

  // handle image submit
  const handleImageSubmit = (event) => {
    setImageUpload(event.target.files[0]);
  };

  useEffect(() => {
    uploadImage();
  }, [imageUpload])

  // function to upload image to database
  const uploadImage = () => {
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


  // snapshot method to get realtime data from database
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "MyStorage"),
      (snapShot) => {
        let storageItems = [];
        snapShot.docs.forEach((doc) => {
          storageItems.push({ id: doc.id, ...doc.data() });
        });
        setStorageData(storageItems);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // const handleUpdate = (todo) => {
  //   setStorageEdit(true);

  // };

  // const handleSubmitChange = (id) => {
  //   update(ref(db, "MyStorage", id), {
  //     expiryDate: expiryDate,
  //     quantity: quantity
  //   });
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
      <div className="storage__container">
        <h3 className="storage__title">Add new item</h3>
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
                handleImageSubmit(event)
              }} />
          </div>
          <div className="storage__input-wrapper">
            <input className="storage__input" type="text" name="name"
              placeholder="Item Name" onChange={(e) => setName(e.target.value)} />
          </div>
          <QuantityPicker
            className="storage__qty-picker"
            increment={increment} decrement={decrement}
            quantity={quantity} />

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
              defaultValue={storageDate}
              min={initializeDate()}
              onChange={(e) => setStorageDate(e.target.value)}
            />
          </div>
          <div className="storage__date-wrapper">
            <h4 className="storage__date-label">Expiration Date</h4>
            <input className="storage__date" type="date"
              defaultValue={expiryDate}
              min={initializeDate()}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
          </div>
          <div className="storage__cta-wrapper">
            <Link to="/" className="storage__cta">Cancel</Link>
            <button className="storage__cta" type="submit">Add</button>
          </div>
        </form>
      </div>
      <div className="storage__aside-component">
        <h2 className="storage__aside-heading">Storage Items</h2>
        {storageData.map((item) => {
          return <MyStorageDetails key={item.id} item={item} />
        })}
      </div>
    </section>
  );
};