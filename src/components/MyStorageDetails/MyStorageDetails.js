import "./MyStorage.scss"
import { myStorage } from "../../Utils/Utils";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";

export default function MyStorageDetails() {
    const [storageData, setStorageData] = useState([])

    let { id } = useParams();

  // useEffect to get the data from database
  useEffect(() => {
    myStorage().then(response => setStorageData(response))
  },[])

//     // handle delete function to delete item   
//   const handleDelete = async (id) => {
//     try {
//       await deleteDoc(doc(db, "MyStorage", id));
//       setStorageData(storageData.filter((item) => item.id !== id));
//     } catch (err) {
//       console.log(err);
//     }
//   };

  if (!storageData) {
    return <p>You have no item in the storage</p>;
  }
  
  return (
    <>
        <div>
            {storageData.map((item) => {
            return (
                <div key={item.id}>
                    {" "}
                    <p>{item.name}</p>
                    <img src={item.image} alt="" width={150}/>
                    <p>{item.category}</p>
                    <p>{item.currentDate}</p>
                    <p>{item.futureDate}</p>
                    <p>{item.quantity}</p>
                </div>
                );
            })}
      </div>
    </>
  )
}