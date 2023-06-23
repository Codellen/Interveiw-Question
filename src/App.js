import React, { useState,useEffect } from 'react'
import BarChart from './Component/BarChart';

function App() {

 let[obj,setObj] = useState({"a" : 5 , "b" : 8 , "c" : 9})
 let[validate,setValidate] = useState(false)
 let[dataArray,setDataArray] = useState([])
 //console.log(dataArray)

 useEffect(()=>{
  setDataArray([obj.a,obj.b,obj.c])
 },[obj])

 

 function increaseCount(key){

  console.log(key)
  if(obj.hasOwnProperty(key))
  {
    
    setObj({ ...obj, [key]: obj[key] + 1 });
   
  }
  

 }

 function decreaseCount(key){
  if(obj.hasOwnProperty(key))
  {
    
    setObj({ ...obj, [key]: obj[key] - 1 });
    console.log(obj)
    
  }
  
 }



  return (
    <div>
     
    { 

    Object.entries(obj).map(([key, value]) => (
  
   <div className='flex' key={key}>
     
     <p>{key}</p>
     <p>{value}</p>
     <button   onClick={()=>{increaseCount(key)}}>+</button>
     <button  onClick={()=>decreaseCount(key)}>-</button>

    

    </div>

))
}
 
 <button className='btn' onClick={()=>{setValidate(!validate)}} >Show Chart</button>
 
{
validate && (
<BarChart dataArray={dataArray}></BarChart>
)
}
  
     


        </div>
      
    
  )
}

export default App
