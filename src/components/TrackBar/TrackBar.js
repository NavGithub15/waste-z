import "./TrackBar.scss"
// import { useState useEffect } from "react";

export default function TrackBar({ storageDate, expiryDate }) {
  // const [progress, setProgress] = useState(0);
  // const [color, setColor] = useState("")

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

  const progress = (Math.floor((startDate / endDate) * 100))

  let color = ("#CF5C5C");

  if (progress <= 25) {
    color = ("#158463");
  } else if (progress <= 50) {
    color = ("#158463")
  } else if (progress <= 75) {
    color = ("#FD9345")
  } else if (progress <= 100) {
    color = ("#FD9345")
  }

  // useEffect(() => {

    


  // },[progress, color])
  // // console.log(progress)


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
        <div className="trackBar__inner" style={progressStyles}></div>
      </div>
    </>
  )
}