import {useEffect, useState} from "react";
import './App.css';
import PropTypes from 'prop-types';


const App=({part})=>{
    const [excercise, setExcercise] = useState([]);
     
    
    
   useEffect (()=>{ 

      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}?limit=10`;
  const fetchData=async()=>{
   
    const options = {
      method: 'GET',
      headers: {
       'X-RapidAPI-Key': '64aa71539fmsh1585e4461864a6bp12a37cjsn719a1550a706',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result)
      setExcercise(result);
      
    } catch (error) {
      console.error(error);
    }
  }

  
  fetchData()
  

},[part]) //add part as a dependency of useEffect



    
    return (
       <>
      
       <div className="flex items-center justify-center bg-black pt-4">
       <div className=" text-red-400 text-center text-2xl bg-black grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-10  pb-10">
        {excercise.map((object) => (
          <div key={object.id}>
          <img className=" rounded-2xl w-full" src={object.gifUrl}></img>
            <h2>EXCERCISE: {object.name}</h2>
            <h2>BODYPART: {object.bodyPart}</h2>
            <h2>EQUIPMENT: {object.equipment}</h2>
            <h2>TARGET: {object.target}</h2>
            
          </div>
        ))}
      </div>
       </div>
    
       </>
        
    )
}

App.propTypes = {
  part: PropTypes.string.isRequired, // Here, we specify that 'part' is a required string prop.
};

export default App;