import React  from "react";
function Event3(){
    const mystyle={
        color:"white",
        backgroundcolor:"#000000",
        padding:"10px20px",
        margin:"30px"
    };
    const doubleclickHandler=(event)=>{
        alert("Welcome")
    }
    return(
        <>
        <button style={mystyle}
        onDoubleClick={doubleclickHandler}>
            Double click handler
        </button>
        </>
    )
}
export default Event3;