import { useState } from "react";

const Display7=()=>
{     
    const [val,setValue]=useState(" ");
    function info(e){
        e.preventDefault();
        console.log("my name is : ",val);
    }

    return(
        <>
        <h1>hii</h1>
        <form onSubmit={info}>
                <input type="text" value={val} onChange={(e)=> setValue(e.target.value)}></input>
                <input type="submit" value="click me!!"></input>
        </form>
        </>
    )
}

export default Display7