import React from 'react'

function JsChallange3() {
    let curDate=new Date(2021,5,5,2);
        curDate=curDate.getHours();
        let greeting='';
        const cssStyle={};

        if(curDate>1&&curDate<11)
        {greeting='good morning'
        cssStyle.color='red';}
        else if(curDate>=12&&curDate<19)
        {greeting='Good afternoon'
         cssStyle.color='green'}

        else{greeting='Good night'
          cssStyle.color='orange'}
    return (
        
        <div>
            <h1>Hello Sir,<span style={cssStyle}>{greeting}</span></h1>
        </div>
    )
}

export default JsChallange3
