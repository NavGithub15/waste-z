import "./TrackBar.scss"
import { useState } from "react"

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
    const [active, setActive] = useState(false);
    
    const startDate =  currentDate - storeDate;
    const endDate = expirationDate - storeDate;

    const progress = Math.floor((startDate / endDate)*100)
    console.log(progress)

    // useEffect(() => {
    //   setActive(true);
    // }, []);


  return (
    <>
    <div className="trackBar">
    <div className="trackBar__inner"></div>
  </div>
  </>
  )
}