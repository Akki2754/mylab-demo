const SlotM=(props)=>{
    
    let x = props.x;
    let y = props.y;
    let z = props.z;

    if(x===y && y===z){
    return (
        <>
        <h1>
            {x}{y}{z}
        </h1>
        <h1>This is machine</h1>
        
        </>
    )
}else{
     return(
    <>
        <h1>
            {x}{y}{z}
        </h1>
        <h1>This is not machine</h1>
        
        </>
     );
    }
};

export default SlotM;