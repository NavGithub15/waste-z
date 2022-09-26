import "./TrackBar.scss"
import { useState, useEffect } from "react";

export default function TrackBar({ storageDate, expiryDate }) {
  const [progress, setProgress] = useState(0);
  const [color, setColor] = useState("")

  // function to convert timestamp to epoch
  function epoch(date) {
    return Date.parse(date)
  }
  // storage timestamp into epoch
  const storageTimestamp = epoch(storageDate)

  // expiry timestamp into epoch
  const expiryTimestamp = epoch(expiryDate)

  // current timestamp into epoch
  const dateToday = new Date()
  const todayTimestamp = epoch(dateToday)

  const startDate = todayTimestamp - storageTimestamp;
  const endDate = expiryTimestamp - storageTimestamp;


  useEffect(() => {
    setProgress(Math.floor((startDate / endDate) * 100))
  }, []);

  useEffect(() => {
    if (progress <= 25) {
      setColor("#158463");
    } else if (progress <= 50) {
      setColor("#158463")
    } else if (progress <= 75) {
      setColor("#FD9345")
    } else {
      return setColor("#CF5C5C")
    }
  },[color])


  const progressStyles = {
    width: `${progress}%`,
    backgroundColor: `${color}`,
  };
  
if (!progress){
  return (
  <h1>Loading......</h1>
  )
}

  return (
    <>
      <div className="trackBar">
        <div className="trackBar__inner" style={progressStyles} progress={progress}></div>
      </div>
    </>
  )
}