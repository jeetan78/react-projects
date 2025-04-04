
import './App.css'
import MainPage from './MainPage'
import { Route, Routes } from 'react-router-dom'
import MealInfo from './MealInfo'

function App() {
  return (
    // <MainPage/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/:mealId' element={<MealInfo/>}/>
    </Routes>
  )
}

export default App
