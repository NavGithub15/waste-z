import "./MyStorageDetails.scss";
import { useState, useRef } from "react";
import { deleteDoc, doc, } from "firebase/firestore";
import { db } from "../../firebase.config";
import deleteIcon from "../../styles/assets/icons/delete_outline-24px.svg";
import TrackBar from "../TrackBar/TrackBar";
import Collapsible from "react-collapsible";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MyStorageDetails({ item }) {
  const [storageDelete, setStorageDelete] = useState(item);

  // handle delete function to delete item
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "MyStorage", id));
      setStorageDelete(storageDelete.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const notifyExpire = () => toast.error(`Your ${item.name} in ${item.category} is expired `);

  // function to convert timestamp to epoch
  function epoch(date) {
    return Date.parse(date)
  }
  
  // storage timestamp into epoch
  const storageTimestamp = epoch(item.storageDate)

  // expiry timestamp into epoch
  const expiryTimestamp = epoch(item.expiryDate)

  // current timestamp into epoch
  const dateToday = new Date()
  const todayTimestamp = epoch(dateToday)

  const startDate = todayTimestamp - storageTimestamp;
  const endDate = expiryTimestamp - storageTimestamp;

  const progress = Math.floor((startDate / endDate) * 100)

  let dateText = ("Expired");
  let color = ("#CF5C5C");

  if (progress <= 25) {
    dateText = ("Expiration Date")
    color = ("#158463")
  } else if (progress <= 50) {
    dateText = ("Expiration Date")
    color = ("#158463")
  } else if (progress <= 75 || progress <= 99) {
    dateText = ("Expiring on")
    color = ("#FD9345")
  } else if (progress <= 100) {
    dateText = ("Expired")
    color = ("#CF5C5C");
  } else if (progress > 100) {
    setTimeout(() => {notifyExpire()},2000)
    dateText = ("Expired on")
    color = ("#CF5C5C");
  }

  const progressStyles = {
    color: `${color}`,
  };

  if (!item) {
    return (
      <section className='storage-item'>
        <div className='storage-item__failed'>
          <h1>Failed to load storage items</h1>
        </div>
      </section>
    )
  }

  return (
    <>
      <div className="details">
      <ToastContainer limit={2}/>
        <div className="details__container">
          <div className="details__title-wrapper">
            <h3 className="details__food-title">{item.name}</h3>
          </div>
          <div className="details__aside-wrapper">
            <div className="details__image-wrapper">
              <img
                className="details__image"
                src={item.image}
                alt="food item" />
            </div>
            <div className="details__content-wrapper food">
              <TrackBar progress={progress}/>
              <div className="food__qty-wrapper">
                <h4 className="food__content-heading">QTY</h4>
                <span className="food__content-text">{item.quantity}</span>
              </div>
              <div className="food-wrapper">
                <h4 className="food__content-heading" style={progressStyles}>{dateText}</h4>
                <span className="food__content-text">{item.expiryDate}</span>
              </div>
              <div className="food__icon-wrapper">
                <img
                  className="food__icon"
                  src={deleteIcon}
                  onClick={() => handleDelete(item.id)}
                  alt="delete" />
              </div>
            </div>
          </div>
          <Collapsible className="food__accordion" trigger=".">
            <div className="food__accordion-wrapper">
              <div className="food__accordion-content-wrapper">
                <div className="food__category-wrapper">
                  <h4 className="food__content-heading">Storage</h4>
                  <span className="food__content-text">{item.category}</span>
                </div>
                <div className="food__type-wrapper">
                  <h4 className="food__content-heading">Category</h4>
                  <span className="food__content-text">
                    {item.subCategory}
                  </span>
                </div>
                <div className="food__timestamp-wrapper">
                  <h4 className="food__content-heading">Storage Date</h4>
                  <span className="food__content-text">
                    {item.storageDate}
                  </span>
                </div>
              </div>
            </div>
          </Collapsible>
        </div>
      </div>
    </>
  );
}
