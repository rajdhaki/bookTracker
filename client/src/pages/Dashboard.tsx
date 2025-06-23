import React from 'react'
import { Button } from '../components/ui/button'
import BookCard from '../components/BookCard'

const Dashboard = () => {
  return (
    <div className='!px-40 !mt-3'>
    <div className='flex justify-between items-center '>
    <div>
      <h1 className='text-lg font-semibold' >Raj Dhaki</h1>
      <p className='text-gray-400' >raj@gmail.com</p>
    </div>

    <div className=' flex  justify-center items-center '>
    <Button className='!px-6 !py-4 !me-2.5'> Add Book</Button>
    <Button variant={"outline"}  className='!px-6 !py-4'> Update Book</Button>
    </div>
    </div>

    <div>
        <h1 className='!mt-6 text-4xl text-center font-bold'>Your Books</h1>
        <div className='!mt-8 flex  justify-center  items-center  gap-3.5'>
            <BookCard/>
            <BookCard/>
            <BookCard/>

        </div>
    </div>
    </div>
  )
}

export default Dashboard
