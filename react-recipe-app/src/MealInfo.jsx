import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MealInfo = () => {
    const {mealId} = useParams();
    const [info, setInfo] = useState();
    
    const getInfo = async () => {
      const meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const mealInfo = await meal.json();
      console.log('test', mealInfo);      
      setInfo(mealInfo.meals[0]);
    }
    
    useEffect(() => {
      if(info !== '') {
        getInfo();
      }
    }, [])
  return (
    <>
      {!info ? 'Data not found'
        : <div className='mealInfo'>
          <img src={info.strMealThumb} />
          <div className='info'>
            <h1>Recipe Detail</h1>
            <button>{info.strMeal}</button>
            <h3>Instructions</h3>
            <p>{info.strInstructions}</p>
          </div>
        </div> 
      }
    </>
  )
}

export default MealInfo