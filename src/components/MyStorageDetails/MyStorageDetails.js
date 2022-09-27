import "./MyStorageDetails.scss";
import { useState } from "react";
import { deleteDoc, doc, } from "firebase/firestore";
import { db } from "../../firebase.config";
import editIcon from "../../styles/assets/icons/icons8-edit-24.png";
import deleteIcon from "../../styles/assets/icons/icons8-delete-30.png";
import TrackBar from "../TrackBar/TrackBar";
import ExpiryTrackDate from "../ExpiryTrackDate/ExpiryTrackDate";

export default function MyStorageDetails({item}) {
  const [storageDelete, setStorageDelete] = useState(item)

  // handle delete function to delete item
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "MyStorage", id));
      setStorageDelete(storageDelete.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };


  if(!item) {
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
            <div className="details__container dropdown">
              <div className="details__title-wrapper">
                <h3 className="details__food-title">{item.name}</h3>
              </div>
              <div className="details__img-trackBar-wrapper">
                <div className="details__image-wrapper">
                    <img
                    className="details__image"
                    src={item.image}
                    alt="food item"/>
                </div>
                <TrackBar storageDate={item.storageDate} expiryDate={item.expiryDate}/>
              </div>
              <div className="details__content-wrapper food">
                <div className="food__qty-wrapper">
                  <h4 className="food__content-heading">QTY</h4>
                  <span className="food__content-text">{item.quantity}</span>
                </div>
                <ExpiryTrackDate storageDate={item.storageDate} expiryDate={item.expiryDate}/>
                <div className="food__icon-wrapper">
                  <img className="food__icon" src={editIcon} alt="edit" />
                  <img
                    className="food__icon"
                    src={deleteIcon}
                    onClick={() => handleDelete(item.id)}
                    alt="delete"/>
                </div>
              </div>
              <div className="dropdown__container">
                <div className="dropdown-menu">
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
            </div>
      </div>
      </>
  );
}
