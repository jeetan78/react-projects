import React, { useState } from 'react'
import MealCard from './MealCard';

const MainPage = () => {
    const [recipe, setRecipe] = useState('');
    const [data, setData] = useState([]);
    const [message, setMessage] = useState('');
    const searchRecipe = async () => {
      if(!recipe) {
        setMessage('Please enter a recipe');
        setData([]);
      } else {
        const recipes = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`);
        const recipesData = await recipes.json();
        setData(recipesData.meals);
        setMessage('');
      }
    }
  return (
    <div className='container'>
        <div className='search-bar'>
            <input value={recipe} onChange={(e) => setRecipe(e.target.value)} type="text" placeholder='Enter a recipe...' />
            <button onClick={searchRecipe}>Search</button>
        </div>
        <h3 className='msg'>{message}</h3>
        <MealCard details={data}/>
    </div>
  )
}

export default MainPage