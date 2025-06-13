import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/recipe'); // Replace with your target route
  };


  return (
    <>
    <div className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center space-y-4'>
        <img src='src/assets/images/xie_lian_2.png' alt='Xie Lian Cooking' className='w-50 h-50' />
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