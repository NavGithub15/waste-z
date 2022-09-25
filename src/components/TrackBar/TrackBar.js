import "./TrackBar.scss"
import { useState, useEffect } from "react"
import { red } from "@mui/material/colors"

export default function TrackBar({storageDate, expiryDate}) {


    // function to convert timestamp to epoch
    function epoch (date) {
        return Date.parse(date)
      }

      // storage timestamp into epoch
      const storageTimestamp = epoch(storageDate)

      // expiry timestamp into epoch
      const expiryTimestamp = epoch(expiryDate)

      // current timestamp into epoch
      const dateToday = new Date()
      const todayTimestamp = epoch(dateToday)
    
    const [storeDate, setStoreDate] = useState(storageTimestamp)
    const [currentDate, setCurrentDate] = useState(todayTimestamp);
    const [expirationDate, setExpirationDate] = useState(expiryTimestamp);
    const [progress, setProgress] = useState(0);
    
    const startDate =  currentDate - storeDate;
    const endDate = expirationDate - storeDate;

    // const progress = Math.floor((startDate / endDate)*100)
    // console.log(progress)

    useEffect(() => {
      setInterval(() => setProgress(Math.floor((startDate/endDate)*100)),1000)
    }, []);

    // let colorsStyles = [
    //   {max:20,color:'red'},
    //  {max:75,color:'yellow'},
    //  {max:100,color:'green'}
    // ];

    // const colors = colorsStyles.find(x => x.max >= progress).color

    const progressStyles = {
      width: `${progress}%`,
    };

  return (
    <>
    <div className="trackBar">
    <div className="trackBar__inner" style={progressStyles} progress={progress}></div>
  </div>
  </>
  )
}