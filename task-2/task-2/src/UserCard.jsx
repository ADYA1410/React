export default function UserCard({name,age,location,idx}){
    return(
        <div>
            <h2>name : {name}</h2>
            <p>
                age : {age} <br />
                location : {location}
            </p>
        </div>
    )
}