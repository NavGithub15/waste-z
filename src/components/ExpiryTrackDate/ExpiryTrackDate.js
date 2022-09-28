import { useState, useEffect } from "react"

export default function ExpiryTrackDate({ storageDate, expiryDate }) {
     const [progress, setProgress] = useState(0);
    const [color, setColor] = useState("")
    const [dateText,setDateText] = useState("")
  
    // function to convert timestamp to epoch
    function epoch(date) {
      return Date.parse(date)
    }
    // storage timestamp into epoch
    
    useEffect(() => {
        const storageTimestamp = epoch(storageDate)
  
        // expiry timestamp into epoch
        const expiryTimestamp = epoch(expiryDate)
      
        // current timestamp into epoch
        const dateToday = new Date()
        const todayTimestamp = epoch(dateToday)
      
        const startDate = todayTimestamp - storageTimestamp;
        const endDate = expiryTimestamp - storageTimestamp;
    
        const progressToSet = Math.floor((startDate/endDate)*100)
      
      setProgress(progressToSet)

      if (progress <= 25) {
        setDateText("Expiration Date")
      } else if (progress <= 50) {
        setDateText("Expiring on")
      } else if (progress <= 75) {
        setDateText("Expiring on")
      } else if (progress <= 100) {
        setDateText("Expiring soon")
      } else{
        setDateText("Expired")
        return setColor("#CF5C5C")
      }
    }, [progress,color]);
  
    // useEffect(() => {
      
    // },[progress,color])

    const progressStyles = {
        color: `${color}`,
      };
  
    return (
        <>
            <div className="expiry-wrapper" style={progressStyles}>
                <h4 className="expiry__content-heading" style={progressStyles}>{dateText}</h4>
                <span className="expiry__content-text" style={progressStyles}>{expiryDate}</span>
            </div>
        </>
    )
}