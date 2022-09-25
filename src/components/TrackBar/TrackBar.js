import "./TrackBar.scss"
import { useState } from "react"

export default function TrackBar() {

    // function to convert timestamp to epoch
    function epoch (date) {
        return Date.parse(date)
      }
      
      const dateToday = new Date()
      const timestamp = epoch(dateToday)
    
    //   console.log(timestamp)

    const [storeDate, setStoreDate] = useState()
    const [currentDate, setCurrentDate] = useState(new Date());
    const [expiryDate, setExpiryDate] = useState();
    const [color, setColor] = useState(0);


  return (
    <>
    <div className="trackBar">
    <div className="trackBar__inner"></div>
  </div>
  </>
  )
}