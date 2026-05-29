import Prop2 from "./prop2"
function Prop1() {
    var n = "ABC"
    return (
        <>
            <Prop2 name={n} rollnum="101" marks={20} />
            <Prop2 name="DEF" rollnum="102" marks={16} />
            <Prop2 name="GHI" rollnum="103" marks="22" />
        </>
    )
} export default Prop1