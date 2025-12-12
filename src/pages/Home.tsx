import React from 'react'
import { xl2 } from '../assets/images'
import { useNavigate } from 'react-router-dom';
import { loadingService } from '../hooks/useLoading'

const Home = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    loadingService.show()
    navigate('/recipe'); // Replace with your target route
    setTimeout(() => {
      loadingService.hide()
    }, 1000)
  };


  return (
    <>
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center space-y-4'>
        <img src={xl2} alt='Xie Lian Cooking' className='w-50 h-50' />
      {/* </div> */}
      {/* <div className='flex flex-col items-center justify-center'> */}
        <button className="px-6 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
          onClick={handleClick}>
          get recipe
        </button>
      </div>
    </div>

    </>
  )
}

export default Home