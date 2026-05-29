import React, { useState } from 'react'
function Us2() {
    const [num, setCount] = useState(0)
    function increment() {
        if (num<10) {
            setCount(num+1)
        }
        else {
            return false
        }
    }
    function decrement() {
        if (num<=10) {
            setCount(num-1)
        }
        else {
            return false
        }
    }
    return (
        <>
            <button onClick={increment}>Increment</button><br></br>
            <button onClick={decrement}>Decrement</button>
            <h1>{num}</h1>

        </>
    )
}
export default Us2
