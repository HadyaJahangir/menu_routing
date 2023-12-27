import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './api.css';
import Catigory from './Category';

const Api = ({ data}) => {
  const [instructions, setInstructions] = useState('');
  const [imageURL, setImage] = useState('');
  const [video, setvideo] = useState('');
  const [ingredients, setingredients]=useState([]);
  

  const fetchData = async () => {
  
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${data}`
      );
      
      
      const { meals } = response.data;
      
      if (meals && meals.length > 0) {
        const ingredientArray = [];
        const firstMealInstructions = meals[0].strInstructions;
        for (let i = 1; i <= 20; i++) {
          const ingredient = meals[0][`strIngredient${i}`];
          const measure = meals[0][`strMeasure${i}`];
  
          if (ingredient && measure) {
            ingredientArray.push(`${measure} ${ingredient}`);
          }
        }
        setImage(meals[0].strMealThumb);
        setvideo(meals[0].strYoutube)
        setingredients(ingredientArray);
        setInstructions(firstMealInstructions);
      } else {
        setInstructions('Instructions not found for this dish.');
      }
     
  };

  useEffect(() => {
    fetchData(); 
  }, [data]);

  


  return (
    <div>
    
      <h1>Meal Instructions for {data}</h1>
      <div className="instructions">
        <img className='image' src={imageURL}/>
       
        <p>
          <ul>
          <ol>   <h4> Ingrediants:</h4>
                  {ingredients.map((ingredient, index) => (
                    <li className='ingr' key={index}>{ingredient},</li>
                  ))}
                </ol>
           <li>{instructions}</li>
           <li>Tuturial for the same can be avalible on: <a className='video'>{video}</a> </li>
          </ul>
          </p>
      </div>
    </div>
  );
  };

export default Api;

