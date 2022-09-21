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
   
    <div>
      <div>
        {dairyItems.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <h1>{item.name}</h1>
              <h2>{item.fresh}</h2>
            </div>
          );
        })}
      </div>

      <div>
        {vegetablesItems.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <h1>{item.name}</h1>
              <h2>{item.fresh}</h2>
            </div>
          );
        })}
      </div>

      <div>
        {fruitsItems.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <h1>{item.name}</h1>
              <h2>{item.fresh}</h2>
            </div>
          );
        })}
      </div>

      <div>
        {meatsItems.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <h1>{item.name}</h1>
              <h2>{item.fresh}</h2>
            </div>
          );
        })}
      </div>

      <div>
        {pantryItems.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <h1>{item.name}</h1>
              <h2>{item.fresh}</h2>
            </div>
          );
        })}
      </div>

      <div>
        {condimentsItems.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <h1>{item.name}</h1>
              <h2>{item.fresh}</h2>
            </div>
          );
        })}
      </div>

      <div>
        {veganProteinsItems.map((item) => {
          return (
            <div key={item.id}>
              {" "}
              <h1>{item.name}</h1>
              <h2>{item.fresh}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
