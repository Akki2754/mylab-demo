import React from "react";

function SimpleComponent() {
    let element = (
        <div>
          <span>Inside Span</span><br></br>
          <a href="">Click here</a>
        </div>

      );
    
        
      let a=10,b=10;
      const total=a+b;
    
    return(
        <div>
        {element}
        {total}
        </div>
    )
}

export default SimpleComponent;