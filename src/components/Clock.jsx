import { useState, useEffect } from 'react';
import "../Styles/Clock.css";

export function Clock() {
    // Initiating the states
    const [hours, setHours] = useState("00");
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const [ampm, setAmpm] = useState("AM");

    // Effect
    useEffect(function() {
        // Setting the interval of 1000 milliseconds
        setInterval(function() {
            // Initiating Date Object
            let time = new Date();

            // Get current timings
            let hour = time.getHours();
            let minute = time.getMinutes().toString();
            let second = time.getSeconds().toString();

            // Formatting hours
            if (hour > 12) {
                hour -= 12;
            }
            hour = hour.toString();

            // AM/PM
            let am_pm;
            if (hour >= 12) {
                am_pm = "PM";
            } else {
                am_pm = "AM";
            }

            // Updating the state
            setHours(hour.padStart(2, "0"));
            setMinutes(minute.padStart(2, "0"));
            setSeconds(second.padStart(2, "0"));
            setAmpm(am_pm);
        }, 1000);
    }, [hours, minutes, seconds, ampm]);
    
    return(
        <p id="clock">{hours}:{minutes}:{seconds} {ampm}</p>
    )
}