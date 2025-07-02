import { useState } from "react"

export default function Basicform(){

let[name,setName]=useState('');
let[email,setEmail]=useState('');
let[submittedData,setSubmittedData]=useState(null);

let nameChange=(e)=>{
    setName(e.target.value);
}
let emailChange=(e)=>{
    setEmail(e.target.value);
}
let handleSubmit=()=>{
    setSubmittedData({name : name,email : email});
    setName('');
    setEmail('');
}
    return(
        <div>
           <input
            placeholder="enter name" 
            value={name}
            onChange={nameChange}/>
            &nbsp;

            <input 
            placeholder="enter email"
            value={email}
            onChange={emailChange}/>
           &nbsp;


            <button onClick={handleSubmit}>Submit</button>
            <br/><hr/>
            
            {submittedData && (
               <div>
                <h4>Submitted Data:</h4>
                <p>Name : {submittedData.name}</p>
                <p>Email : {submittedData.email}</p>
                </div>
            )}
        </div>
    )
}