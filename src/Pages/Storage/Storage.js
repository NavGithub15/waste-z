import "./Storage.scss";
import { vegetables, dairy, fruits, meats, condiments, pantry, veganProteins } from "../../Utils/Utils";
import { useState, useEffect } from "react";

export default function Storage() {
  const [dairyItems, setDairyItems] = useState([]);
  const [vegetablesItems, setVegetablesItems] = useState([]);
  const [fruitsItems, setFruitsItems] = useState([]);
  const [meatsItems, setMeatsItems] = useState([]);
  const [condimentsItems, setCondimentsItems] = useState([]);
  const [pantryItems, setPantryItems] = useState([]);
  const [veganProteinsItems, setVeganProteinsItems] = useState([]);

  useEffect(() => {
    vegetables().then(response => setVegetablesItems(response))
    dairy().then(response => setDairyItems(response))
    fruits().then(response => setFruitsItems(response))
    meats().then(response => setMeatsItems(response))
    condiments().then(response => setCondimentsItems(response))
    pantry().then(response => setPantryItems(response))
    veganProteins().then(response => setVeganProteinsItems(response))   
  }, []);

  return (

    <section className="storage__card card">
      <h1 className="card-title">Storage Guide</h1>
      <div className="card__container">
        {dairyItems.map((item) => {
          return (
          <div key={item.id} className="card__content-wrapper">
            <h2 className="card__heading">Dairy & eggs</h2>
            <div className="card__name-wrapper">
              <h3 className="card__name">{item.name}</h3>
            </div>
            <div className="card__fresh-wrapper">
              <h3 className="card__content-heading">At Freshest</h3>
              <p className="card__fresh">{item.fresh}</p>
            </div>
            <div className="card__fridge-wrapper">
              <h3 className="card__content-heading">Refrigerator</h3>
              <p className="card__fridge">{item.fridge}</p>
            </div>
            <div className="card__freezer-wrapper">
              <h3 className="card__content-heading">Freezing</h3>
              <p className="card__freezer">{item.freezer}</p>
            </div>
            <div className="card__storage-wrapper">
              <h3 className="card__content-heading">Storage Guide</h3>
              <p className="card__storage">{item.storage}</p>
            </div>
          </div>
          );
        })}
      </div>

      <div className="card__container">
        
        {vegetablesItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <h2 className="card__heading">Vegetables</h2>
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h3 className="card__content-heading">At Freshest</h3>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h3 className="card__content-heading">Refrigerator</h3>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h3 className="card__content-heading">Freezing</h3>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h3 className="card__content-heading">Storing Location</h3>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="card__container">
        
        {fruitsItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <h2 className="card__heading">Fruits</h2>
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h3 className="card__content-heading">At Freshest</h3>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h3 className="card__content-heading">Refrigerator</h3>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h3 className="card__content-heading">Freezing</h3>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h3 className="card__content-heading">Storing Location</h3>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card__container">
        
        {meatsItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <h2 className="card__heading">Proteins</h2>
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h3 className="card__content-heading">At Freshest</h3>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h3 className="card__content-heading">Refrigerator</h3>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h3 className="card__content-heading">Freezing</h3>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h3 className="card__content-heading">Storing Location</h3>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card__container">
        {pantryItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <h2 className="card__heading">Pantry Items</h2>
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h3 className="card__content-heading">At Freshest</h3>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h3 className="card__content-heading">Refrigerator</h3>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h3 className="card__content-heading">Freezing</h3>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h3 className="card__content-heading">Storing Location</h3>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card__container">
        {condimentsItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <h2 className="card__heading">Condiments, Oils & Spices</h2>
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h3 className="card__content-heading">At Freshest</h3>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h3 className="card__content-heading">Refrigerator</h3>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h3 className="card__content-heading">Freezing</h3>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h3 className="card__content-heading">Storing Location</h3>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card__container">
        {veganProteinsItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <h2 className="card__heading">Vegan Proteins</h2>
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h3 className="card__content-heading">At Freshest</h3>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h3 className="card__content-heading">Refrigerator</h3>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h3 className="card__content-heading">Freezing</h3>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h3 className="card__content-heading">Storing Location</h3>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
