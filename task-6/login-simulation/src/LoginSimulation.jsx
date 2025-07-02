import { useState } from 'react';
export default function LoginSimulation(){
      let [username,setUsername]=useState('');
  let[password,setPassword]=useState('');
  let[isLoggedIn,setIsLoggedIn]=useState(false);

  let handleUsernameChange=(e)=>{
     setUsername(e.target.value);
  }
  let handlePasswordChange=(e)=>{
    setPassword(e.target.value);
  }

  let handleLogin=()=>{
    if(username && password){
      setIsLoggedIn(true);
    }
  }
  let handleLogout=()=>{
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  }
    return(
        <div>
            {isLoggedIn ? (
                <div>
                    <h2>Welcome,{username}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <input placeholder="enter username"
                    value={username} onChange={handleUsernameChange} />
                    &nbsp;
                    <input placeholder="enter password"
                    value={password} onChange={handlePasswordChange} />
                    &nbsp;
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    )
}