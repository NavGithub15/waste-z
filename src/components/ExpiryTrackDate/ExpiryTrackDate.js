// import { useState, useEffect } from "react"

export default function ExpiryTrackDate({ storageDate, expiryDate }) {
  
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
    
        const progress = Math.floor((startDate/endDate)*100)
      
        let dateText = ("Expired");
        let color = ("#CF5C5C");

      if (progress <= 25) {
        dateText = ("Expiration Date")
        color = ("#158463")
      } else if (progress <= 50) {
        dateText = ("Expiration Date")
        color = ("#158463")
      } else if (progress <= 75) {
        dateText = ("Expiring on")
        color = ("#FD9345")
      } else if (progress <= 100) {
        dateText = ("Expired")
        color = ("#CF5C5C");
      } else if (progress > 100) {
        dateText = ("Expired on")
        color = ("#CF5C5C");
      }

    const progressStyles = {
        color: `${color}`,
      };
  
    return (
        <>
            <div className="expiry-wrapper">
                <h4 className="expiry__content-heading" style={progressStyles}>{dateText}</h4>
                <span className="expiry__content-text">{expiryDate}</span>
            </div>
        </>
    )
}