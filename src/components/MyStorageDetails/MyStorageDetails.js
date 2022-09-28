import "./MyStorageDetails.scss";
import { useState, useEffect } from "react";
import { deleteDoc, doc, } from "firebase/firestore";
import { db } from "../../firebase.config";
import deleteIcon from "../../styles/assets/icons/delete_outline-24px.svg";
import TrackBar from "../TrackBar/TrackBar";
import ExpiryTrackDate from "../ExpiryTrackDate/ExpiryTrackDate";
import Collapsible from "react-collapsible";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function MyStorageDetails({ item }) {
  const [storageDelete, setStorageDelete] = useState(item);
  const [progress, setProgress] = useState(0);

  // handle delete function to delete item
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "MyStorage", id));
      setStorageDelete(storageDelete.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };


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


  const notifyWarn = () => toast.warn("Your Product in the storage expiring soon");
  const notifyExpires = () => toast.error("Your Product in the storage is expired");

  useEffect(() => {
    setProgress(Math.floor((startDate / endDate) * 100))

    if (progress > 100) {
      setTimeout(() => {notifyExpires()}, 5000)
    } else 
    return 
  },[progress])



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
        <ToastContainer {...progress}/>
      <div className="details">
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
              <TrackBar storageDate={item.storageDate} expiryDate={item.expiryDate} />
              <div className="food__qty-wrapper">
                <h4 className="food__content-heading">QTY</h4>
                <span className="food__content-text">{item.quantity}</span>
              </div>
              <ExpiryTrackDate className="food__content-text" storageDate={item.storageDate} expiryDate={item.expiryDate} />
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
