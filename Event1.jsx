function Event1() {
    const mystyle = {
        color: "black",
        backgroundColor: "pink",
        padding: "10px10px",
        margin: "200px"
    }
    function handleClick() {
        alert("Welcome")
    }
    return (
        <>
            <center>
                <button style={mystyle} onClick={handleClick}>
                    Click Me</button>
            </center>
        </>
    )
}
export default Event1


