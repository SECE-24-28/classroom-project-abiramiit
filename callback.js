
/*callback

function add(show){
istrue=true
if(istrue)
{
 show()//display
}
}

console.log("welcome")
add(display)
function display(){
console.log("it's good")
}
*/

// function add(display){
// istrue=true
// if(istrue)
// {
//  display("nandhini")//display
// }
// }
// console.log("welcome")
// add(display)
// function display(name){
// console.log("it's good",name)
// }


// for both method.1 nad method.2--------let mypromise = new Promise((resolve, reject) => {
//     let istrue = false;
//     if(istrue)
//         resolve()
//     else
//         reject()
// })



/* method.2-----mypromise.then(success).catch(fail)
       // method.1 ------mypromise.then(()=>{console.log("success!!!")}).catch(()=>{console.log("oops! failed")})

method.2----// function success{
            //     console.log("success!!")
            // }

            // function fail{
            //     console.log("failed!!")
            // }
*/


/*function display()
{
    return new Promise((resolve, reject) => {
    let istrue = false;
    if(istrue)
        resolve()
    else
        reject()
})
}

display().then(()=>{console.log("success!!!")}).catch(()=>{console.log("oops! failed")})

*/


function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject("bye")
  })
  }
   

//  display().then((data)=>{ console.log("done!....................",data)})
//   .catch(()=>{console.log("not done")} )
 
  async function show(){
     try{
      var res= await  display()
      console.log(res)
     }
     catch(Exception){
      console.log("the pb",Exception)
     }
     
  } 
  
  show()