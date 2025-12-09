import { useState } from "react"

const Display2=()=>{
    const[name,setName] = useState("")
    console.log("The data is...",name)
    return(
        <>
        <h2>Iam from Display2</h2>
        <input type ="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        <button onClick={()=>{setName("")}}>Clear</button>
        </>
    )
}

export default Display2