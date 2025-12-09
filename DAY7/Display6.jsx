import { use, useState } from "react";

 
function Display6() {
  const [items, setItems] = useState([1, 2]);
  const [count,setCount] = useState(2);

 function addItem() {
     
    setItems((prev)=>{return([...prev,count])});
    setCount((t)=>{ return(t+1)})
    }

  return (
    
    <>
      <h2>Array</h2>
        <button onClick={addItem}>add data </button>

      {items.map((d) => {
       return <p>{d}</p>
    })}

    
    </>
  );
}

export default Display6;
