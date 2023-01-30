import { useEffect, useState } from "react";

const Home = () =>{

    const [workouts, setWork] = useState(0);

    useEffect(() => {
        console.log("Nu er vi startet")
       const fetchWorkouts = async () =>{
           const response = await fetch("/api/workouts")
           console.log(response);
           const json = await response.json();
console.log(response);
           if(response.ok){
           
            console.log(response)
            console.log(json);
              setWork(json);
           }
           else{
            console.log("request not ok!")
           }
       }

       fetchWorkouts();
    }, [])

    return(
        <div className="home">
            <div className="workouts">
                <h1>  {workouts.mesg} </h1>
                <p> Name: {workouts.person.name}</p>
                <p> Age: {workouts.person.age}</p>
            </div>
        </div>
    )
}

export default Home;