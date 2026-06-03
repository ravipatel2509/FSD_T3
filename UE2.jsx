// ch7=5 Mmark MCQ
// 5Mark (Routing & Props)
// ch=8 5 Mark MCQ
// 10mark(UseState,useContext,UsingForm)

import { useState, useEffect } from "react";
function UE2() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])
    return (
        <h1>
            Time using LocaltimeString
            {date.toLocaleTimeString()}<br /><br/>
            Hour-{date.getHours()}<br/><br/>
            Min-{date.getMinutes()}<br/><br/>
            sec-{date.getSeconds()}<br/><br/>
        </h1>
    )
}
export default UE2