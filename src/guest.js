import React, {useState} from "react";



function Gester(){
  
   const[array,setArray]=useState({
    count : 0,
    current : "hey hai"
   })

   


   // const HandlerEster = () => {
   //    setArray((prev) => ({
   //      ...prev,  // Spread the previous state
   //      count: prev.count + 1  // Increment the 'count' property
   //    }));
   //  };

   const Handler=()=>{

      setArray((item)=>({

...item,
count : array.count+1

      }))
   }
  
    return(
      
      <div>
      <h1>
         on click handler 


        {
        array.count
        }
      </h1>
      <button  onClick={Handler}> on click  </button>
       </div>
       
      );
    
  }
  
  
  export default Gester;