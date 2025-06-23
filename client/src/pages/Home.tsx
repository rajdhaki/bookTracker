import React from 'react'
import BookCard from '../components/BookCard'


const Home = () => {
  return (
    <div>
      <div className='w-full h-full flex flex-col gap-2.5 justify-center items-center !mt-4'>
        <h1 className='text-black font-semibold text-3xl' >Book-Tracker</h1>
        <p className='w-[40%] text-center' >Inspirational designs, illustrations, and graphic elements from the world’s best designers.
          Want more inspiration? Browse our search results</p>
      </div>
      <div className= "flex justify-center items-center gap-3 !mt-8 !px-32">
        <BookCard/>
        <BookCard/>
        <BookCard/>
        <BookCard/>



      </div>
    </div>
  )
}

export default Home
