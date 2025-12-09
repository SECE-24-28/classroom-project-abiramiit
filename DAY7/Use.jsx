function Use(){
    const [count,setCount]=useState(1);
    console.log(count);
    return(
    <>
    <button onClick={()=>{setCount(count+1)}}>Increase</button>
    <h1>count={count}</h1>
    </>
    );
}

export default Use

// function Use() {
//   var count = 1;

//   function add() {
//     count++;
//     console.log(count);
//   }

//   return (
//     <>
//       <h2>Count: {count}</h2>
//       <button onClick={add}>Increase</button>
//     </>
//   );
// }

// export default Use;
