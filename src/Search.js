import React from 'react'
import {useState, useEffect} from 'react'
import './search.css';
import Catigory from './Category';



function Search({onCreate}) {
    const [dish, setDish]=useState('');
    const [submit, setsubmit]=useState(true)
  
    const handleChange=(event)=>{
        setDish(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setsubmit(false)
       onCreate(dish);
      
    //    console.log(sub);

      
        setDish('')

    }

    useEffect(() => {
        // Use an effect to observe changes in submit
        if (submit) {
         
        }
      }, [submit]);
  return (
   <div className='searchC'>
    <h1 className='cook'>Lets get Cooking!!!</h1>
    
    <form onSubmit={handleSubmit}>

        <label className='Search'>Search a dish</label>
        <input className='input' value={dish} onChange={handleChange}/>
        <button className='submit'>Submit</button>
    </form>
   
    
    </div>
  )
}

export default Search
