import { useState } from "react";
import './Joke.css';
export function Joke() {
 const [joke, setJoke ]= useState('Your joke is waiting : )');
 const handleClick = () => {
    fetch(`https://icanhazdadjoke.com/`,{
        headers:{
            'Accept': 'application/json',
        }
    })
    .then(res => res.json())
    .then((data)=>setJoke(data.joke))
 
 }
    return (
      <div className="Joke">
        <p>{joke}</p>
        <button onClick={handleClick}>Generate random Dad joke</button>
      </div>
    );
  }
  