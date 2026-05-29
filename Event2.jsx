import React from "react";
function Event2() {
    function handleChange(Event) {
        console.log(event.target.value)
    }
    return (
        <input type="text" name="firstName" onchange={handleChange} />

    )
}
export default Event2


