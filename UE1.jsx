import { useState, useEffect } from "react";
function UE1() {
    const [count, setcount] = useState(0)
    const [calcultion, setcal] = useState(0)

    useEffect(() => {
        alert("clicked")
    }, [count])

    useEffect(() => {
        alert("clicked")
    }, [])

    useEffect(() => {
        alert("clicked")
    })

    const ChangeCount = () => {
        setcount(count + 1)
    }

    const ChangeCalc = () => {
        setcal(calcultion + 1)
    }
    return (
        <>
            <button onClick={ChangeCount}>ButtonA{count}</button><br />
            <button onClick={ChangeCalc}>ButtonB{calcultion}</button></>

    )
}
export default UE1