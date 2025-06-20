import React from 'react'
import { Button } from '../components/ui/button'

const Home = () => {
  return (
    <div className='w-full h-[60vh] flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-amber-700 text-3xl' >Welcome To Our Book-Tracker</h1>
      <Button variant={'outline'} className="text-xl  !px-8 !py-3" >Welcome!!!</Button>
    </div>
  )
}

export default Home
