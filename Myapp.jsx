import "./My.css"
import img1 from "./assets/1.jpg"
function Myapp() {
    const name = "ReactVite"
    return (
        <>
            {/*inline css*/}
            <h1 style={{
                color: "blue",
                fontstyle: "italic",
                fontSize: "25px"
            }}>Welcome to {name}</h1>
            {/*External css using ClassName*/}
            <p className="para">
                Jsx allows writing HTML-link code inside js
            </p>
            {/*ordered List*/}
            <h3>List of Fruits</h3>
            <ol type="A">
                <li>Apple</li>
                <li>Banana</li>
                <li>kiwi</li>
            </ol>
            {/*img from assest folder*/}
            <img src={img1} alt="fruit" width="200" />
            {/*image from public folder*/}
            <img src="/2.jpg" alt="logo" width="200" />
        </>
    )
}
export default Myapp












// function Myapp(){
//     const n="LJU"
//     return(
//         <div>
//         <h1>{n}</h1>,
//         <h1>"{n}"</h1>,
//         <h1>{"{n}"}</h1>,
//         <h1>{'{n}'}</h1>,
//         <h1>{"n"}</h1>,
//         <h1>{n+"test"}</h1>,
//         <h1>{n.toUpperCase()}</h1>,
//         <h1>{5+5}</h1>,
//         <h1>{[1,2,3]}</h1>,
//         <h1>{[1,2,3].join(",")}</h1>
//         </div>
//     )
// }
// export default Myapp