import './App.css'
import UserCard from './UserCard'
function App() {
 let names=['Adya','Ram','Priya'];
 let ages=[30,40,50];
 let locations=['kerala','Pune','Delhi'];
  return (
    <>
      {names.map((name,idx)=>{
        return <UserCard
        key={idx}
        name={name}
        age={ages[idx]}
        location={locations[idx]}
        idx={idx}/>
      })}
    </>
  )
}

export default App
