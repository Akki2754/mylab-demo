import React ,{useState,useEffect} from "react";

function Counter(){
    const[ctr,setCounter]=useState(0);

    const addCounter =()=>{
        setCounter(ctr+1);
        console.log(ctr);
    };

    return(
        <div>
            <button onClick={addCounter}>ctr</button>
        </div>
    );
}
export default Counter;