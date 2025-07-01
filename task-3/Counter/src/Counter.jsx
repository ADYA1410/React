import { useState } from "react"

export default function Counter(){
    let[count,setCount]=useState(0);

    let incCount=()=>{
      setCount(count+1);
    }
    let decCount=()=>{
        setCount(count-1);
    }
    let reset=()=>{
        setCount(0);
    }
    return(
        <div>
            <h2>Count:{count}</h2>
            <button onClick={incCount}>Increment</button>&nbsp;
            <button onClick={decCount}>Decrement</button>&nbsp;
            <button onClick={reset}>Reset</button>
        </div>
    )
}