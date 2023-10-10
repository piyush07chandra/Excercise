import { useState,useRef } from "react";
import App from "./App";



const Part=(()=>{
    
    const [part, setPart] = useState(["chest"]); // initilaze default valu from api
    const targetRef=useRef(null);

    const changePart = (newPart) => {
        setPart(newPart); // Update 'part' when the button is clicked
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
      }

    
    return(
        <>
           <div className="relative h-screen flex items-center justify-center text-center bg-center bg-cover transition-opacity  duration-1000" style={{ backgroundImage: `url("/images/image1.jpg")` }}>
      
            <div className="relative ">
                <h1 className=" text-5xl font-bold text-white animate-bounce">Workout Warriors Welcome</h1>
                <p className=" text-3xl mt-3 text-white ">Exercise is a celebration of what your body can do, not a punishment for what you ate</p>
       <button className=" bg-yellow-500 p-3 m-2  rounded-3xl hover:bg-red-600 hover:text-white" onClick={() => changePart('chest')}>chest excercise</button>
       <button className="  bg-yellow-500 p-3 m-2 rounded-3xl hover:bg-red-600 hover:text-white " onClick={() => changePart('back')}>back excercise</button>
       <button className="  bg-yellow-500 p-3 m-2 rounded-3xl hover:bg-red-600 hover:text-white" onClick={() => changePart('cardio')}>cardio excercise</button>
       <button className="  bg-yellow-500 p-3 m-2 rounded-3xl hover:bg-red-600 hover:text-white" onClick={() => changePart('neck')}>neck excercise</button>
       <button className="  bg-yellow-500 p-3 m-2 rounded-3xl hover:bg-red-600 hover:text-white" onClick={() => changePart('shoulder')}>shoulder excercise</button>
       <button className="  bg-yellow-500 p-3 m-2 rounded-3xl hover:bg-red-600 hover:text-white" onClick={() => changePart('waist')}>waist excercise</button>
       <button className="  bg-yellow-500 p-3 m-2 rounded-3xl hover:bg-red-600 hover:text-white" onClick={() => changePart('lower arms')}>lower arms excercise</button>
       <button className="  bg-yellow-500 p-3 m-2 rounded-3xl hover:bg-red-600 hover:text-white" onClick={() => changePart('lower legs')}>lower legs excercise</button>
       <button className="  bg-yellow-500 p-3 m-2 rounded-3xl hover:bg-red-600 hover:text-white" onClick={() => changePart('upper arms')}>upper arms excercise</button>
       <button className="  bg-yellow-500 p-3 m-2 rounded-3xl hover:bg-red-600 hover:text-white" onClick={() => changePart('upper legs')}>upper legs excercise</button>
            </div>
           </div>
        <div ref={targetRef}><App  part={part}/></div>
           
        </>
    )
})

export default Part;