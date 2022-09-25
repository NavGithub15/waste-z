import "./Storage.scss";
import { vegetables, dairy, fruits, meats, condiments, pantry, veganProteins } from "../../Utils/Utils";
import { useState, useEffect } from "react";

export default function Storage() {
  // const [items, setItems] = useState([]);
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
      <div className="card__container">
        <h2 className="card__heading">Dairy & Eggs</h2>
        {dairyItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h4 className="card__content-heading">At Freshest</h4>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h4 className="card__content-heading">Refrigerator</h4>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h4 className="card__content-heading">Freezing</h4>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h4 className="card__content-heading">Storing Location</h4>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card__container">
        <h2 className="card__heading">Vegetables</h2>
            {vegetablesItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h4 className="card__content-heading">At Freshest</h4>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h4 className="card__content-heading">Refrigerator</h4>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h4 className="card__content-heading">Freezing</h4>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h4 className="card__content-heading">Storing Location</h4>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="card__container">
        <h2 className="card__heading">Fruits</h2>
        {fruitsItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h4 className="card__content-heading">At Freshest</h4>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h4 className="card__content-heading">Refrigerator</h4>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h4 className="card__content-heading">Freezing</h4>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h4 className="card__content-heading">Storing Location</h4>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card__container">
        <h2 className="card__heading">Proteins</h2>
        {meatsItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h4 className="card__content-heading">At Freshest</h4>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h4 className="card__content-heading">Refrigerator</h4>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h4 className="card__content-heading">Freezing</h4>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h4 className="card__content-heading">Storing Location</h4>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card__container">
        <h2 className="card__heading">Pantry Items</h2>
        {pantryItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h4 className="card__content-heading">At Freshest</h4>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h4 className="card__content-heading">Refrigerator</h4>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h4 className="card__content-heading">Freezing</h4>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h4 className="card__content-heading">Storing Location</h4>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card__container">
        <h2 className="card__heading">Condiments, Oils & Spices</h2>
        {condimentsItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h4 className="card__content-heading">At Freshest</h4>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h4 className="card__content-heading">Refrigerator</h4>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h4 className="card__content-heading">Freezing</h4>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h4 className="card__content-heading">Storing Location</h4>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="card__container">
        <h2 className="card__heading">Vegan Proteins</h2>
        {veganProteinsItems.map((item) => {
          return (
            <div key={item.id} className="card__content-wrapper">
              {" "}
              <div className="card__name-wrapper">
                <h3 className="card__name">{item.name}</h3>
              </div>
              <div className="card__fresh-wrapper">
                <h4 className="card__content-heading">At Freshest</h4>
                <p className="card__fresh">{item.fresh}</p>
              </div>
              <div className="card__fridge-wrapper">
                <h4 className="card__content-heading">Refrigerator</h4>
                <p className="card__fridge">{item.fridge}</p>
              </div>
              <div className="card__freezer-wrapper">
                <h4 className="card__content-heading">Freezing</h4>
                <p className="card__freezer">{item.freezer}</p>
              </div>
              <div className="card__storage-wrapper">
                <h4 className="card__content-heading">Storing Location</h4>
                <p className="card__storage">{item.storage}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
