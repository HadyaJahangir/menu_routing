import { useState, useEffect } from 'react';
import axios from 'axios';
import './catigory.css';
import DishChoice from './DishList';
import { Link, Outlet } from 'react-router-dom'; // Import Link



function Category({onchoosing}) {
    const [categories, setCategories] = useState([]);


    const fetchData = async () => {
        try {
            const responseC = await axios.get(
                'https://www.themealdb.com/api/json/v1/1/categories.php'
            );
            const { categories } = responseC.data;

            if (categories) {
                setCategories(categories);
                
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData(); // Fetch data when the component mounts
    }, []);

    const handleClick=(index)=>{
      console.log(index)
        onchoosing(index)
      

        // navigate('/dishchoice'); 
      //  return <DishChoice chose={index}/>

    }

    return (
        <div>
            <h2>Categories:</h2>

            {categories.map((category) => (


                <div className='outerDiv' key={category.idCategory}>
                    <img className='dish' src={category.strCategoryThumb} />
                    <h2 className='name'><b>{category.strCategory}</b></h2>
                    <Link to='/dishchoice'>
                          <button onClick={handleClick.bind(null,category.strCategory)} className='button'>Search</button>
                   

                    </Link>
         
                    {/* <button onClick={() => handleClick(category.strCategory)} className='button'> Search</button> */}
                    {/* <div className='disc'>{category.strCategoryDescription.split('.')
                        .slice(0, 1)
                        .map((sentence, index) => (
                          
                            <p key={index} className={index >= 10 && index <= 12 ? 'oneline' : ''}>
                            {sentence.trim()}.
                            <button onClick={() => handleClick(category.strCategory)} className='button'> Search</button>
                          </p>
                        ))}</div> */}
                        
                </div>

            ))}

        </div>
    );
}

export default Category;
