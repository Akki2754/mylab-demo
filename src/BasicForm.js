import React, { useState } from 'react';

const BasicForm = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [allEntry,SetAllEntry]=useState([]);
    const SubmitForm=(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password};
        SetAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }
    return (
        <>
            <form onSubmit={SubmitForm}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" autoComplete="off" value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="Password" id="password" autoComplete="off" value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                {
                    allEntry.map((curElem)=>{
                        <div>
                            <p>{curElem.email}</p>
                            <p>{curElem.password}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}
export default BasicForm