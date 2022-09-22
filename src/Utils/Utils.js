import { db } from "../firebase.config";
import { collection, getDocs } from "firebase/firestore";

  const dairyDb = collection(db, "DAIRY & EGGS");
  const vegetablesDb = collection(db, "VEGETABLES");
  const fruitsDb = collection(db, "FRUITS");
  const meatsDb = collection(db, "MEAT, POULTRY & SEAFOOD");
  const condimentsDb = collection(db, "OILS, CONDIMENTS & SPICES");
  const pantryDb = collection(db, "PANTRY STAPLES");
  const veganProteinsDb = collection(db, "beans, nuts & proteins");


  export const vegetables =  () => { 
    return getDocs(vegetablesDb) 
    .then((data) => {
      return (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));  
  })}

  export const dairy = () => {
    return getDocs(dairyDb)  
    .then((data) => {
      return (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  })}

  export const fruits = () => {
    return getDocs(fruitsDb)  
    .then((data) => {
      return (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  })}

  export const meats = () => {
    return getDocs(meatsDb)  
    .then((data) => {
      return (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  })}

  export const condiments = () => {
    return getDocs(condimentsDb)  
    .then((data) => {
      return (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  })}

  export const pantry = () => {
    return getDocs(pantryDb)  
    .then((data) => {
      return (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  })}

  export const veganProteins = () => {
    return getDocs(veganProteinsDb)  
    .then((data) => {
      return (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  })}