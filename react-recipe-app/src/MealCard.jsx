import React from 'react'
import { NavLink } from 'react-router-dom'

const MealCard = ({ details }) => {
  return (
    <div className='meals'>
        {
            details ?
            details.map(dish =>
                <div className='mealImg' key={dish.idMeal}>
                    <img src={dish.strMealThumb} />
                    <p>{dish.strMeal}</p>
                    <NavLink to={`/${dish.idMeal}`}><button>Recipe</button></NavLink>
                </div>
            ) : 'Recipe not found'
        }
    </div>
  )
}

export default MealCard