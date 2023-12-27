import React from 'react'
import { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';
import axios from 'axios';
import Api from './Api';
import './Home.css'
import Category from './Category';
import { useNavigate } from 'react-router-dom';
import DishChoice from './DishList';

function Home() {
    const [menu, setMenu] = useState('');
    const [data, setdata] = useState('');
    const [showDishList, setShowDishList] = useState(false);

    const navigate = useNavigate();


    // const fetchmenu = async () => {
    //   const response = await axios.get('http://localhost:3001/menu');     // note that this is the get request and will solve the problem below
    //   setMenu(response.data)                                            // below was the post request to send data to the server now the data is stored in the server so if we refresh the screen the data will be gone from the screen but still will be in the data base so to show that data again we will use the GET REQUEST 
    // }

    // useEffect(() => {     
    //   fetchmenu()                                                    //useEffect is used to preve  nt the infinite loop here
    // }, []);


    const Createmenu = async (dish) => {
        setdata(dish)


        //   const response = await axios.post('http://localhost:3001/menu', {
        //     dish: dish,

    };

    //   const updatedmenu = [
    //     ...menu,
    //     response.data
    //   ];
    //   setMenu(updatedmenu);
    // };


    // const display = () => {
    //   return menu.map((item) => (
    //     <div className='containerHistory'>

    //       <div className='history' key={item.id}> {item.dish}</div>

    //     </div>
    //   ));


    // };   

    const handleClick = () => {
        setShowDishList(true)




    }
    const handleClick2 = () => {
        setShowDishList(false)


    }

    const choosing = (index) => {
        setMenu(index)

        return <DishChoice chose={menu}/>

    }

    useEffect(() => {
        console.log('Inside useEffect:', menu);

    }, [menu]);


    return (
        <div className="App">
            <div className='container'>
                <div className='containerf'>

                    <img className='back' width='10%' height='15%' onClick={handleClick2} src='https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png' />
                    {/* <button className='back' onClick={handleClick2}>Back</button> */}
                    <button className='search' onClick={handleClick}>Search for dishes</button>
                </div>
               
                {/* <img className='hero' src='https://www.tasteofhome.com/wp-content/uploads/2018/01/Vegetable-Turkey-Soup_EXPS_FT21_27276_F_1117_1-10.jpg'/> */}
            </div>




            <Search onCreate={Createmenu} />

            {showDishList && (
                <>
                    <Api data={data} />

                </>
            )}
            {/* <DishChoice chosen={chosen}/> */}
            {/* <h2>Your search history:</h2>
        {display()} 
      */}


            <Category onchoosing={choosing} />
            {/* <DishChoice chosen={menu}/> */}
        </div>



    );
}

export default Home;
