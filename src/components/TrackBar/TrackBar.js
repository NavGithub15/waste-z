import "./TrackBar.scss"

export default function TrackBar({ storageDate, expiryDate }) {

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

  // const startDate = todayTimestamp - storageTimestamp;
  // const endDate = expiryTimestamp - storageTimestamp;

  const progress = Math.floor((todayTimestamp - storageTimestamp)/(expiryTimestamp - storageTimestamp)* 100)
  console.log(progress)

  let color = ("#CF5C5C");

  if (progress <= 25) {
    color = ("#158463");
  } else if (progress <= 50) {
    color = ("#158463")
  } else if (progress <= 75) {
    color = ("#FD9345")
  } else if (progress <= 100) {
    color = ("#CF5C5C")
  } else if (progress > 100){
    <h1> Product is Expired</h1>
  } 

  const progressStyles = {
    width: `${progress}%`,
    backgroundColor: `${color}`,
  };
  
if (!progress){
  return (
  <h1>Tracking not available at this moment</h1>
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