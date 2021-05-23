import React ,{useState} from "react";

const Time=()=>{
    let NewTime=new Date().toLocaleTimeString();
    const [cTime,setTime]=useState(NewTime);
    const ChangeTime=()=>{
        let NewCTime=new Date().toLocaleTimeString();
        setTime(NewCTime);
    }
    setInterval(ChangeTime,1000);
    

    return(
        <>
        <h1>{cTime}</h1>
        <button onClick={ChangeTime}>Get Time</button>
        </>
    )
}

export default Time;
//  export {Time};