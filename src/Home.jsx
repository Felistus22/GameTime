import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div className='bg-black text-white h-full w-full m-auto'>
            <div className='flex justify-center text-lg'>
                <div className='p-6 text-[var(--primary-light)]'><Link to='/'>FILIESMALWRLD</Link></div>
                <div className='grid grid-flow-col gap-5 p-6 text-2xl justify-between text-emerald-500'>
                    <Link to='/tictactoe'>TicTacToe</Link> 
                    <Link to='/nopuzzle'>No. Puzzle</Link>
                    <Link to='/puzzle'>Puzzle</Link>
                </div>
            </div>
            <h1 className='flex items-center justify-center text-indigo-600 text-xl'>Game time!</h1>
        </div>
      )
}

export default Home
