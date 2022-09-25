import "./MyStorageDetails.scss";
import { myStorage } from "../../Utils/Utils";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";
import editIcon from "../../styles/assets/icons/edit-24px.svg";
import deleteIcon from "../../styles/assets/icons/delete_outline-24px.svg";
import TrackBar from "../TrackBar/TrackBar";

export default function MyStorageDetails() {
  const [storageData, setStorageData] = useState([]);

  // useEffect to get the data from database
  useEffect(() => {
    myStorage().then((response) => setStorageData(response));
  }, []);

  // handle delete function to delete item
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "MyStorage", id));
      setStorageData(storageData.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  if (!storageData) {
    return <p>You have no item in the storage</p>;
  }

  return (
    <>
      <div className="details">
        <h2 className="details__heading">Storage Items</h2>
        {storageData.map((item) => {
          return (
            <div key={item.id} className="details__container dropdown">
              {" "}
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
                <TrackBar />
              </div>
              <div className="details__content-wrapper food">
                <div className="food__qty-wrapper">
                  <h4 className="food__content-heading">QTY</h4>
                  <span className="food__content-text">{item.quantity}</span>
                </div>
                <div className="food__timestamp-wrapper">
                  <h4 className="food__content-heading">Expiration Date</h4>
                  <span className="food__content-text">{item.futureDate}</span>
                </div>
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
                      {item.currentDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
