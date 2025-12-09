import { useState } from "react";

const Display5=()=>{
   const [student,setStudent] = useState({
            name:"nandhini",
            gender:"female",
            mobile:11111
        })
        console.log("current state",student);
    function updateName()
    {
        setStudent((previousValue)=>{
            console.log("previous:",previousValue);
            return({...previousValue,name:"Abi!"})})
    }
    return (
    <>
        <h1>{student.name}</h1>
        <h1>{student.gender}</h1>
        <h1>{student.mobile}</h1>
        <button onClick={updateName}>change-name</button>
    </>
    )
}
export default Display5