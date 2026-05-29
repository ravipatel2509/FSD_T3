import React, { useState } from "react"
function Us3() {
    const [name, SetName] = useState("LJU")
    const [textcolor, setcolor] = useState("red")

    function ChangeName() {
        if (name === "LJU") {
            SetName("welcome Students")
        }
        else {
            SetName("LJU")
        }
    }
    function Changecolor() {
        if (textcolor === "red") {
            setcolor("blue")
        }
        else {
            setcolor("red")
        }
    }
    return (
        <>
            <button onClick={ChangeName}>ChnageText</button>
            <button onClick={Changecolor}>Change Color</button>
            <h1 style={{ color: textcolor }}>{name}</h1>
        </>
    )
}
export default Us3