import React from 'react'
import { recipes } from '../constants'

const Recipe = () => {
  const recipe = recipes[0];
  return (
    <div className='min-h-screen contain-wrapper flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <img src={recipe.image} alt={recipe.name} className='w-50 h-50' />
        <h2 className='text-2xl font-medium'>{recipe.name}</h2>
        <p className='text-lg'>{recipe.description}</p>
        <span className='font-bold'>ingredients:</span>
        
          <ul className='list-disc pl-5'>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className='text-lg'>{ingredient}</li>
            ))}
          </ul>
      </div>

      <div className='flex items-center gap-2 justify-center mt-8'>
        <button className="px-6 py-2 bg-white text-red-800 rounded border border-red-800 dark:border-0 hover:bg-red-800 hover:text-white transition">
          home
        </button>
        <button className="px-6 py-2 bg-red-800 text-white rounded border border-red-800 dark:border-0 hover:bg-white hover:text-red-800 transition">
          get recipe
        </button>
      </div>
    </div>
  )
}

export default Recipe